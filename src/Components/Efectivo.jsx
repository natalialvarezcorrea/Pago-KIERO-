import React from 'react';
import efecty from '../assets/img/efecty.png';
import baloto from '../assets/img/baloto.png';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import '../assets/css/FormaPago.css';
import '../assets/css/Efectivo.css';
import { Link } from 'react-router-dom';



class Efectivo extends React.Component{

  constructor(){
    super()
    // this.state={
    //   boton:'false',
    // }
  }

  // onOpenButton = () => {
  //   this.setState({
  //     boton:'active'
  //   }) 
  // };

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
                <Link to="/efecty">
                <img alt='' className='img-efecty img-fluid' src={efecty} />
                </Link>
              </div>
              <div className='baloto col-6'>
                <Link to="/efecty">
                  <img alt='' className='img-baloto img-fluid' src={baloto} />
                </Link>
              </div>
              </div>
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        )
    }
}

export default Efectivo;