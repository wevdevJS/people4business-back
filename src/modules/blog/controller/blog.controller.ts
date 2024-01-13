import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {apiResponseGetBlogs, apiResponsePostBlogs} from '../apiResponse/api-response';
import {CreateBlogDTO} from '../dto/blog.dto';
import {BlogService} from '../service/blog.service';

@Controller('blog')
@ApiTags('Blog')
export class BlogController {

    constructor(
        private blogService: BlogService
    ) { }

    // @UseGuards(AuthGuard('authenticate-session'))
    @Get('/')
    @ApiBearerAuth()
    @ApiOperation({description: 'Get all blogs.', summary: 'Get all blogs.', })
    @ApiResponse(apiResponseGetBlogs)
    async getAllGlucoseFromUser(
    ) {
        return this.blogService.getBlogs();
    }

    // @UseGuards(AuthGuard('authenticate-session'))
    @Post('/')
    @ApiBearerAuth()
    @UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true}))
    @ApiOperation({description: 'Create blog.', summary: 'Create blog.', })
    @ApiResponse(apiResponsePostBlogs)
    async createUserTerra(
        @Body() data: CreateBlogDTO
    ) {
        return this.blogService.createBlog(data);
    }

}
