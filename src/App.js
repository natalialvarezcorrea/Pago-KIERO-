import React from 'react';
import Pago from './pages/Pago';
import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Facturacion from './pages/Facturacion';
import EfectyPage from './pages/EfectivoPage';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
        <Route path="/efecty" component={EfectyPage}/> 
        <Route path="/pse_result" component={Facturacion}/>
           <Route path="/" component={Pago}/>
        </Switch>
      </Router>
      );
  }
 
}

export default App;
