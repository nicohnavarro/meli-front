import { Price } from "../interfaces/Item";

const addSeparators = (price:number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const formatPrice = (price:Price) => {
    return `${price.currency === 'ARS' ? '$ ' : 'U$S '}${addSeparators(price.amount)}`
};