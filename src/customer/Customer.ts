import { IAccount } from "../interfaces/interfaces";
import { Person } from "./Person";

export class Customer extends Person {
  protected accounts: IAccount[] = []

  constructor(
    id: number,
    name: string,
    address: string,
    phoneNumber: string,
    email: string
  ) {
    super(id, name, address, phoneNumber, email)
  }

  getAccounts(): IAccount[] {
    return [...this.accounts]
  }

  openAccount(account: IAccount): void {
    this.accounts.push(account)
    console.log(`Account ${account.accountNumber} created successfully!`)
  }

  closeAccount(account: IAccount): void {
    this.accounts = this.accounts.filter(ac => ac !== account)
    console.log(`Account ${account.accountNumber} successfully deleted!`)
  }

  getRole(): string {
    return "Customer";
  }
}