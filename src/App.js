import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import ReservationNavbar from './components/ReservationNavbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className='App'>
          {/* <Navbar /> */}

          <Route exact path='/' component={Navbar} />
          <Route exact path='/' component={Home} />
          <Route exact='/reservation' component={ReservationNavbar} />
          <Route path='/reservation' component={Reservation} />

          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
