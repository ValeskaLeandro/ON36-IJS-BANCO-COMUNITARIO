export interface IAccount {
  accountNumber: string,
  getBalance(): number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  transfer(amount: number, account: IAccount): void;
}