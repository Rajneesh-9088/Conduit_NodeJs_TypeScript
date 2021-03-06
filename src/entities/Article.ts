import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { StringLiteralLike } from "typescript";

@Entity()

export class Article {
   
    @PrimaryColumn({ length: 30})
    slug: string

    @Column({length: 50})
    title: string

    @Column({length: 100, nullable: true})
    description?: string

    @Column({type: "text"})
    body: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
      /*   
    "tagList": ["dragons", "training"], // TODO: relationship with tags
    "favorited": false,         // TODO: relationship with user
    "favoritesCount": 0,
    "author": {         // TODO: relationship with user
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }

    */  
    
 
}

