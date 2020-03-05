import React from 'react';
import efecty from '../assets/img/efecty.png';
import baloto from '../assets/img/baloto.png';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import '../assets/css/FormaPago.css';
import '../assets/css/Efectivo.css';
import axios from 'axios';



class Efectivo extends React.Component{


  constructor(){
    super()

    this.state={
      paymentMethod:'',
      user_id:'',
      product_id:'',
      address_id:'',
      device_session_id: localStorage.getItem('md5')
    }
    this.changeHandler=this.changeHandler.bind(this);
  }

  submitHandler = async e => {
    e.preventDefault();
    let res = await axios.post('https://kieroapi.net/cash_pay', {
      paymentMethod:this.state.paymentMethod,
      user_id:this.props.user_id,
      address_id:this.props.address_id,
      product_id:this.props.productid,
      device_session_id:this.state.device_session_id
    })
    console.log(res.data)
  }

  changeHandler = e => {
    if (e === "BALOTO"){
        this.setState({ paymentMethod: e});
      }
    if (e === "EFECTY"){
        this.setState({ paymentMethod: e});
      }
  };

    render(){
          
        return(
            <Card>
                                                
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className='tamano'>
                Efectivo
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="1">
            <Card.Body>
              <form  onSubmit={this.submitHandler}>
                  <div className='content'>
                    <div className='efecty col-6'>
                      <button type="submit" className="botonEfecty" onClick={this.changeHandler.bind(this,"EFECTY")}>
                           <img alt='' className='img-efecty img-fluid' src={efecty} />
                      </button>
                       
                    </div>
                    <div className='baloto col-6'>
                        <button type="submit" className="botonBaloto" onClick={this.changeHandler.bind(this,"BALOTO")}>
                            <img alt='' className='img-baloto img-fluid' src={baloto} />
                        </button>
                    </div>
                    </div>
              </form>
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        )
    }
}

export default Efectivo;