import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "users",
})
@ObjectType()
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    user_name: string;

    @Field()
    @Column()
    password: string;

    @Field()
    @Column({ default: true })
    isActive: boolean;
}
