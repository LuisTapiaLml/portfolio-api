import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProyectDto {

    @IsString()
    @IsNotEmpty()
    project_name : string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsNumber()
    @IsOptional()
    @IsPositive()
    @IsIn([1,0])
    status?:number;

}

