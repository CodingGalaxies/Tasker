import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DataUser } from '../interface/user';

@Entity({ name: 'Users' })
export class User implements DataUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ default: 'null' })
  firstName: string;

  @Column({ default: 'null' })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
