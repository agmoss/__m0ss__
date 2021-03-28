import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { User } from "../users/user.entity";

@Entity({
    name: "roles",
})
@ObjectType()
export class Roles {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    role: string;

    // @Field()
    @ManyToMany((type) => User, (user) => user.roles)
    users: User[];
}
