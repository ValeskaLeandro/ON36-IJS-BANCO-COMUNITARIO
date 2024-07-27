import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.model';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getAll(): Account[] {
    return this.accountService.getAll();
  }

  @Get('/:customerId')
  getAccountsByCustomer(
    @Param('customerId', ParseIntPipe) customerId: number,
  ): Account[] {
    return this.accountService.getAccountByCustomer(customerId);
  }

  @Patch('/close/:accountNumber')
  closeAccount(@Param('accountNumber') accountNumber: string): Account {
    return this.accountService.closeAccount(accountNumber);
  }

  @Patch('/update-account-type/:accountNumber')
  updateAccountType(@Param('accountNumber') accountNumber: string) {
    return this.accountService.updateAccountType(accountNumber);
  }
}
