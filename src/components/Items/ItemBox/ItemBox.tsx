import React from "react";
import { Link } from "react-router-dom";
import "./ItemBox.scss";
import { formatPrice } from "../../../helpers/formatCurrency";
import { Item } from "../../../interfaces/Item";

interface ItemBoxProps {
  item: Item;
  categories: string[];
}

const ItemBox: React.FC<ItemBoxProps> = ({ item, categories }) => {
  return (
    <div className={"item-container"}>
      <div className={"item-info"} id={item.id}>
        <Link to={{ pathname: `/items/${item.id}` }}>
          <img src={item.picture} alt={item.title} />
        </Link>
        <div className={"item-general-info"}>
          <p className={"item-price"}>
            {formatPrice(item.price)}
            {item.price.decimals ? (
              <span className={"item-price-decimals"}>
                {item.price.decimals}
              </span>
            ) : null}
          </p>
          {item.free_shipping ? (
            <i className={"item-price-free-shipping"} title="Envio gratis!" />
          ) :  <i className={"item-price-free-shipping"} />}
          <Link className={"item-title"} to={{ pathname: `/items/${item.id}` }} >
            <p>{item.title}</p>
          </Link>
        </div>
        <div className={"item-location"}>
          <p>{item.condition === "new" ? "Nuevo" : "Usado"}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
