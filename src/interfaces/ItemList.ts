import { Item } from "./Item";

export interface ItemsList {
  author:Author,
  categories:string[],
  items:Item[]
}

export type Author={
  name:string,
  lastname:string
}