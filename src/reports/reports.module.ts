import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reports } from "./reports.model"

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [SequelizeModule.forFeature([Reports])],
})
export class ReportsModule {}
