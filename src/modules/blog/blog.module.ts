import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BlogController} from './controller/blog.controller';
import {Blog} from './entity/blog.entity';
import {BlogService} from './service/blog.service';

@Module({
    imports: [TypeOrmModule.forFeature([Blog])],
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule { }
