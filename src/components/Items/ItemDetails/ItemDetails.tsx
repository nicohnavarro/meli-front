import React, { useState, useEffect } from "react";
import "./ItemDetails.scss";
import { formatPrice } from "../../../helpers/formatCurrency";
import Loader from "../../Common/Loader/Loader";
import { Item } from "../../../interfaces/Item";
import { RouteComponentProps } from "react-router";

interface ItemDetailProps {
  item: Item;
  categories: string[];
}

type ItemDetailParams = {
  id: string;
};

const ItemDetail: React.FC<ItemDetailProps & RouteComponentProps> = (props) => {
  const { id } = props.match.params as ItemDetailParams;

  const [itemInfo, setItemInfo] = useState<Item | null>(null);
  const [error, setError] = useState({ error: false, text: "" });

  useEffect(() => {
    fetch(`http://localhost:4000/api/items/${id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItemInfo(response as Item);

        if (response.error) {
          let text;
          switch (response.status) {
            case 404:
              text = "El artículo que ingresaste no existe.";
              break;
            case 500:
              text =
                "No pudimos encontrar el artículo que estabas buscando. Probá nuevamente más tarde";
              break;
            default:
              text = "Ups! Algo salió mal. Probá nuevamente más tarde";
              break;
          }
          setError({ error: true, text: text });
        } else {
        }
      })
      .catch((e) => {
        setError({
          error: true,
          text: "Ups! Algo salió mal. Probá nuevamente más tarde",
        });
      });
  }, [id]);

  return itemInfo ? (
    <div className={"item-detail-container"}>
      <div className={"item-detail-first-row"}>
        <div className={"item-detail-img-container"}>
          <img src={itemInfo.picture} alt={itemInfo.title} />
        </div>
        <div className={"item-detail-info"}>
          <p className={"item-detail-condition-sold"}>
            {`${itemInfo.condition === "new" ? "Nuevo" : "Usado"} - ${
              itemInfo.sold_quantity
            } vendidos`}
          </p>
          <h5 className={"item-detail-title"}>{itemInfo.title}</h5>
          <h3 className={"item-detail-price"}>
            {formatPrice(itemInfo.price)}
            {itemInfo.price.decimals ? (
              <span className={"item-price-decimals"}>
                {itemInfo.price.decimals}
              </span>
            ) : null}
          </h3>
          <button className={"item-detail-buy"}>Comprar</button>
        </div>
      </div>
      <div className={"item-detail-description"}>
        <p className={"item-detail-description-title"}>
          Descripción del producto
        </p>
        <p className={"item-detail-description-text"}>{itemInfo.description}</p>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ItemDetail;
