import { Account } from "../account/Account";
import { Person } from "./Person";

export class Customer extends Person {
  protected accounts: Account[] = []

  constructor(
    id: number,
    name: string,
    address: string,
    phoneNumber: string,
    email: string
  ) {
    super(id, name, address, phoneNumber, email)
  }

  getAccounts(): Account[] {
    return [...this.accounts]
  }

  openAccount(account: Account): void {
    this.accounts.push(account)
    console.log(`Account ${account.accountNumber} created successfully!`)
  }

  closeAccount(account: Account): void {
    this.accounts = this.accounts.filter(ac => ac !== account)
    console.log(`Account ${account.accountNumber} successfully deleted!`)
  }
  
  getRole(): string {
    return "Customer";
  }
}