import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("inventory")
export class InventoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "integer" })
    addedBy: number;

    @Column({ type: "varchar", length: 200, nullable: false})
    name: string;

    @Column({ type: "varchar", length: 200, nullable: false})
    description: string;

    @Column({ type: "integer", length: 10, nullable: false})
    quantity: number;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;
}