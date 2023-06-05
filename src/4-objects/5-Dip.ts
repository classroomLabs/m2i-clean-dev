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
