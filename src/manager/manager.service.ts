import { Injectable } from '@nestjs/common';
import { Manager } from './manager.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ManagersService {
    private readonly filePath = path.resolve('./src/data/managers.json');

    private readManagers(): Manager[] {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data) as Manager[];
    }

    private writeManagers(managers: Manager[]): void {
      fs.writeFileSync(this.filePath, JSON.stringify(managers, null, 2), 'utf8');
    }

    createManager(name: string): Manager {
      const managers = this.readManagers();

      const newManager: Manager = {
        id: managers.length ? managers[managers.length - 1].id + 1 : 1,
        name,
        customers: []
      };
      managers.push(newManager);
      this.writeManagers(managers);
      return newManager;
    }

    updateManager(id: number, updatedName: string): Manager {
      const managers = this.readManagers();
      const manager = managers.find(manager => manager.id === id);

      manager.name = updatedName;

      this.writeManagers(managers);
      return manager;
    }

    removeManager(id: number): Manager[] {
      let managers = this.readManagers();
      managers = managers.filter(manager => manager.id !== id);

      if (managers.length === this.readManagers().length) {
        throw new Error(`Manager with id ${id} not found`);
      }

      this.writeManagers(managers);
      return managers
    }

    getAllManagers() : Manager[] {
      return this.readManagers();
    }

    getManagerById(id: number): Manager {
      const managers = this.readManagers();
      const manager = managers.find(manager => manager.id === id);
      if (!manager) {
        throw new Error(`Manager with id ${id} not found`);
      }
      return manager;
    }
}
