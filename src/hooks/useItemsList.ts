import { Error } from './../interfaces/Error';
import { ItemsList } from './../interfaces/ItemList';
import { useEffect, useState } from "react";
import { getItemsList } from "../services/itemSvc";

type useItemsListParams = {
  query:string,
  limit:number
}

export function useItemsList(params :useItemsListParams): [boolean, ItemsList | null, Error | null] {
  const {query,limit} = params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [itemslist, setItemList] = useState<ItemsList | null>(null);
  const queryToUse = query || localStorage.getItem('lastQuery') as string;

  useEffect(() => {
    setLoading(true);
    getItemsList(queryToUse, limit).then((response) => {
      if ((response as ItemsList).author) {
        setItemList(response as ItemsList)
        setLoading(false)
        localStorage.setItem('lastQuery', query)
      }
      else {
        setLoading(false)
        setError(response as Error);
      }
    })
  }, [query,limit,queryToUse])

  return [loading, itemslist, error];
}