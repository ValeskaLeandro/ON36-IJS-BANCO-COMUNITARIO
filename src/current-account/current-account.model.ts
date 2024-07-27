import { Account, AccountStatus, AccountType } from 'src/account/account.model';

export class CurrentAccount extends Account {
  constructor(
    accountNumber: string,
    balance: number,
    customerId: number,
    accountStatus: AccountStatus,
    public overdraftLimit: number,
  ) {
    super(
      accountNumber,
      balance,
      customerId,
      AccountType.CURRENT,
      accountStatus,
    );
  }
}
