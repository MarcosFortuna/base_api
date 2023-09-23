import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from 'src/entity/groups.entity';
import { GenericService } from 'src/abstract/generic.service';


@Injectable()
export class GroupService extends GenericService<Group> {
    constructor(
        @InjectRepository(Group)
        protected readonly repository: Repository<Group>,
    ) { super(repository) }
}
