import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';


@Injectable()
export abstract class GenericService<T extends ObjectLiteral> {
    constructor(
        protected readonly repository: Repository<T>,
    ) { }
    public async create(record: T) {
        const newRegister = this.repository.create(record);

        return await this.repository.save(newRegister);
    }

    public async update(id: number, record: T) {
        const client = await this.repository.findOne({
            where: {
                id: id,
            } as unknown as FindOptionsWhere<T>,
        });

        Object.assign(client, record);
        return await this.repository.save(record);
    }

    public async getAll(filters?: any) {
        return await this.repository.find(filters);
    }

    public async getById(id: number, filters?: any) {
        return await this.repository.findOne({
            where: {
                id: id,
            } as unknown as FindOptionsWhere<T>,
        });
    }

    public async getByFilter(filters?: any) {
        return await this.repository.findOne(filters);
    }

    public async delete(id: number) {
        return await this.repository.delete(id)
    }

}
