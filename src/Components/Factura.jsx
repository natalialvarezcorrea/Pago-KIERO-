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

    componentDidMount(){
        axios.get(`http://10.4.28.184:5000/payment_cc`) /*Here must be the correct endpoint */
        .then(res => {
           const data =res.data;

            this.setState({data})
      
            
        }
        )

        .catch(err => {
            console.log(err)
        })
        
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
