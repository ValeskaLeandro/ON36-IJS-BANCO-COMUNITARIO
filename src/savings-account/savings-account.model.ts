import { Account, AccountStatus, AccountType } from 'src/account/account.model';

export class SavingsAccount extends Account {
  constructor(
    accountNumber: string,
    balance: number,
    customerId: number,
    accountStatus: AccountStatus,
    public interestRate: number,
  ) {
    super(
      accountNumber,
      balance,
      customerId,
      AccountType.SAVINGS,
      accountStatus,
    );
  }
}
