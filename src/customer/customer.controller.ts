import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Customer } from './customer.model';
import { CustomersService } from './customer.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('/create')
  createCustomer(
    @Body('name') name: string,
    @Body('cpf') cpf: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('enrollment') enrollment: string,
    @Body('IES') IES: string,
    @Body('managerId', ParseIntPipe) managerId: number,
  ): Customer {
    return this.customersService.createCustomer(name, cpf, phone, email, address, enrollment, IES, managerId);
  }

  @Patch(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('cpf') cpf: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('enrollment') enrollment: string,
    @Body('IES') IES: string,
    @Body('manager') manager: number,
  ): Customer {
    return this.customersService.updateCustomer(id, name, cpf, phone, email, address, enrollment, IES, manager);
  }

  @Delete(':id')
  removeCustomer(@Param('id') id: string): void {
    this.customersService.removeCustomer(id);
  }

  @Get()
  getAllCustomers(): Customer[] {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string): Customer {
    return this.customersService.getCustomerById(id);
  }
}
