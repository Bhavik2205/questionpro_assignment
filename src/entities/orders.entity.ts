import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { CartEntity } from "./cart.entity";
import { AddressEntity } from "./address.entity";
import { OrderStatus } from "types/misc";

@Entity("orders")
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "integer" })
    userId: number;

    @OneToOne(() => CartEntity, cart => cart.id)
    cartId: CartEntity;

    @OneToOne(() => AddressEntity, address => address.id)
    addressId: AddressEntity;

    @Column({ type: "enum", enum: OrderStatus})
    status: OrderStatus;
    
    @CreateDateColumn()
    public orderedAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;

    @ManyToOne(() => UserEntity, user => user.orders)
    @JoinColumn({ name: "userId" })
    user: UserEntity;
}