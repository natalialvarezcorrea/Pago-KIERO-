import React from 'react';
import axios from 'axios';
import '../assets/css/Factura.css'


let uri = "";
let destructured = [];


class Factura extends React.Component {
  
constructor (){
    super();
    this.state={
        data:{}
    }
}


async componentWillMount(){
    uri = window.location.href;
    destructured = uri.substr(uri.indexOf("pse_result/")).split("/");
    let data = await axios.post(`https://kieroapi.net/pse_pay_order`,{ order_id: destructured[1] });
    if (data.error) return console.error(data.message);
    this.setState({data});
    
}



    render() {
    
      const { data } = this.state;
      console.log(data)
        
        return(

            <div className='container mb-5' >
                <div className='row'>

                    <div className='col-lg-12 factura mt-4' >

                        <h2 style={{textAlign='center'}}>Estado de la Compra</h2>

                        <div className='cuadrofactura col-lg-6 mt-5'>
gtret
                        </div>
sfsf
                    </div>

                </div>
            </div>
        );
    }

}

export default Factura;
