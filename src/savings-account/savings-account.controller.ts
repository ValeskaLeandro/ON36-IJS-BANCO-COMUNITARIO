import { Body, Controller, Post } from '@nestjs/common';
import { AccountStatus } from 'src/account/account.model';
import { SavingsAccountService } from './savings-account.service';

@Controller('savings-account')
export class SavingsAccountController {
  constructor(private readonly savingsAccountService: SavingsAccountService) {}

  @Post('/open')
  openSavingsAccount(
    @Body('customerId') customerId: number,
    @Body('balance') balance: number,
    @Body('interestRate') interestRate: number,
  ) {
    return this.savingsAccountService.openSavingsAccount(
      customerId,
      balance,
      AccountStatus.ACTIVE,
      interestRate,
    );
  }
}
