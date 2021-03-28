import { Field, InputType } from "@nestjs/graphql";
import { Length, MaxLength } from "class-validator";

@InputType()
export class UserInput {
    @Field()
    @MaxLength(30)
    userName: string;

    @Field()
    @Length(30, 50)
    password: string;
}
