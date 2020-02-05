import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import AllClients from "./components/pages/AllClients";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppContextProvider from "./context.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <Router>
      {/* <AppContextProvider> */}
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/allclients" component={AllClients} />
        </Switch>
      </div> 
      {/* </AppContextProvider> */}
    </Router>
  );
}

export default App;
