import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("logs")
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "json" })
  metadata: Record<string, string | number | Date | boolean>;

  @Column({ type: "varchar", nullable: true })
  activity: "Login History";

  @Column({ type: "integer" })
  userId: number;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToMany(() => UserEntity, user => user.logs)
  user: UserEntity[];

}
