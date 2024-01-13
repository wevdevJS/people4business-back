import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateBlogDTO} from '../dto/blog.dto';
import {Blog} from '../entity/blog.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private usersRepository: Repository<Blog>,
    ) {
    }

    async getBlogs(): Promise<Blog[]> {
        return this.usersRepository.find({order: {date: 'DESC'}});
    }

    async createBlog(data: CreateBlogDTO): Promise<Blog> {
        return this.usersRepository.save(data);
    }
}
