import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type :'mysql',
      host : process.env.DB_HOST,
      port : Number( process.env.DB_PORT ),
      database : process.env.DB_NAME,
      username : process.env.DB_USER,
      password : process.env.DB_PASS,

      autoLoadEntities : true,
      synchronize : true
      
    }),

    ProjectsModule,

  ]
})


export class AppModule {}
