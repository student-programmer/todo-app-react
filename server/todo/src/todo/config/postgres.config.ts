import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize/types';
import { EnumConfig } from './enumConfig/enumConfig';

export const pgConfig = registerAs(EnumConfig.DATABASE, () => {
  return {
    dialect: <Dialect>process.env.POSTGRES_DIALECT || 'postgres',
    logging: process.env.SQL_LOGGING === 'true' ? true : false,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: 'postgres',
    password: '161789923Tt',
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
    synchronize: true,
  };
});
