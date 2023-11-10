export class Bug {
  public id: number;
  public title: string;
  public tester: string;
  public date: string;
  public description: string;

  constructor(
    id: number,
    title: string,
    tester: string,
    date: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.tester = tester;
    this.date = date;
    this.description = description;
  }
}
