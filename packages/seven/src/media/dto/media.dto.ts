import { Field, InputType } from "@nestjs/graphql";
import { Length, MaxLength } from "class-validator";

@InputType()
export class MediaInput {
    @Field()
    @MaxLength(30)
    title: string;

    @Field()
    @Length(1, 255)
    preview: string;

    @Field()
    @Length(1, 255)
    asset: string;
}
