import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entity/client.entity';
import { PlansModule } from '../plans/plans.module';
import { Group } from 'src/entity/groups.entity';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    controllers: [GroupController],
    providers: [GroupService],
    exports: [GroupService],
})
export class GroupModule { }
