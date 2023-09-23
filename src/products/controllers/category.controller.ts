import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateCategoryDto,  } from '../dto/category.dto';
import { CategoryService, } from '../services/category.service';
import { Category } from '../entities/category.entity';

  
  
  @Controller('Category')
  
  export class CategoryController {
   constructor(private readonly CategoryService: CategoryService) {}
  
   @Post()
   async create(@Body() CategoryDto: CreateCategoryDto) {
     return await this.CategoryService.create(CategoryDto);
   }

   @Get() //Este seria para encontrar todo el producto
   findAll() { //Este seria para encontrar uno
     return this.CategoryService.findAll();
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.CategoryService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.CategoryService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createCategoryDto:CreateCategoryDto, 
     ) {
       return this.CategoryService.update(id,createCategoryDto)
     }
   }