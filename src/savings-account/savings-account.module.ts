import { Module } from '@nestjs/common';
import { SavingsAccountService } from './savings-account.service';
import { AccountService } from 'src/account/account.service';
import { SavingsAccountController } from './savings-account.controller';

@Module({
  providers: [SavingsAccountService, AccountService],
  controllers: [SavingsAccountController],
})
export class SavingsAccountModule {}
