import React, { Component } from 'react';
import './App.css';
import Slide2 from './pages/Slide2'
import Slide1 from './pages/Slide1'
import Slide3 from './pages/Slide3'
import Slide4 from './pages/Slide4'
import { Switch, Route,Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
            <h1>ЛПР Використання діодів</h1>
        </header>

          <Switch >
            <Route path="/slide2" component={Slide2} />
            <Route exact path='/' component= {Slide1} />
            <Route path='/slide3' component= {Slide3} />
            <Route path='/slide4' component= {Slide4} />
        </Switch>
          <footer className="footer">
              <Link to="/" >Slide1</Link>
              <Link to="/slide2" >Slide2</Link>
              <Link to="/slide3" >Slide3</Link>
              <Link to="/slide4" >Slide4</Link>
          </footer>
      </div>
    );
  }
}

export default App;
