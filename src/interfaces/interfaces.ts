import { Account } from "../account/Account";

export interface IAccount {
  accountNumber: string,
  getBalance(): number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  transfer(amount: number, account: Account): void;
}