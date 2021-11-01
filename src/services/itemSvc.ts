import { Error } from "../interfaces/Error";
import { Item } from "../interfaces/Item";
import { ItemsList } from "../interfaces/ItemList";

const API_URL = process.env.REACT_APP_API_PRODUCTS || 'http://localhost:4000/api'

export async function getItemsList(query: string, limit?: number): Promise<ItemsList | Error> {
  const url = `${API_URL}/items?q=${query}&l=${limit}`;
  try {
    const response = await fetch(url);
    if (response.ok)
      return await response.json() as ItemsList;
    else
      return { message: "No se encontraron resultados", code: response.status } as Error;
  }
  catch (e) {
    console.log(e);
    return { message: "No tuvimos respuesta", code: 500 } as Error;
  }
}

export async function getItemDetails(id: string): Promise<Item | Error> {
  const url = `${API_URL}/items/${id}`;
  try {
    const response = await fetch(url)
    if (response.ok)
      return await response.json() as Item;
    else
      return { message: "No se encontro el producto solicitado", code: response.status } as Error;
  }
  catch (e) {
    console.log(e);
    return { message: "No tuvimos respuesta", code: 500 } as Error;
  }
}