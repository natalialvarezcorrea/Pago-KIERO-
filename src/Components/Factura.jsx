import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import '../assets/css/Factura.css'


class Factura extends React.Component {
    state = {
        open: false,
        items: {}
           
        }

    // constructor(){
    //     super()
    //     this.state={
    //         items:{}
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
        this.setState({items:response.items});
        console.log(response.items)
    }
      

      
         
          onOpenModal = () => {
            this.setState({ open: true });
          };
         
          onCloseModal = () => {
            this.setState({ open: false });
          };
        
    render() {
        const { items } = this.state;
        
        const { open } = this.state;
        
        return(
            <div className='verfactura mt-2' >
                
                <a  href="a"onClick={this.onOpenModal} >Ver tu Factura</a>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className='col-12'>
                  <div className='izquierdaa col-6'>
                     <div className="imagen">
                         imagen
                     </div>

                     <div>
                            <p style={{textAlign:'center'}}></p>
                     </div>
              
                </div>

                <div className='derechaa col-6' >
                <p>Precio :  {Object.keys(items).length > 0 && items.Resultados.precio}</p>
                <p>Producto :{Object.keys(items).length > 0 && items.Resultados.titulo}</p>
                <p>Cantidad : {items.cantidad}</p> 
                <p>Estado Transaccion : {items.responseMessage}</p>
                <p>Fecha : {items.transactionDate}</p>
                <p> Direccion Envio: {items.user_address}</p>
     

                </div>
                </div>
                </Modal> 
            </div>
        );
    }
}
export default Factura;
