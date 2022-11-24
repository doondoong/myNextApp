import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '146.56.150.153',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
//  entities: [join(__dirname, '**', '*.entity.{js,ts}')],
