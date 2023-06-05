// ❌
class Activities {
  addNew() {}
  remove() {}
  cancel() {}
  confirm() {}
  enrollParticipant() {}
  removeParticipant() {}
  finish() {}
}

class App {
  main() {
    const activities: Activities = new Activities();
    this.createActivity(activities);
    this.enrollParticipant(activities);
    this.markActivityAsFinished(activities);
  }
  createActivity(activities: Activities) {
    activities.addNew();
  }
  enrollParticipant(activities: Activities) {
    activities.enrollParticipant();
  }
  markActivityAsFinished(activities: Activities) {
    activities.finish();
  }
}

// ✅
