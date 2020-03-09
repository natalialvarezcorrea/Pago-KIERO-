import React from 'react';
import efecty from '../assets/img/efecty.png';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import '../assets/css/FormaPago.css';
import '../assets/css/Efectivo.css';
import '../assets/css/Direcciones.css';
import '../assets/css/modal.css';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import ModalBaloto from './Baloto';



class Efectivo extends React.Component{


  constructor(){
    super()

    this.state={
      paymentMethod:'',
      user_id:'',
      product_id:'',
      address_id:'',
      device_session_id: localStorage.getItem('md5'),
      full_name: '',
      email:'',
      phone_number:'',
      open:false
    }
    this.changeHandler=this.changeHandler.bind(this);
  }

  submitHandler = async e => {
    e.preventDefault();
    let res = await axios.post('https://kieroapi.net/payment_cash', {   
      paymentMethod:this.state.paymentMethod,
      user_id:this.props.user_id,
      address_id:this.props.address_id,
      product_id:this.props.productid,
      device_session_id:this.state.device_session_id,
      full_name:this.state.full_name,
      email:this.state.email,
      phone_number:this.state.phone_number
    })
    console.log(res.data)
  }
   handleData = e => {
      this.setState({[e.target.name]: e.target.value});
   }

  changeHandler = e => {

    if (e === "EFECTY"){
        this.setState({ paymentMethod: e});
      }
  };
  onOpenModal = () => {
    this.setState({ open: true});
  };

  onCloseModal = () => {
    this.setState({ open: false});
  };

    render(){
      const { open } = this.state;     
      const { full_name, email, phone_number} = this.state; 
        return(
            <Card>
                                                
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className='tamano'>
                Efectivo
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="1">
            <Card.Body>
           
             
                  <div className='content'>
                    <div className='efecty col-6'>
                      <button type="button" className="botonEfecty" onClick={this.onOpenModal}>
                           <img alt='' className='img-efecty img-fluid' src={efecty} />
                      </button>
                      <Modal open={open} onClose={this.onCloseModal} center>                     
                        <div className='col-12'>
                            <form onSubmit={this.submitHandler}>
                           
                                <input className="form-control " name='full_name'  type="text" value={full_name} placeholder="Nombre y apellido*" required onChange={this.handleData}/>
                                <input className="form-control " name='email'  type="text" value={email} placeholder="Email*" required onChange={this.handleData}/>
                                <input className="form-control " name='phone_number' type="text" value={phone_number} placeholder="Numero de contacto*" required onChange={this.handleData}/>  
                            <button type="submit"  onClose={this.onCloseModal}   onClick={this.changeHandler.bind(this,"EFECTY")} className="btn btn-outline-danger btn-block mt-3">Continuar</button>
                        </form>
                    </div>
                      </Modal>
                    </div>
                    <ModalBaloto user_id={this.props.user_id}  productid={this.props.productid} address_id={this.props.address_id}/>
                    </div>

              
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        )
    }
}

export default Efectivo;