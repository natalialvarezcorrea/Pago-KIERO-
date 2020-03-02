import React from 'react';
import efecty from '../assets/img/efecty.png';
import baloto from '../assets/img/baloto.png';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import '../assets/css/FormaPago.css';
import Modalbutton from './Modal/Modal';
import '../assets/css/Efectivo.css';



class Efectivo extends React.Component{

  constructor(){
    super()
    this.state={
      boton:'false',
    }
  }

  onOpenButton = () => {
    this.setState({
      boton:'active'
    }) 
  };

    render(){

        return(
            <Card>
                                                
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className='tamano'>
                Efectivo
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className='content'>
              <div className='efecty col-6'>
                <img alt='' className='img-efecty img-fluid' src={efecty} onClick={this.onOpenButton}/>
              </div>
              <div className='baloto col-6'>
              <img alt='' className='img-baloto img-fluid' src={baloto} onClick={this.onOpenButton} />
              </div>
              </div>

              <div className={this.state.boton}> <Modalbutton/></div>
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        )
    }
}

export default Efectivo;