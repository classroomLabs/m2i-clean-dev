// ❌
export class Activity {
  title: string = "";
  location: any;
}

export class Performance extends Activity {
  performer: any;
  quorum: number = 500;
  capacity: number = 1000;
  editions: any[] = [];
}

export class Course extends Activity {
  performer: any;
  quorum: number = 0;
  capacity: number = 50;
  date: Date = new Date();
}

export class Excursion extends Activity {
  quorum: number = 10;
  capacity: number = 20;
  date: Date = new Date();
  transport: any;
}

export class FootballGame extends Activity {
  date: Date = new Date();
}

// ✅
