import React from "react";
import '../assets/css/Products-info.css'

class ProductInfo extends React.Component{

    constructor(){
        super()
        this.state = {
            user_id:''
        }
    }

    render(){
        
        const items = this.props.product;
        return(
            <div className=' derecha col-sm-12 col-lg-4'>
                <div className='col-12'>
                    <div className='imagenes col-lg-6 col-sm-12 s '> {Object.keys(items).length > 0 && 
                            items.Resultados
                                .imagenes_Producto
                                .map((img,index) => <img key={index} className='imagenes mt-3' src={img} alt=""/>)}
                    </div>

                    <div className='tex col-lg-6 col-sm-12 mt-3 a'> 
                        <p className='tit'>Titulo: {Object.keys(items).length > 0 && items.Resultados.titulo}</p>
                        <p className='precio'>Precio: {Object.keys(items).length > 0 && items.Resultados.precio}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductInfo;