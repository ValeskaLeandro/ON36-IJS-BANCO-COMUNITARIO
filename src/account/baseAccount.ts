import { Customer } from "../customer/Customer";
import { IAccount } from "../interfaces/interfaces";
import { TransactionType } from "../utils/utils";
import Transaction from "./Transaction";

export abstract class BaseAccount implements IAccount {
  protected balance: number;
  protected transactions: Transaction[] = [];

  constructor(
    public accountNumber: string,
    initialBalance: number,
    public customer: Customer,
    public accountType: string
  ) {
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }

  getTransactions(): Transaction[] {
    return [...this.transactions];
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.error("Deposit amount must be positive");
      return;
    }
    this.balance += amount;
    this.transactions.push(
      new Transaction(
        this.generateTransactionId(),
        this,
        amount,
        new Date(),
        TransactionType.Deposit
      )
    );
    console.log(`Deposit of ${amount} made successfully!`);
  }
  
  abstract withdraw(amount: number): void;

  transfer(amount: number, toAccount: IAccount): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      toAccount.deposit(amount);
      this.transactions.push(
        new Transaction(
          this.generateTransactionId(),
          this,
          amount,
          new Date(),
          TransactionType.TransferOut
        )
      );
      console.log(`Transfer of ${amount} successfully carried out to account ${toAccount.accountNumber}!`);
    } else {
      console.log("Insufficient funds");
    }
  }

  protected generateTransactionId(): number {
    return Math.floor(Math.random() * 1000000); // provisório
  }
}