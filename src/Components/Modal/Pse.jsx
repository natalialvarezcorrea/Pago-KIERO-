import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import '../../assets/css/modalPse.css';


let uri = "";
let destructured = [];

class Pse extends React.Component {

constructor(){
super();
this.state = {
    data: [],
    user_id:'',
    product: {},
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
uri = window.location.href;
destructured = uri.substr(uri.indexOf("#")).split("/");

let response = await axios.get(`https://kieroapi.net/product/detail/${destructured[2]}`);
await this.setState({ ...this.state, product: response.data });
}
     


render() {
        const { data,open } = this.state;
        const { product  } = this.state;

    return(
            
            <div className='verfactura ' >
                <a href='#' onClick={this.onOpenModal} className='facturacredito' >Ver Factura</a>
                <Modal open={ open } onClose={this.onCloseModal} center>
                    <div className='col-12'>
                        <h1 style={{textAlign:'center'}}>{data.state}</h1>
                            <div className='izquierdaa col-6'>
                                <div className="imagen">
                                {Object.keys(product).length > 0 && 
                                    product.Resultados
                                    .imagenes_Producto
                                    .map((img,index) => <img key={index} className='ima img-fluid mt-3' src={img} alt=""/>)}
                                </div>
                                <div>
                                    <p style={{textAlign:'center'}}>{data.user_name}</p>
                                </div>
                            </div>

                        <div className='derechaa col-6' >
                            <p>Precio : {Object.keys(product).length > 0 && product.Resultados.precio}</p>
                            <p>Producto : {Object.keys(product).length > 0 && product.Resultados.titulo}</p>
                            <p>Cantidad : {data.cantidad}</p> 
                            <p>Estado Transacción : {data.responseMessage}</p>
                            <p>Fecha : {data.transactionDate}</p>
                            <p>Direccion Envío: {data.user_address}</p>
                        </div>
                    </div>
                </Modal> 
            </div>
        );
    }
}

export default Pse;
