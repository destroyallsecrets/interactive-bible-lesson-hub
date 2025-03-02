
export interface Lesson {
  id: string;
  title: string;
  date: string; // ISO format date string
  reference: string;
  description: string;
  scriptureText: string;
  scriptureVersion: string;
  keyThemes: {
    title: string;
    description: string;
  }[];
  questions: {
    id: number;
    text: string;
    note?: string;
  }[];
  application: {
    id: number;
    text: string;
  }[];
}
