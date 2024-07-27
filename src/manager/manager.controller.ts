import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Manager } from './manager.model';
import { ManagersService } from './manager.service';

@Controller('managers')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post('/create')
  createManager(@Body('name') name: string): Manager {
    return this.managersService.createManager(name);
  }

  @Patch(':id')
  updateManager(@Param('id', ParseIntPipe) id: number, @Body('name') name: string): Manager {
    return this.managersService.updateManager(id, name);
  }

  @Delete(':id')
  removeManager(@Param('id', ParseIntPipe) id: number): void {
    this.managersService.removeManager(id);
  }

  @Get()
  getAllManagers(): Manager[] {
    return this.managersService.getAllManagers();
  }

  @Get(':id')
  getManagerById(@Param('id', ParseIntPipe) id: number): Manager {
    return this.managersService.getManagerById(id);   
  }
}
