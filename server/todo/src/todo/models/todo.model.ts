import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'todo' })
export class Todo extends Model {
  @Column
  title: string;
  @Column
  description: string;
  @Column({ defaultValue: false })
  done: boolean;
  @CreatedAt
  creationDate: Date;
  @UpdatedAt
  updatedOn: Date;
}
