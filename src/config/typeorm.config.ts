import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from '../../db';
console.log(DB_TYPE);

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
//  entities: [join(__dirname, '**', '*.entity.{js,ts}')],
