import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";
import { Repository } from "typeorm";
import { CreateCatDto } from "./dto/createCat.dto";
import { UpdateCatDto } from "./dto/updateCat.dto";


@Injectable()
export class CatService{
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
    ) {}

    async findAll(){
        return await this.catRepository.find();
    }

    async findOne(id: number){
        const cat = await this.catRepository.findOne({
            where:{
                id:id,
            }
        });

        if(!cat) throw new NotFoundException()
        return cat;
    }

    async create(dto: CreateCatDto){
        return await this.catRepository.save(dto);
    }

    async update(id: number, dto: UpdateCatDto){
        return await this.catRepository.update({id},dto);
    }

    async delete(id:number){
        return await this.catRepository.delete({id});
    }


}