import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { serviceModule } from './routes/services.module';
import { dbConfig } from 'db/config';

@Module({
  imports: [
    serviceModule,
    TypeOrmModule.forRoot(dbConfig),
  ],
})
export class AppModule {}
