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
    @Column({name: "first_name"})
    firstName: string;

    @Field()
    @Column({name:"last_name"})
    lastName: string;

    @Field()
    @Column({name: "profile_photo"})
    profilePhoto: string;

    @Field()
    @Column()
    rant: string;

    @Field()
    @Column()
    bio: string;

    @Field()
    @Column({ default: true, name: "is_active" })
    isActive: boolean;
}
