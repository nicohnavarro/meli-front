import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import logo from "../../../assets/Logo_ML.png";
import zoom from "../../../assets/ic_Search.png";

const SearchBar: React.FC<any> = (props: any) => {
  let history = useHistory();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  const onSubmit = (query: string) => {
    if (query !== "") {
      history.push(`/items?search=${query}`,query);
    }
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
          value={query}
          placeholder="Nunca dejes de buscar"
          onKeyUp={keyUpHandler}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" id="button-search" data-testid="search-box-icon">
          <img src={zoom} alt="Buscar" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
