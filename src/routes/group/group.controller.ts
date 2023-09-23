import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { GenericController } from '../../abstract/generic.controller';
import { Group } from 'src/entity/groups.entity';

const routeName = 'group';
@Controller(routeName)
export class GroupController extends GenericController<Group> {
    constructor(private readonly groupService: GroupService) {
        super(groupService, routeName)
    }
}
