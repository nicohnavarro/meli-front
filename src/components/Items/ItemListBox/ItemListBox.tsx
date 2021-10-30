import React from "react";
import "./ItemListBox.scss";
import ItemBox from "../ItemBox/ItemBox";
import BreadCrumb from "../BreadCrumb/BreabCrumb";

const ItemsListBox: React.FC<any> = (props: any) => {
  return (
    <div className={"items-list-container"}>
      <BreadCrumb categories={props.categories} />
      {props.items.map((item: any, idx: number) => (
        <ItemBox key={idx} item={item} categories={props.categories} />
      ))}
    </div>
  );
};

export default ItemsListBox;
