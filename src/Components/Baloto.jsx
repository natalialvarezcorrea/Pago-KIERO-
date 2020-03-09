import React from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import '../assets/css/FormaPago.css';
import '../assets/css/Efectivo.css';
import '../assets/css/Direcciones.css';
import '../assets/css/modal.css';
import baloto from '../assets/img/baloto.png';

class ModalBaloto extends React.Component{

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
      if (e === "BALOTO"){
          this.setState({ paymentMethod: e});
        }
    }
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
            <div className="content">
                <div className='baloto col-6'>
                        <button type="button" className="botonBaloto" onClick={this.onOpenModal}>
                            <img alt='' className='img-baloto img-fluid' src={baloto} />
                        </button>
                        <Modal open={open} onClose={this.onCloseModal} center>                     
                        <div className='col-12'>
                            <form onSubmit={this.submitHandler}>
                             
                                <input className="form-control " name='full_name'  type="text" value={full_name} placeholder="Nombre y apellido*" required onChange={this.handleData}/>
                                <input className="form-control " name='email'  type="text" value={email} placeholder="Email*" required onChange={this.handleData}/>
                                <input className="form-control " name='phone_number' type="text" value={phone_number} placeholder="Numero de contacto*" required onChange={this.handleData}/>  
                            <button type="submit"  onClose={this.onCloseModal}   onClick={this.changeHandler.bind(this,"BALOTO")} className="btn btn-outline-danger btn-block mt-3" >Continuar</button>
                        </form>
                    </div>
                      </Modal>
                    </div>
            </div>
        )
    }
}

export default ModalBaloto;