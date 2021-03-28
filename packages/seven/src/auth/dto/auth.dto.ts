import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { MaxLength, Length } from "class-validator";

@InputType()
export class LoginInput {
    @Field()
    @MaxLength(30)
    userName: string;

    @Field()
    @Length(30, 50)
    password: string;
}


@ObjectType()
export class AccessToken {
    @Field()
    accessToken:string

}
