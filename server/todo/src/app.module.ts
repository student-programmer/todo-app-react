import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './todo/config/configuration';
import { sequelizeConfigService } from './todo/config/sequelizeConfig.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: sequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TodoModule,
  ],
})
export class AppModule {}
