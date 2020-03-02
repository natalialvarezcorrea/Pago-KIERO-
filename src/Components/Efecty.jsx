import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card } from 'react-bootstrap';
import '../assets/css/FormaPago.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from "../Components/Product-info";
import axios from 'axios'


let uri = "";
let destructured = [];

class Efecty extends React.Component{
    constructor(){
        super()

        this.state={
            
            payer_fullname:'',
            last_name:'',
            payer_document_type:'',
            payer_document_number:''
        }
    }

    submitHandler = e => {
            e.preventDefault();
            axios.post('http://localhost:5000/payment_cc' ,{

            })

    }

    async componentWillMount(){
        uri = window.location.href;
        destructured = uri.substr(uri.indexOf("#")).split("/");
        
        let response = await axios.get(`https://kieroapi.net/product/detail/${destructured[2]}`);
        await this.setState({ ...this.state, product: response.data });
      }
    render(){
        const { product  } = this.state;
        return(
                    
  <div className='container-fluid'>
  <div className="row-fluid">
    <div className='col-lg-9 col-md-10 col-sm-12 contenedor '>
      <div className="izquierda col-sm-12 col-md-12 col-lg-7 ">
        <p className='titulo'>Elige la forma de pago</p>

          <Accordion >
            <div className=''>
              <Card>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className='tamano'>
                Pago Por Efecty
              </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className='collap'>
                  <div className='cont '>
                    <div className='cred col-md-12 col-sm-12 col-lg-8'>
                      <Card.Body   >

                      <p>Pago por Efecty</p> 

                      <div className='tarjeta '>
                        <div className=' contenido'>


                          <form className="needs-validation was-validate">

                            <div className="input-group mr-5">

                              <input className="form-control" name='names' type='text'  placeholder="Nombre" required />
                              <div className="input-group-append">                                              
                              </div>
                            </div>

                            <div className="input-group mt-2">
                              <input className="form-control" name="last_name"type="text" placeholder="Apellido*" required />
                              <div className="input-group-append">                                              
                              </div>
                            </div>

                            <div className="input-group mt-2">

                            </div>
                            <div className="input-group mt-2">
                              <input className="form-control" type="number" name="payer_document_number"  placeholder="Número documento*" required />
                              <div className="input-group-append">                                              
                              </div>
                            </div>

                    
                    

                            <button type="submit" className="btn btn-outline-danger btn-block mt-3" >Enviar</button>
                          </form> 

                        </div>
                      </div>
                    </Card.Body>
                    </div>

                        <div className='col-lg-4 col-md-5 col-sm-2  n'>
                        <img alt='' className='img-fluid '/>   
                        </div>

                  </div>

                </Accordion.Collapse>

              </Card>
            </div>

     

          </Accordion>

        </div>
        <ProductInfo productid={destructured[2]} product={ product }/>

      <div className=' derecha col-sm-12 col-lg-4'>
        
            
            
                <button  type="button"  className="btn btn-outline-danger btn-block mt-3">
                <a href="javascript:location.reload();">Cambiar Direccion </a>  
               </button>
    
                  
        </div>
    </div>
</div>
</div>
        )
    }
}
export default Efecty;