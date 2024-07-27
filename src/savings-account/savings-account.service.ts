import { Injectable } from '@nestjs/common';
import { AccountStatus } from 'src/account/account.model';
import { AccountService } from 'src/account/account.service';
import { SavingsAccount } from './savings-account.model';

@Injectable()
export class SavingsAccountService {
  constructor(private readonly accountService: AccountService) {}

  openSavingsAccount(
    customerId: number,
    balance: number,
    accountStatus: AccountStatus,
    interestRate: number,
  ): SavingsAccount {
    const accounts = this.accountService.readAccounts();
    const accountNumber = `${Math.floor(Math.random() * 1000000)}`;

    const newAccount = new SavingsAccount(
      accountNumber,
      balance,
      customerId,
      accountStatus,
      interestRate,
    );

    accounts.push(newAccount);
    this.accountService.writeAccount(accounts);

    return newAccount;
  }
}
