import { User } from "../users/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";


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
    @ManyToMany(type => User, user => user.roles)
    users: User[]
}

