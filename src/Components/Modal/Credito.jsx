import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import '../../assets/css/modalCredito.css';


let destructured = [];

class Factura extends React.Component {

constructor(){
    super();
    this.state = {
        data: [],
        user_id:'',
        open: false
    }
}
onOpenModal = () => {
    this.setState({ open: true });
    };

onCloseModal = () => {
    this.setState({ open: false });
};

async componentWillMount(){
    let response = await axios.get(`https://kieroapi.net/product/detail/${destructured[2]}`);
    this.setState({ items:response.data });
}


render() {
    const { data,open } = this.state;
    const items = this.props.product;
        
    
        return(
            
            <div className='verfactura ' >
                <p onClick={this.onOpenModal} className='facturacredito' >Ver Factura</p>
                <Modal open={ open } onClose={this.onCloseModal} center>
                    <div className='col-12'>
                        <h1 style={{textAlign:'center'}}>{data.state}</h1>
                        <div className='izquierdaa col-6'>
                            <div className="imagen">
                            {Object.keys(items).length > 0 && 
                                 items.Resultados
                                .imagenes_Producto
                                .map((img,index) => <img key={index} className='ima img-fluid mt-3' src={img} alt=""/>)}
                            </div>
                            <div>
                                <p style={{textAlign:'center'}}>{data.user_name}</p>
                            </div>
                        </div>

                        <div className='derechaa col-6' >
                            <p>Precio : {Object.keys(items).length > 0 && items.Resultados.precio}</p>
                            <p>Producto : {Object.keys(items).length > 0 && items.Resultados.titulo}</p>
                            <p>Cantidad : {data.cantidad}</p> 
                            <p>Estado Transaccion : {data.responseMessage}</p>
                            <p>Fecha : {data.transactionDate}</p>
                            <p>Direccion Envio: {data.user_address}</p>
                        </div>
                    </div>
                </Modal> 
            </div>
        );
    }
}
export default Factura;
