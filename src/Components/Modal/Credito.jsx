import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import '../assets/css/Factura.css'


class Factura extends React.Component {
    state = {
        open: false,
        data: []
           
        }

    // constructor(){
    //     super()
    //     this.state={
    //         data:{}
    //     }
    // }
  
    
   
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

        async componentWillMount(){
            let response = await axios.get(`https://kieroapi.net/product/detail/1340673`);
            this.setState({items:response.data});
        }

          onOpenModal = () => {
            this.setState({ open: true });
          };
         
          onCloseModal = () => {
            this.setState({ open: false });
          };
        
    render() {
        const { data } = this.state;
        const { open } = this.state;
        
        return(
            <div className='verfactura mt-2' >
                
                <a onClick={this.onOpenModal} >Ver tu Factura</a>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className='col-12'>
                    <h1 style={{textAlign:'center'}}>{data.state}</h1>
                  <div className='izquierdaa col-6'>
                     <div className="imagen">
                         imagen
                     </div>

                     <div>
                            <p style={{textAlign:'center'}}>{data.user_name}</p>
                     </div>
              
                </div>

                <div className='derechaa col-6' >
                <p>Precio : {data.value_transaction}</p>
                <p>Producto : {data.title_product}</p>
                <p>Cantidad : {data.cantidad}</p> 
                <p>Estado Transaccion : {data.responseMessage}</p>
                <p>Fecha : {data.transactionDate}</p>
                <p> Direccion Envio: {data.user_address}</p>
     

                </div>
                </div>
                </Modal> 
            </div>
        );
    }
}
export default Factura;
