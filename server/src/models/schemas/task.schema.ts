import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DataTask } from '../../common/interfaces/task';

@Schema()
export class Task implements DataTask {
  @Prop()
  public publicId: string;

  @Prop()
  public title: string;

  @Prop()
  public description: string;

  @Prop()
  public points: string;

  @Prop()
  public assigned: string;

  @Prop()
  public status: string;
}

export type TaskDocument = Task & Document;

export const TaskSchema = SchemaFactory.createForClass(Task);
