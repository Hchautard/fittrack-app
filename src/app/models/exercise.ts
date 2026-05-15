import { Muscle } from './muscle';

export class Exercise {
  id: number;
  name: string;
  description?: string;
  muscle?: Muscle;

  constructor(id: number, name: string, description?: string, muscle?: Muscle) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.muscle = muscle;
  }
}
