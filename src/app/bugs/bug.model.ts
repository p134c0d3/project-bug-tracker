export class Bug {
  constructor(
    public id: number,
    public status: string,
    public title: string,
    public tester: string,
    public primaryModule: string,
    public date: Date,
    public env: string,
    public description: string,
    public secondaryModule?: string,
    public dateRetested?: Date,
    public retestedBy?: string,
    public dateReopened?: string,
    public reopenedBy?: string,
    public dateClosed?: Date
  ) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.tester = tester;
    this.primaryModule = primaryModule;
    this.date = date;
    this.env = env;
    this.description = description;
    this.secondaryModule = secondaryModule;
    this.dateRetested = dateRetested;
    this.retestedBy = retestedBy;
    this.dateReopened = dateReopened;
    this.reopenedBy = reopenedBy;
    this.dateClosed = dateClosed;
  }
}
