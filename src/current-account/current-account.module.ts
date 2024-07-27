import { Module } from '@nestjs/common';
import { CurrentAccountService } from './current-account.service';
import { AccountService } from 'src/account/account.service';

@Module({
  providers: [CurrentAccountService, AccountService],
})
export class CurrentAccountModule {}
