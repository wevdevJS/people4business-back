import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BlogModule} from './modules/blog/blog.module';
import {Blog} from './modules/blog/entity/blog.entity';

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'People4business',
      entities: [Blog],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
