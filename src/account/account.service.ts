import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Account, AccountStatus, AccountType } from './account.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AccountService {
  private readonly filePath = path.resolve('src/data/accounts.json');

  public readAccounts(): Account[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Account[];
  }

  public writeAccount(accounts: Account[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  closeAccount(accountNumber: string): Account {
    const accounts = this.readAccounts();
    const account = accounts.find((ac) => ac.accountNumber === accountNumber);

    if (!account) {
      throw new HttpException('Account not found.', HttpStatus.NOT_FOUND);
    }

    if (account.accountStatus === AccountStatus.INACTIVE) {
      throw new HttpException(
        'Account is already inactive.',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      account.accountStatus = AccountStatus.INACTIVE;
    }

    this.writeAccount(accounts);

    return account;
  }

  updateAccountType(accountNumber: string): Account {
    const accounts = this.readAccounts();
    const account = accounts.find((ac) => ac.accountNumber === accountNumber);

    if (account.accountStatus === AccountStatus.INACTIVE) {
      throw new HttpException(
        'The account is inactive and cannot be changed.',
        HttpStatus.BAD_REQUEST,
      );
    } else if (account.accountType === AccountType.CURRENT) {
      account.accountType = AccountType.SAVINGS;
    } else {
      account.accountType = AccountType.CURRENT;
    }

    this.writeAccount(accounts);

    return account;
  }

  getAll(): Account[] {
    return this.readAccounts();
  }

  getAccountByCustomer(customerId: number): Account[] {
    const accounts = this.readAccounts();
    const customerAccounts = accounts.filter(
      (ac) => ac.customerId === customerId,
    );

    return customerAccounts;
  }
}
