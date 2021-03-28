import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "profiles",
})
@ObjectType()
export class Profile {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    profile_photo: string;

    @Field()
    @Column()
    rant: string;

    @Field()
    @Column()
    bio: string;

    @Field()
    @Column({ default: true })
    isActive: boolean;
}
