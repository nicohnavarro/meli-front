import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";
import { getItemDetails } from "../services/itemSvc";

export function useItemDetails(id:string) : [boolean,Item | null,boolean]{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemDetails, setItemDetails] = useState<Item | null>(null);

  useEffect(() => {
    try{
      setLoading(true);
      getItemDetails(id).then(item => {setItemDetails(item)
      setLoading(false)
    })
    }
    catch(e){
      setError(true);
    }
  }, [id])

  return [loading,itemDetails,error];
}