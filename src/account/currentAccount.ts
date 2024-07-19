import { BaseAccount } from "./baseAccount";
import { Customer } from "../customer/Customer";
import { AccountType, TransactionType } from "../utils/utils";
import Transaction from "./Transaction";


export class CurrentAccount extends BaseAccount {
  constructor(
    accountNumber: string,
    initialBalance: number,
    customer: Customer,
    public overdraftLimit: number // limite do cheque
  ) {
    super(accountNumber, initialBalance, customer, AccountType.Current);
  }

  withdraw(amount: number): void {
    if (this.balance + this.overdraftLimit >= amount) {
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
      console.log(`Withdraw of ${amount} made successfully from account ${this.accountNumber}!`);
    } else {
      console.log("Insufficient funds, including overdraft limit.");
    }
  }
}