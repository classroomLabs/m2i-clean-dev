// ❌
class Database {
  select(query: string) {
    return 0;
  }
}
const db = new Database();

function getAvailablePlaces(tripId: string) {
  const capacity = selectCapacityByTrip(tripId);
  const tripBookedSeats = selectCapacityByTripId(tripId);
  return calculateAvailable(capacity, tripBookedSeats);
}
function calculateAvailable(capacity: number, tripBookedSeats: number) {
  const OVERBOOKING_FACTOR = 1.05;
  const free = capacity - tripBookedSeats;
  return free * OVERBOOKING_FACTOR;
}

function selectCapacityByTripId(tripId: string) {
  const queryBookings = "select sum(seats) from bookings where tripId=" + tripId;
  const tripBookedSeats = db.select(queryBookings);
  return tripBookedSeats;
}

function selectCapacityByTrip(tripId: string) {
  const queryTrips = "select capacity from trips where tripId=" + tripId;
  const capacity = db.select(queryTrips);
  return capacity;
}
