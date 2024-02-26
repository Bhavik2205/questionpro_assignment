import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import { CartEntity } from "./cart.entity";
import { OrderEntity } from "./orders.entity";
import { LogEntity } from "./logs.entity";

@Entity("users")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    firstName: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    lastName: string;

    @Column({ type: "varchar", length: 255, nullable: false, unique: true })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    password: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    mobile: string;

    @Column({ type: "boolean", nullable: false })
    isActive: boolean;

    @Column({ type: "boolean", nullable: false })
    isAdmin: boolean;

    @CreateDateColumn({ nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;

    @OneToMany(() => AddressEntity, address => address.id)
    address: AddressEntity[];

    @OneToMany(() => CartEntity, cart => cart.id)
    cart: CartEntity;

    @OneToMany(() => OrderEntity, orders => orders.id)
    orders: OrderEntity[];

    @ManyToMany(() => LogEntity, log => log.user)
    @JoinTable({
        name: "logs",
        joinColumn: { name: "userId", referencedColumnName: "id" },
        inverseJoinColumn: { name: "id", referencedColumnName: "id" },
    })
    logs: LogEntity[];
}