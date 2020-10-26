import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class LoginType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly qrCode: string;
}
