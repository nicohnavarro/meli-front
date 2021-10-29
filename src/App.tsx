import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import SearchBar from "./components/Common/SearchBar/SearchBar";
import Loader from "./components/Common/Loader/Loader";
import Message from "./components/Common/Message/Message";
import ItemsListBox from "./components/Items/ItemListBox/ItemListBox";
import { ItemsList } from "./interfaces/ItemList";
import { ItemError } from "./interfaces/Item";
import ItemDetail from "./components/Items/ItemDetails/ItemDetails";

function App() {
  let history = useHistory();
  const [results, setResults] = useState<ItemsList | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ItemError | null>(null);

  const getResults = (query: string) => {
    setLoading(true);
    fetch(`http://localhost:4000/api/items?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.error(response);
          setLoading(false);
          setError({ error: response });
        } else {
          setLoading(false);
          setResults(response);
          history.push(`/items?search=${query}`);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError({ error: "Connection lost" });
      });
  };

  return (
    <div className="App">
      <SearchBar onSubmit={(query: string) => getResults(query)} />
      {loading ? (
        <Loader />
      ) : (
        <Switch>
          <Route exact path="/items">
            {!results ? (
              <Message
                error={true}
                message={
                  "Hubo un problema buscando ese producto. Probá nuevamente más tarde."
                }
              />
            ) : results ? (
              results.items.length ? (
                <ItemsListBox
                  categories={results.categories}
                  items={results.items}
                />
              ) : (
                <Message
                  error={false}
                  message={
                    "No encontramos resultados con lo que ingresaste. Probá buscandolo con otras palabras!"
                  }
                />
              )
            ) : (
              <Redirect to={"/"} />
            )}
          </Route>
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
      )}
    </div>
  );
}

export default App;
