import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreateBlogDTO {

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    author: string;

    @ApiProperty()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    description: string;

}
