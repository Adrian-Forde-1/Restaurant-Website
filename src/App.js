import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Route exact path="/" component={Home} />
      

      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
