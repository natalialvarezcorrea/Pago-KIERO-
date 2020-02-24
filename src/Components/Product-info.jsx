import React from "react";
import axios from 'axios'
import '../assets/css/Products-info.css'

class ProductInfo extends React.Component{

    constructor(){
        super()
        this.state = {
            items: {}
        }
    }

    async componentWillMount(){
            let response = await axios.get(`https://kieroapi.net/product/detail/1340673`);
            this.setState({items:response.data});
       
        }


    render(){
        const { items }=this.state;
        console.log(this.state.items)
        return(
            <div className=' derecha col-sm-12 col-lg-4'>

                <div className="col-sm-10 col-lg-12 cuadro ">
                  
                    <div className='col-12'>
                    <div className='imagenes col-lg-6 col-sm-12 '> {Object.keys(items).length > 0 && 
                            items.Resultados
                                .imagenes_Producto
                                .map(img => <img className='imagenes mt-3' src={img}/>)}
                    </div>

                   <div className='tex col-lg-6 col-sm-12 mt-3'> 
                       <p className='tit'>Titulo: {Object.keys(items).length > 0 && items.Resultados.titulo}</p>
                       <p className='tit '>Precio: {Object.keys(items).length > 0 && items.Resultados.precio}</p>
                   </div>
                   </div>


                    <div className='col-lg-12 '>
                    <p className='tit' >Descripcion: <br/>{Object.keys(items).length > 0 && items.Resultados.descripcion}</p>
                    </div>

                    

                </div>
            </div>
        )
    }
}

export default ProductInfo;