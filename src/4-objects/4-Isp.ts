// ❌
class Activities implements Store, Enroll, Status {
  addNew() {}
  remove() {}
  cancel() {}
  confirm() {}
  enrollParticipant() {}
  removeParticipant() {}
  finish() {}
}

interface IActivities {
  addNew(): void;
  remove(): void;
  enrollParticipant(): void;
  removeParticipant(): void;
  cancel(): void;
  confirm(): void;
  finish(): void;
}

interface Store {
  addNew(): void;
  remove(): void;
}

interface Enroll {
  enrollParticipant(): void;
  removeParticipant(): void;
}

interface Status {
  cancel(): void;
  confirm(): void;
  finish(): void;
}

class App {
  main() {
    const activities: Activities = new Activities();
    this.createActivity(activities);
    this.enrollParticipant(activities);
    this.markActivityAsFinished(activities);
  }
  createActivity(activities: Store) {
    activities.addNew();
  }
  enrollParticipant(activities: Enroll) {
    activities.enrollParticipant();
  }
  markActivityAsFinished(activities: Status) {
    activities.finish();
  }
}

// ✅
