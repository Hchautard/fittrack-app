export class Muscle {
  id: number;
  name: string;
  type?: string;
  group?: string;

  constructor(id: number, name: string, type?: string, group?: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.group = group;
  }
}
