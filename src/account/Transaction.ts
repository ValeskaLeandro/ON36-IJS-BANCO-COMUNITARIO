import { IAccount } from "../interfaces/interfaces";

export default class Transaction{
  constructor(
    public transactionId: number,
    public account: IAccount,
    public amount: number,
    public date: Date,
    public type: string
  ) {}

  processTransaction(): void {
     
  }
}