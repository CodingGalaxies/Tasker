import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import * as appRootPath from 'app-root-path';
import { config } from 'dotenv';

config({ path: 'db.env' });

export const mysqlDataSource = [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [
      // Add the paths to modules that use the main database here
      `${path.join(
        appRootPath.path,
        'src',
        'models',
        'entities',
      )}/**/*.entity{.ts,.js}`,
    ],
    synchronize: true,
  }),
];

export const mongoDataSource = [
  MongooseModule.forRoot(
    `${process.env.MG_PROTOCOL}://${process.env.MG_HOST}:${process.env.MG_PORT}/${process.env.MG_DB}`,
  ),
];
