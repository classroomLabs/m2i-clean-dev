// ❌

export class Bookings {
  booking: any;
  create(activity: any, client: any, places: number) {}
  save(booking: any) {}
}

// ✅
export class BookingsLogic {
  booking: any;
  create(activity: any, client: any, places: number) {}
}
export class BookingsData {
  save(booking: any) {}
}
