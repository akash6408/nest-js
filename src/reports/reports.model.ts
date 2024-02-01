import {Table, Column, Model, PrimaryKey} from "sequelize-typescript"

@Table
export class Reports extends Model{
    @PrimaryKey
    @Column
    id: number

    @Column
    price: number
}