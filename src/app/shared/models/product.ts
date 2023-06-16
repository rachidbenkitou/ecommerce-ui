import { Image } from "./image"
import { SubCategory } from "./subCategory"

export class Product {
    id!: Number
    name!: String
    description!: String
    price!: Number
    quantity!: Number
    subCategory!: SubCategory;
    dateCreated!:Date;
    dateUpdated!:Date
    //images!: Image[]
}