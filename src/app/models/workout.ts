import { Exercise } from './exercise';
import { User } from './user';

export class Workout {
  id: number;
  name: string;
  description?: string;
  location?: string;
  date?: string;
  time?: string;
  user: User;
  exercises?: Exercise[];
  pumpScore?: number;
  nerveScore?: number;
  stressScore?: number;

  constructor(id: number, name: string, user: User, description?: string, location?: string, date?: string, time?: string, exercises?: Exercise[], pumpScore?: number, nerveScore?: number, stressScore?: number) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.description = description;
    this.location = location;
    this.date = date;
    this.time = time;
    this.exercises = exercises;
    this.pumpScore = pumpScore;
    this.nerveScore = nerveScore;
    this.stressScore = stressScore;
  }
}
