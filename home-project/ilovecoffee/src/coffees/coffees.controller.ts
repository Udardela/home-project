import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly cofffeesService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.cofffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cofffeesService.findOne(id);
  }
  @Post()
  create(@Body() body) {
    return this.cofffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.cofffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cofffeesService.remove(id);
  }
}
