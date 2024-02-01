import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/users.model';
import { Reports } from './reports/reports.model'
import { ConfigModule } from '@nestjs/config';
import { Dialect } from 'sequelize';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DIALECT as Dialect,
      host: process.env.HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Users, Reports],
    }),
    UsersModule, 
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}