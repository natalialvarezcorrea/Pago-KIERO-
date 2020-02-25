import React from "react";
import axios from 'axios'
import '../assets/css/Products-info.css'

class ProductInfo extends React.Component{

    constructor(){
        super()
        this.state = {
            items: {},
            product_id:'',
            user_id:''
        }
    }

    async componentWillMount(){
           
    
            let response = await axios.get(`https://kieroapi.net/product/detail/1340673`);
            this.setState({items:response.data});
       
        }


    render(){
        const { items }=this.state;
        //console.log(this.state.items)
        return(
            <div className=' derecha col-sm-12 col-lg-4'>

               
                  
                    <div className='col-12'>
                    <div className='imagenes col-lg-6 col-sm-12 s '> {Object.keys(items).length > 0 && 
                            items.Resultados
                                .imagenes_Producto
                                .map(img => <img className='imagenes mt-3' src={img}/>)}
                    </div>

                   <div className='tex col-lg-6 col-sm-12 mt-3 a'> 
                       <p className='tit'>Titulo: {Object.keys(items).length > 0 && items.Resultados.titulo}</p>
                       <p className='precio'>Precio: {Object.keys(items).length > 0 && items.Resultados.precio}</p>
                       
                   </div>
                   </div>


                   <div className='col-12 j '>
                   <p className='tit' >Descripcion: <br/> <p >{Object.keys(items).length > 0 && items.Resultados.descripcion}</p></p>
                    </div>
                   

                    


                
            </div>
        )
    }
}

export default ProductInfo;