import React from 'react';
import Pago from './pages/Pago';
import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
           <Route path="/" component={Pago}/>
        </Switch>
      </Router>
      );
  }
 
}

export default App;
