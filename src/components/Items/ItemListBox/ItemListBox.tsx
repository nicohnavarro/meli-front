import React from "react";
import "./ItemListBox.scss";
import ItemBox from "../ItemBox/ItemBox";
import BreadCrumb from "../BreadCrumb/BreabCrumb";

export default function ItemsListBox(props: any) {
  return (
    <div className={"items-list-container"}>
      <BreadCrumb categories={props.categories} />
      {props.items.slice(0, 4).map((item: any, idx: number) => (
        <ItemBox key={idx} item={item} categories={props.categories} />
      ))}
    </div>
  );
}
