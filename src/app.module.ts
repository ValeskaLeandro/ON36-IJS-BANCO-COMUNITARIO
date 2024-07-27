import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountService } from './account/account.service';
import { AccountModule } from './account/account.module';
import { CurrentAccountController } from './current-account/current-account.controller';
import { CurrentAccountModule } from './current-account/current-account.module';
import { SavingsAccountService } from './savings-account/savings-account.service';
import { SavingsAccountModule } from './savings-account/savings-account.module';
import { ManagersController } from './manager/manager.controller';
import { ManagerModule } from './manager/manager.module';
import { CustomerModule } from './customer/customer.module';
import { CurrentAccountService } from './current-account/current-account.service';
import { ManagersService } from './manager/manager.service';

@Module({
  imports: [
    AccountModule,
    CurrentAccountModule,
    SavingsAccountModule,
    ManagerModule,
    CustomerModule,
  ],
  controllers: [AppController, CurrentAccountController, ManagersController],
  providers: [
    AppService,
    AccountService,
    SavingsAccountService,
    CurrentAccountService,
    ManagersService,
  ],
})
export class AppModule {}
