import React from "react";
import "./styles.scss";
import ItemBox from "../ItemBox";
import BreadCrumb from "../BreadCrumb";
import { Item } from "../../../interfaces/Item";

interface ItemsListBoxProps {
  items:Item[],
  categories:string[]
}

const ItemsListBox: React.FC<ItemsListBoxProps> = ({items,categories}) => {
  return (
    <div className={"items-list-container"}>  
      <BreadCrumb categories={categories} />
      {items.map((item: any, idx: number) => (
        <ItemBox key={idx} item={item} categories={categories} />
      ))}
    </div>
  );
};

export default ItemsListBox;
