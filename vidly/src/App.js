import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import React, { Component } from "react";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/movies/:id" Component={MovieForm} />
            <Route path="/" Component={Movies} />
            <Route path="/movies/*" Component={Movies} />
            <Route path="/customers" Component={Customers} />
            <Route path="/rentals" Component={Rentals} />
            <Route path="/not-found" Component={NotFound} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
