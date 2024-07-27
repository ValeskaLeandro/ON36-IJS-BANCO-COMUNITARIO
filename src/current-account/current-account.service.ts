import { Injectable } from '@nestjs/common';
import { AccountStatus } from 'src/account/account.model';
import { AccountService } from 'src/account/account.service';
import { CurrentAccount } from './current-account.model';

@Injectable()
export class CurrentAccountService {
  constructor(private readonly accountService: AccountService) {}

  openCurrentAccount(
    customerId: number,
    balance: number,
    accountStatus: AccountStatus,
    overdraftLimit: number,
  ): CurrentAccount {
    const accounts = this.accountService.readAccounts();
    const accountNumber = `${Math.floor(Math.random() * 1000000)}`;

    const newAccount = new CurrentAccount(
      accountNumber,
      balance,
      customerId,
      accountStatus,
      overdraftLimit,
    );

    accounts.push(newAccount);
    this.accountService.writeAccount(accounts);

    return newAccount;
  }
}
