import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { InventoryEntity } from "./inventory.entity";
import { UserEntity } from "./user.entity";


// Define a custom interface for the items array elements
interface CartItem {
    item: InventoryEntity
    quantity: number
}

@Entity("cart")
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "integer" })
    userId: number;

    @ManyToOne(() => InventoryEntity, (inventory) => inventory.id) // Define a ManyToOne relationship
    @Column({ nullable: false }) // Optional: Mark the column non-nullable
    items: CartItem[];

    @Column({ type: "boolean", nullable: false })
    isActive: boolean;

    @CreateDateColumn()
    public createdAt: Date;
    
    @UpdateDateColumn()
    public updatedAt: Date;

    @OneToOne(() => UserEntity, user => user.cart)
    @JoinColumn({ name: "userId" })
    user: UserEntity;
}