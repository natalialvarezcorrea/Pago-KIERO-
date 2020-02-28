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
     
        
        return(

            <div className='container mb-5' >
                <div className='row'>

                    <div className='col-lg-12 as mt-5 mb-5'>

                        <h5 className='mt-4' style={{color: '#424242', fontWeight:'700', fontSize: '18px'}}>RESUMEN DE LA COMPRA</h5>


                                <div className='col-lg-12 compra mt-3'>
                                <p className='nombre mt-2' style={{fontSize:'15px'}}>{ ` ${Object.keys(data).length > 1 && data.data.state}` }</p>

                                    
                                    <p className='mt-3'>Recibiras este producto entre 3 a 5 dias hábiles</p>

                                        <div className='producto col-lg-6'>

                                            <div className='col-lg-4 col-sm-12 foto'>
                                                <img className='imag img-fluid' src={Object.keys(data).length > 1 && data.data.image_product}/>
                                            </div>

                                            <div className='col-lg-8 col-sm-12 texto'>

                                                <p className='nombre'>{ ` ${Object.keys(data).length > 1 && data.data.title_product}` }</p>
                                                <p className='nombre'>{ ` ${Object.keys(data).length > 1 && data.data.value_transaction}` }</p>

                                            </div>

                                        </div>

                                        <div className='usuario col-lg-6 col-sm-12'>

                                            <p className=''>{ ` ${Object.keys(data).length > 1 && data.data.user_name}` }</p>
                                            <p className=''>{ ` ${Object.keys(data).length > 1 && data.data.transactionDate}` }</p>

                                        </div>

                                </div>

                        <div className=' mt-4 mb-5 col-lg-12 '> 
                                {/* <button type="button" className="btn btn-danger btn-sm col-lg-3 botones ml-4 mb-2">COMUNICATE CON EL VENDEDOR</button> */}
                                 <a href='https://www.kiero.co/'><button type="button" className="btn btn-danger btn-sm  col-lg-2 botones mb-5">VER MÁS PRODUCTOS</button></a> 
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Factura;
