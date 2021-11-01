import { useEffect, useState } from "react";
import { Error } from "../interfaces/Error";
import { Item } from "../interfaces/Item";
import { getItemDetails } from "../services/itemSvc";

export function useItemDetails(id: string): [boolean, Item | null, Error | null] {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [itemDetails, setItemDetails] = useState<Item | null>(null);

  useEffect(() => {

    setLoading(true);
    getItemDetails(id).then(response => {
      if ((response as Item).author) {
        setItemDetails(response as Item)
        setLoading(false)
      }
      else {
        setLoading(false)
        setError(response as Error);
      }
    })
  }, [id])

  return [loading, itemDetails, error];
}