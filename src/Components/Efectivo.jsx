import React from 'react';
import efecty from '../assets/img/efecty.png';
import baloto from '../assets/img/baloto.png';
import { Button,Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import '../assets/css/FormaPago.css'



class Efectivo extends React.Component{

    render(){

        return(
            <Card>
                                                
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className='tamano'>
                Efectivo
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className='efecty col-6'>
                <a href=''> <img className='img-efecty img-fluid' src={efecty}/> </a>
              </div>
              <div className='baloto col-6'>
              <a href=''> <img className='img-baloto img-fluid' src={baloto}/> </a>
              </div>
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        )
    }
}

export default Efectivo;