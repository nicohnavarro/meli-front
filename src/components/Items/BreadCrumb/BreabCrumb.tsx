import React from "react";
import "./BreadCrumb.scss";

const BreadCrumb: React.FC<any> = (props: any) => {
  return (
    <ul className={"breadcrumb-container"}>
      {props.categories
        ? props.categories.map((category: any, idx: number) => (
            <li className={"breadcrumb"} key={idx}>
              {category}
              {idx !== props.categories.length - 1 ? <i /> : null}
            </li>
          ))
        : null}
    </ul>
  );
};

export default BreadCrumb;
