import { Author } from './ItemList';

export interface Item {
  author?: Author,
  id: string,
  title: string,
  price: Price,
  picture: string,
  condition: string,
  free_shipping: Boolean,
  sold_quantity?: number,
  description?: string,
  categories?: string[]
}

export type Price = {
  currency: string,
  amount: number,
  decimals: number
}

export type ItemError = {
  error?: string,
  message?: string,
  code?: number,
}