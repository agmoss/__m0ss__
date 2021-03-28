import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "media",
})
@ObjectType()
export class Media {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    preview: string;

    @Field()
    @Column()
    asset: string;

    @Field()
    @Column({ default: true, name: "is_active" })
    isActive: boolean;
}
