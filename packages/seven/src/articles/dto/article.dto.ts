import { Field, InputType } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class ArticleInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @Length(30, 255)
  description: string;

  @Field()
  @Length(30, 255)
  image: string;

  @Field()
  @Length(30, 255)
  markdown: string;

  @Field({name: 'internal_link'})
  internalLink: string;

  @Field({name: 'external_link'})
  externalLink: string;

  @Field(type => [String])
  ingredients: string[];
}
