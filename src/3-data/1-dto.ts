// ✅ interfaces, types, or classes bring cohesion

class ClientDTO {
  name: string = "";
  country: string = "";
  city: string = "";
}

class PaymentDTO {
  amount: number = 0;
  isDeferredPayment: boolean = false;
  monthsDeferred: number = 0;
  isRecurredPayment: boolean = false;
}

class CardDTO {
  number: string = "";
  validUntil: string = "";
  verificationCode: number = 0;
}
