// ❌
export class Payments implements Pay {
  pay(method: any, paymentInfo: any) {
    switch (method) {
      case "credit":
        // pay with credit card
        break;
      case "transfer":
        // pay with bank transfer
        break;
      case "paypal":
        // pay with paypal
        break;
      default:
        throw new Error("Invalid payment method");
    }
  }
}

// ✅
interface Pay {
  pay(method: any, paymentInfo: any): void;
}

export class PaymentsOnline implements Pay {
  pay(method: any, paymentInfo: any) {
    switch (method) {
      case "credit":
        // pay with credit card
        break;
      case "transfer":
        // pay with bank transfer
        break;
      case "paypal":
        // pay with paypal
        break;
      default:
        throw new Error("Invalid payment method");
    }
  }
}

export class App {
  main() {
    const payments: Pay = this.payFactory();
    this.pay(payments);
  }
  pay(payments: Pay) {
    payments.pay("credit", "1234 1234 1234 1234");
  }
  payFactory(): Pay {
    if (true) {
      return new PaymentsOnline();
    } else {
    }
  }
}
