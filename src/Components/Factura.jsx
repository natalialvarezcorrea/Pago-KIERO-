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
                    <div className='col-lg-12 as mt-5 mb-5'>

                        <h5 className='mt-4' style={{color: '#424242', fontWeight:'700', fontSize: '18px'}}>RESUMEN DE LA COMPRA</h5>


                        <div className='col-12 compra mt-3'>


                            <p>{ `titulo ${Object.keys(data).length > 1 && data.data.id}` }</p>

                                              




                        </div>

                        <div className=' mt-4 mb-5 col-lg-12 '> 
                        <button type="button" className="btn btn-danger btn-sm col-lg-3 botones ml-4 mb-2">COMUNICATE CON EL VENDEDOR</button>
                        <button type="button" className="btn btn-danger btn-sm  col-lg-2 botones mb-5">VER MAS PRODUCTOS</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Factura;
