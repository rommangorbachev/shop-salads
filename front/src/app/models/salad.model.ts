export class SaladModel {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public image: string,
    public price: number
  ) {}
}


export interface SaladsError {
  message: string;
}
