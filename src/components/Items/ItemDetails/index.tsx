import React from "react";
import "./styles.scss";
import { formatPrice } from "../../../helpers/formatCurrency";
import Loader from "../../Common/Loader";
import { Item } from "../../../interfaces/Item";
import { RouteComponentProps } from "react-router";
import BreadCrumb from "../BreadCrumb";
import { useItemDetails } from "../../../hooks/useItemDetails";
import Toast from "../../Common/Toast";

interface ItemDetailProps {
  item: Item;
  categories: string[];
}

type ItemDetailParams = {
  id: string;
};

const ItemDetail: React.FC<ItemDetailProps & RouteComponentProps> = (props) => {
  const { id } = props.match.params as ItemDetailParams;
  const [loading, itemDetails, error] = useItemDetails(id);

  return (
    <>
      {loading ? (
        <Loader />
      ) : itemDetails ? (
        <div className={"item-detail-container"}>
          <BreadCrumb categories={itemDetails.categories} />
          <div className={"item-detail-first-row"}>
            <div className={"item-detail-img-container"}>
              <img src={itemDetails.picture} alt={itemDetails.title} />
            </div>
            <div className={"item-detail-info"}>
              <p className={"item-detail-condition-sold"}>
                {`${itemDetails.condition === "new" ? "Nuevo" : "Usado"} - ${
                  itemDetails.sold_quantity
                } vendidos`}
              </p>
              <h5 className={"item-detail-title"}>{itemDetails.title}</h5>
              <h3 className={"item-detail-price"}>
                {formatPrice(itemDetails.price)}
                {itemDetails.price.decimals ? (
                  <span className={"item-price-decimals"}>
                    {itemDetails.price.decimals}
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
            <p className={"item-detail-description-text"}>
              {itemDetails.description}
            </p>
          </div>
        </div>
      ) : error ? (
        <Toast title="Ocurrio un error!" message={error.message} />
      ) : (
        <Toast title="Lo sentimos!" message="No se encontraron resultados" />
      )}
    </>
  );
};

export default ItemDetail;
