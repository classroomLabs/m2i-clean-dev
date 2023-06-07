/**
 * Crear una clase nóminas con un método que calcule la retención de IRPF
 * @description Recibirá el salario bruto anual y devolverá la retención
 * El cálculo es en base a la siguiente tabla de tramos:
 * 0 - 12450 19%
 * 12450 - 20200 24%
 * 20200 - 35200 30%
 * 35200 - 60000 37%
 * 60000 - 300000 45%
 * 300000 - 47%
 * No deben usarse estructuras de control
 * En su lugar, usar un array de objetos con los tramos y sus porcentajes
 */
export class Nóminas {
  private tramos: Tramo[] = [
    { desde: 0, hasta: 12450, porcentaje: 19 },
    { desde: 12450, hasta: 20200, porcentaje: 24 },
    { desde: 20200, hasta: 35200, porcentaje: 30 },
    { desde: 35200, hasta: 60000, porcentaje: 37 },
    { desde: 60000, hasta: 300000, porcentaje: 45 },
    { desde: 300000, hasta: Infinity, porcentaje: 47 },
  ];

  getRetención(salario: number): number {
    this.validarSalario(salario);
    const tramo = this.obtenerTramo(salario);
    return this.calcularRetención(salario, tramo.porcentaje);
  }

  private validarSalario(salario: number) {
    if (salario < 0) {
      throw new Error(`El salario ${salario} no puede ser negativo`);
    }
    if (salario > 1000000) {
      throw new Error(`El salario ${salario} no puede ser mayor de 1.000.000`);
    }
  }
  private obtenerTramo(salario: number): Tramo {
    const byRango = (tramo: Tramo): boolean => salario >= tramo.desde && salario < tramo.hasta;
    const tramo = this.tramos.find(byRango);
    if (!tramo) {
      throw new Error(`No se ha encontrado un tramo para el salario ${salario}`);
    }
    return tramo;
  }
  private calcularRetención(salario: number, porcentaje: number) {
    const factor = porcentaje / 100;
    return salario * factor;
  }
}
type Tramo = {
  desde: number;
  hasta: number;
  porcentaje: number;
};
