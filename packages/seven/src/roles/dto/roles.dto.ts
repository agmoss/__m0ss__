import { Field, InputType } from "@nestjs/graphql";
import {  MaxLength } from "class-validator";

@InputType()
export class RolesInput {
    @Field()
    @MaxLength(30)
    role: string;
}
