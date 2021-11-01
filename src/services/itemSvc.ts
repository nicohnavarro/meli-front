import { Error } from "../interfaces/Error";
import { Item } from "../interfaces/Item";
import { ItemsList } from "../interfaces/ItemList";

export async function getItemsList(query: string, limit?: number): Promise<ItemsList | Error> {
  const url = `${process.env.REACT_APP_API_PRODUCTS}/items?q=${query}&l=${limit}`;
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
  const url = `${process.env.REACT_APP_API_PRODUCTS}/items/${id}`;
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