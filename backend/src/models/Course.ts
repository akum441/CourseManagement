// models/Course.ts

export interface Course {
    id: number;
    name: string;
    description: string;
    members: Array<string>;
    coach_id: number;
  }
  