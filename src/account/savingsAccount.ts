import { Customer } from "../customer/Customer";
import { AccountType, TransactionType } from "../utils/utils";
import { BaseAccount } from "./baseAccount";
import Transaction from "./Transaction";

export class SavingsAccount extends BaseAccount {
  constructor(
    accountNumber: string,
    initialBalance: number,
    customer: Customer,
    public interestRate: number
  ) {
    super(accountNumber, initialBalance, customer, AccountType.Savings);
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(
        new Transaction(
          this.generateTransactionId(),
          this,
          amount,
          new Date(),
          TransactionType.Withdraw
        )
      );
      console.log(`Withdraw of ${amount} made successfully!`);
    } else {
      console.log("Insufficient funds");
    }
  }

  applyInterest(): void {
    const interest = this.getBalance() * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Interest of ${interest} applied to account ${this.accountNumber}.`);
  }
}