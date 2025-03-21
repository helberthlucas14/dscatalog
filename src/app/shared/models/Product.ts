import { Category } from "./Category";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  date: string;
  categories: Category[];

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imgUrl: string,
    date: string,
    categories: Category[] = []
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
    this.date = date;
    this.categories = categories;
  }
}
