import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.scss";
import logo from "../../../assets/Logo_ML.png";
import zoom from "../../../assets/ic_Search.png";

const SearchBar: React.FC<any> = (props: any) => {
  const [enteredText, setEnteredText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(enteredText);
  };

  const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {};

  return (
    <div id="bar-input-search" className="header">
      <form onSubmit={(event) => handleSubmit(event)}>
        <Link to={"/"} id="bar-logo-navbar">
          <img src={logo} alt="Logo Mercado Libre" />
        </Link>
        <input
          className="search_input"
          type="text"
          value={enteredText}
          placeholder="Nunca dejes de buscar"
          onKeyUp={keyUpHandler}
          onChange={(e) => setEnteredText(e.target.value)}
        />
        <button type="submit" id="button-search" data-testid="search-box-icon">
          <img src={zoom} alt="Buscar" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
