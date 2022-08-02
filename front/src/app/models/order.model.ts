export class OrderModel {
  constructor(
    public salads: [{
      saladId: string,
      amount: number,
      price: number
    }],
    public total: number
  ) {}


}
