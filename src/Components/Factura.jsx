import React from 'react';
import axios from 'axios';
import '../assets/css/Factura.css'

class Factura extends React.Component {
  
constructor (){
    super();
    this.state={
        data:[]
    }
}


async componentWillMount(){

    let data=await axios.get('');
    if (data.error) return console.error(data.message);
    this.setState({data:data});


}



    render() {
    
        
        return(

            <div className='container ' >
                <div className='row'>
                    <div className='col-lg-12 as mt-5'>

                        <h5 className='mt-4'>RESUMEN DE LA COMPRA</h5>


                        <div className='col-12 compra mt-3'>

                            Compra Exitosa 

                            Recibiras este producto entre 




                        </div>

                        <div className='botones mt-4 mb-5'>
                        <button type="button" class="btn  btn-danger btn-sm">COMUNICATE CON EL VENDEDOR</button>
                        <button type="button" class="btn btn-danger btn-sm ml-4">VER MAS PRODUCTOS</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Factura;
