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

interface Pay {
  pay(method: any, paymentInfo: any): void;
}

// ✅
export class PaymentsWithRefunds implements Pay {
  private payments: Payments = new Payments();

  pay(method: any, paymentInfo: any) {
    this.payments.pay(method, paymentInfo);
  }

  refund(method: any, paymentInfo: any) {
    switch (method) {
      case "credit":
        // refund with credit card
        break;
      case "transfer":
        // refund with bank transfer
        break;
      case "paypal":
        // refund with paypal
        break;
      default:
        throw new Error("Invalid payment method");
    }
  }
}
