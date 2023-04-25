// ❌
export class Payments {
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
interface Payment {
  pay(paymentInfo: any): void;
}
export class CreditCardPayment implements Payment {
  pay(paymentInfo: any) {
    // pay with credit card
  }
}
export class BankTransferPayment implements Payment {
  pay(paymentInfo: any) {
    // pay with bank transfer
  }
}
export class PaypalPayment implements Payment {
  pay(paymentInfo: any) {
    // pay with paypal
  }
}
export class PaymentsD {
  pay(method: Payment, paymentInfo: any) {
    method.pay(paymentInfo);
  }
}
