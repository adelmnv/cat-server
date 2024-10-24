import { IsString, Length } from "class-validator";

export class UpdateCatDto{
    @IsString()
    @Length(2)
    name:string;

    @IsString()
    breed: string;
}