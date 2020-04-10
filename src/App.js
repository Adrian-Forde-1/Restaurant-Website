import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Reservation from './components/Reservation';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="App">
        {/* <Navbar /> */}
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route exact path="/reservation" component={Reservation} />
        </ScrollToTop>
      </div>
    </HashRouter>
  );
}

export default App;
