/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'auth-user',
    timestamps: false,
})
export class AuthUser extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    username!: string; // ✅ Add "!" to indicate it's non-nullable.

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
        unique: true,
    })
    password!: string;
}
