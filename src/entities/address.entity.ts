import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("address")
export class AddressEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "integer" })
    userId: number;

    @Column({ type: "varchar", length: 200, nullable: false })
    address: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    city: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    state: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    country: string;

    @Column({ type: "integer", length: 6, nullable: false })
    pincode: number;

    @Column({ type: "boolean", nullable: true, default: true })
    isActive: boolean;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;

    @ManyToOne(() => UserEntity, user => user.address)
    @JoinColumn({ name: "userId" })
    user: UserEntity;
}