import { AfterCreate, AfterUpdate, AfterDestroy, Column, PrimaryKey, Model, Table } from 'sequelize-typescript';

@Table
export class Users extends Model{
    @PrimaryKey
    @Column
    id: number

    @Column 
    email: string

    @Column
    password: string

    @AfterCreate
    logInsert() {
        console.log('Inserted user with id', this.id)
    }

    @AfterUpdate
    logUpdate() {
        console.log('Updated user with id', this.id)
    }

    @AfterUpdate
    logRemove() {
        console.log('Removed user with id', this.id)
    }
}