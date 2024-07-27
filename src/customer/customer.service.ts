import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';
import { Manager } from 'src/manager/manager.model';
import * as path from 'path';
import * as fs from 'fs';
import { randomUUID } from 'crypto';

@Injectable()
export class CustomersService {
  private readonly fileCustomer = path.resolve('./src/data/customers.json');
  private readonly fileManager = path.resolve('./src/data/managers.json');

  private readCustomers(): Customer[] {
    const data = fs.readFileSync(this.fileCustomer, 'utf8');
    return JSON.parse(data) as Customer[];
  }

  private writeCustomers(customers: Customer[]): void {
    fs.writeFileSync(this.fileCustomer, JSON.stringify(customers, null, 2), 'utf8');
  }

  private readManagers(): Manager[] {
    const data = fs.readFileSync(this.fileManager, 'utf8');
    return JSON.parse(data) as Manager[];
  }

  private writeManagers(customers: Manager[]): void {
    fs.writeFileSync(this.fileManager, JSON.stringify(customers, null, 2), 'utf8');
  }

  createCustomer(
    name: string,
    cpf: string,
    phone: string,
    email: string,
    address: string,
    enrollment: string,
    IES: string,
    managerId: number
  ): Customer {
    const customers = this.readCustomers();
    const newCustomer: Customer = {
      id: randomUUID(),
      name,
      cpf,
      phone,
      email,
      address,
      enrollment,
      IES,
      accounts: [],
      accessionDate: new Date(),
      managerId,
    };

    const managers = this.readManagers();
    const currentManager = managers.find(man => man.id === managerId);
    console.log(managers)
    if (!currentManager) {
      throw new Error(`Manager with ID ${managerId} not found`);
    }

    // Adiciona o novo cliente à lista de clientes do gerente
    currentManager.customers.push(newCustomer.id);
    this.writeManagers(managers);

    // Adiciona o novo cliente à lista de clientes
    customers.push(newCustomer);
    this.writeCustomers(customers);

    return newCustomer;
  }

  updateCustomer(
    id: string,
    name?: string,
    cpf?: string,
    phone?: string,
    email?: string,
    address?: string,
    enrollment?: string,
    IES?: string,
    managerId?: number,
  ): Customer {
    const customers = this.readCustomers();
    const customerIndex = customers.findIndex(customer => customer.id === id);

    if (customerIndex === -1) {
      throw new Error(`Customer with id ${id} not found`);
    }

    const customer = customers[customerIndex];
    if (name) customer.name = name;
    if (cpf) customer.cpf = cpf;
    if (phone) customer.phone = phone;
    if (email) customer.email = email;
    if (address) customer.address = address;
    if (enrollment) customer.enrollment = enrollment;
    if (IES) customer.IES = IES;
    if (managerId) customer.managerId = managerId;

    this.writeCustomers(customers);
    return customer;
  }

  removeCustomer(id: string): void {
    let customers = this.readCustomers();
    const initialLength = customers.length;
    customers = customers.filter(customer => customer.id !== id);

    if (customers.length === initialLength) {
      throw new Error(`Customer with id ${id} not found`);
    }

    this.writeCustomers(customers);
  }

  getAllCustomers(): Customer[] {
    return this.readCustomers();
  }

  getCustomerById(id: string): Customer {
    const customers = this.readCustomers();
    const customer = customers.find(customer => customer.id === id);
    if (!customer) {
      throw new Error(`Customer with id ${id} not found`);
    }
    return customer;
  }
}
