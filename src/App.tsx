import  { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import SearchBar from "./components/Common/SearchBar";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import ItemDetail from "./components/Items/ItemDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <SearchBar/>
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={SearchResults} exact path="/items" />
          <Route path="/items/:id" component={ItemDetail}/>
          <Route component={ErrorPage} path="/:rest*" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
