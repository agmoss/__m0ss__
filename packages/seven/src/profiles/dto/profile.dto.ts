import { Field, InputType } from "@nestjs/graphql";
import { Length, MaxLength } from "class-validator";

@InputType()
export class ProfileInput {
    @Field()
    @MaxLength(30)
    firstName: string;

    @Field()
    @MaxLength(30)
    lastName: string;

    @Field()
    @Length(30, 255)
    profilePhoto: string;

    @Field()
    @Length(30, 255)
    rant: string;

    @Field()
    @Length(30, 500)
    bio: string;
}
