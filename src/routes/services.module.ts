import { Module } from '@nestjs/common';
import { GroupModule } from './group/group.modules';

@Module({
  imports: [ GroupModule],
})
export class serviceModule { }
