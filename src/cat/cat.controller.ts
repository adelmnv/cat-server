import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { UpdateCatDto } from './dto/updateCat.dto';
import { CreateCatDto } from './dto/createCat.dto';

@Controller('cats')
export class CatController {
    constructor(private catService: CatService) {}

    @Get()
    findAll(){
        return this.catService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.catService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto){
        return this.catService.update(id, updateCatDto);
    }

    @Post('create')
    create(@Body() createCatDto: CreateCatDto){
        return this.catService.create(createCatDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.catService.delete(id);
    }

}
