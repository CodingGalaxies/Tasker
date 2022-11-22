import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task {
  @Prop()
  public id: string;

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
