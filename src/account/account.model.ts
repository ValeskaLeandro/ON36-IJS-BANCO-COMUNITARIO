export enum AccountType {
  CURRENT = 'current',
  SAVINGS = 'savings',
}

export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export abstract class Account {
  protected balance: number;

  constructor(
    public accountNumber: string,
    initialBalance: number,
    public customerId: number,
    public accountType: AccountType,
    public accountStatus: AccountStatus,
  ) {
    this.balance = initialBalance;
  }
}
