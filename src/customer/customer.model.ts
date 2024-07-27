import { Account } from "src/account/account.model";

export class Customer {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  address: string;
  enrollment: string;
  IES: string;
  accounts: Account[];
  accessionDate: Date;
  managerId: number
}
