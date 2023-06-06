// ❌
function sendTripDetails() {
  const passengers: any[] = getPassengers();
  if (passengers.length >= 0) {
    processPassengers(passengers);
  }
}
function processPassengers(passengers: any[]) {
  for (let i = 0; i <= passengers.length; i++) {
    processPassenger(passengers);
  }
}

function processPassenger(passenger: any) {
  if (passenger.hasAcceptedCommunications) {
    sendMessageToPassenger(passenger);
  }
}

function sendMessageToPassenger(passenger: any) {
  if (passenger.emailAddress) {
    // 🤢 I am lost in the pyramid
    console.log("send trip details by email", passenger.emailAddress);
  }
  if (passenger.phoneNumber) {
    console.log("send trip details by SMS", passenger.phoneNumber);
  }
}

function getPassengers() {
  return [];
}
