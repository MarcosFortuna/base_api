import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { GenericService } from './generic.service';

export abstract class GenericController<T extends unknown>{

    constructor(private readonly service: GenericService<T>, private readonly serviceName: string) {
    }

    @Post()
    public async create(@Body() body: any) {
        try {
            return await this.service.create(body);
        } catch (error) {
            console.error(`Error on create an ${this.serviceName}: `, error);
            throw new Error(error.message);
        }
    }
    @Put(':id')
    public async update(@Body() body: any, @Param('id') id: number) {
        try {
            return await this.service.update(id, body);
        } catch (error) {
            console.error(`Error on updated an ${this.serviceName}: `, error);
            throw new Error(error.message);
        }
    }

    @Get()
    public async getAll(@Query() queries: any) {
        try {
            return await this.service.getAll(queries);
        } catch (error) {
            console.error(`Error to find ${this.serviceName}: `, error);
            throw new Error(error.message);
        }
    }
    @Get(':id')
    public async getByCnpj(@Param('id') id: number, @Query() queries: any) {
        try {
            return await this.service.getById(id, queries);
        } catch (error) {
            console.error(`Error to find ${this.serviceName} `, error);
            throw new Error(error.message);
        }
    }
    @Delete(':id')
    public async delete(@Param('id') id: number) {
        try {
            return await this.service.delete(id);
        } catch (error) {
            console.error(`Error on delete ${this.serviceName}: `, error);
            throw new Error(error.message);
        }
    }
}
