import { Body, Controller, Post } from '@nestjs/common';
import { CurrentAccountService } from './current-account.service';
import { AccountStatus } from 'src/account/account.model';

@Controller('current-account')
export class CurrentAccountController {
  constructor(private readonly currentAccountService: CurrentAccountService) {}

  @Post('/open')
  openCurrentAccount(
    @Body('customerId') customerId: number,
    @Body('balance') balance: number,
    @Body('overdraftLimit') overdraftLimit: number,
  ) {
    return this.currentAccountService.openCurrentAccount(
      customerId,
      balance,
      AccountStatus.ACTIVE,
      overdraftLimit,
    );
  }
}
