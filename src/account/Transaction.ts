import { Account } from "./Account";

export default class Transaction{
  constructor(
    public transactionId: number,
    public account: Account,
    public amount: number,
    public date: Date,
    public type: string
  ) {}

  processTransaction(): void {
     
  }
}