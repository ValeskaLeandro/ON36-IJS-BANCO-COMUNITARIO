export abstract class Person {
  constructor(
    protected id: number, // poderá ser alterado posteriormente
    protected name: string,
    protected address: string,
    protected phoneNumber: string,
    protected email: string
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getEmail(): string {
    return this.email;
  }
  
  abstract getRole(): string
}