import {IsString, Length} from "class-validator";

export class CreateCatDto{
    @IsString()
    @Length(2)
    name:string;

    @IsString()
    breed: string;
}