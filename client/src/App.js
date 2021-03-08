import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar/navbar";
import Searchbar from "./pages/searchbar";
import Save from "./pages/savedbooks";
import Header from "./components/Header/header";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            {/* renders the Search page when "/" route is hit */}
            <Route exact path="/" component={Searchbar} />
            {/* renders the Search page when "/search" route is hit */}
            <Route exact path="/search" component={Searchbar} />
            {/* renders the Saved page when "/saved" route is hit */}
            <Route exact path="/saved" component={Save} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
