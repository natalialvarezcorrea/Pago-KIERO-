import React from 'react';
import '../assets/css/FormaPago.css'
import ProductInfo from "../Components/Product-info";
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap';
import img from '../assets/img/card-credit.png'
import Efectivo from './Efectivo';
import Transferencia from './Transferencia';
import axios from 'axios';
import Modalbutton from '../Components/Modal';

import Factura from '../Components/Factura';

class FormaPago extends React.Component{

    
  state = {
    
    open:false
  };


  constructor(){
    super()
    this.state = {
        item: {},
        card_number : "",
        ccv : '',
        expiration_date : '',
        card_holder : '',
        card_type: '',
        payer_fullname: '',
        payer_email : '',
        payer_phone : '',
        payer_document_number : '',
        payer_document_type : '',
        cuotas:'',
        product_id: '',
        payer_addr1 : '',
        payer_addr2 : '',
        payer_city : '',
        payer_department : '',
        user_id : '',
        address_id : '',
        device_session_id : localStorage.getItem("md5"),  //Obtenemos lo que trae md5 desde localstorage
        payer_emailError:'',
        boton:'false',

      };
  }
  
  onOpenModal = () => {
    this.setState({open:true});
  };
  onCloseModal = () => {
    this.setState({ open:false });
  };
 
  valid(){

    if ( !this.state.payer_email.includes("@") )
    {
      this.setState(
        {payer_emailError:'invalid'}
        )
    }
    else{
      return true 
    }

  }
 
 

 submitHandler = e => {
    e.preventDefault();
    e.target.className += " was-validated";
    axios.post('https://kieroapi.net/cc_payment', {
      card_number:this.state.card_number,
      ccv: "4323",
      expiration_date: "2021/12",
      card_holder: "santiago valle",
      card_type:"MASTERCARD",
      payer_fullname:"Santiago Valle",
      payer_email:"iefaz.santiagovalle@gmail.com",
      payer_phone:"3017249486",
      payer_document_number:"1152466011",
      payer_document_type:"CC",
      cuotas:"2",
      product_id:"2301220",
      payer_addr1:"cra 82a #36-32",
      payer_addr2:"calle 36# 81-22",
      payer_city:"Medellin",
      payer_department:"Antioquia",
      user_id:"1093",
      address_id:"61",
      device_session_id:"611326d0e6ab41299435886c285d658c"
    })
      .then((response) => {
        console.log(response);
        console.log(response.item)
      }, (error) => {
        console.log(error);
      });

  this.setState(
    {payer_emailError:""}
    )

  

  if(this.valid()){
   
    this.setState({
      boton:'active'
    })  
    
  }

  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    render(){

      const {card_number,ccv,expiration_date,card_type,payer_fullname,payer_email,payer_phone,payer_document_number,payer_document_type,cuotas,payer_addr1,payer_city,payer_department}=this.state;;
      const years = []
      const year = parseInt(new Date(Date.now()).getFullYear())

      for (let i = year - 20; i <= year + 20 ; i++) {
        years.push(i)                                                                       
      }
      
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
                                                    Credito
                                            </Accordion.Toggle>
                                                
                                                <Accordion.Collapse eventKey="0" className='collap'>
                                                  <div className='cont '>
                                          <div className='cred col-md-12 col-sm-12 col-lg-8'>
                                             <Card.Body   >
                                             
                                                <p>Ingresa una nueva tarjeta</p> 
                                              
                                                        <div className='tarjeta '>
                                                          <div className=' contenido'>
                                    
                                                            
                                                          <form
                                                                  // name='formulario'
                                                                  className="was-validate"
                                                                  onSubmit={this.submitHandler}
                                                      
                                                                >


                                                                      <div className="input-group mr-5">
                                                                       <input className="form-control" name='card_number' type='number' value={card_number}  placeholder="Numero tarjeta*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                            
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" name="payer_fullname" value={payer_fullname} type="text" placeholder="Nombre y Apelido*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                            
                                                                          </div>
                                                                      </div>

                                                                      <div className=" mt-3">

                                                                      <div className="form-group col-lg-4 col-sm-12 month sele">
                                                                      <select id="month" name="expiration_date" value={expiration_date} className="select_month cart_select italic light form-control"   required onChange={this.changeHandler}>
                                                                        
                                                                        <option value="01">Enero</option> 
                                                                        <option value="02">Febrero</option> 
                                                                        <option value="03">Marzo</option> 
                                                                        <option value="04">Abril</option> 
                                                                        <option value="05">Mayo</option> 
                                                                        <option value="06">Junio</option> 
                                                                        <option value="07">Julio</option> 
                                                                        <option value="08">Agosto</option> 
                                                                        <option value="09">Septiembre</option> 
                                                                        <option value="10">Octubre</option> 
                                                                        <option value="11">Noviembre</option> 
                                                                        <option value="12">Diciembre</option> 
                                                                        </select>
                                                                        </div>
                                                                      <div className="form-group an col-lg-4 col-sm-12 sele">
                                                                      <select id="year" name="expiration_date" value={expiration_date} className="select_year cart_select italic light form-control ml-"  required onChange={this.changeHandler}>
                                                                        {years.map(year => <option>{year}</option>)}
                                                                      </select> 
                                                                      </div>
                                                                          
                                                                      
                                                                      <div className="input-group col-lg-4 col-sm-12 cv sele ">
                                                                          <input className="form-control" type="number"  name='ccv' value={ccv} placeholder="CVV" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                    
                                                                          </div>
                                                                          </div>

                                                                      </div>
                                                                      <div className="form-group col-lg-12  col-sm-12 doc">
                                                                          <label htmlFor="inputState"></label>
                                                                          <select id="inputState" className="form-control" name="card_type" value={card_type} onChange={this.changeHandler}>
                                                                            <option defaultValue>Tipo Tarjeta*</option>
                                                                            <option>VISA</option>
                                                                            <option>MASTERCARD</option>
                                                                            <option>DINNERS</option>
                                                                            <option>CRM</option>
                                                                           </select>
                                                                        </div>

                                                                      
                                                                                                                                             
                                                                        <div className="form-group col-lg-7 col-sm-12 doc">
                                                                          <label htmlFor="inputState"></label>
                                                                          <select id="inputState" className="form-control " name='payer_document_type' value={payer_document_type} onChange={this.changeHandler}>
                                                                            <option defaultValue>Tipo Documento*</option>
                                                                            <option>CN</option>
                                                                            <option>CC</option>
                                                                            <option>NIT</option>
                                                                           </select>
                                                                        </div>

                                                                        <div className="form-group col-lg-5 col-sm-12 cuotas ">
                                                                          <label htmlFor="inputState"></label>
                                                                          <select id="inputState" className="form-control sel" name='cuotas' value={cuotas} required  onChange={this.changeHandler}>
                                                                            <option defaultValue>Cuotas*</option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                            <option>4</option>
                                                                            <option>5</option>
                                                                            <option>6</option>
                                                                            <option>7</option>
                                                                            <option>8</option>
                                                                            <option>9</option>
                                                                            <option>10</option>
                                                                            <option>11</option>
                                                                            <option>12</option>
                                                                            <option>13</option>
                                                                            <option>14</option>
                                                                            <option>15</option>
                                                                            <option>16</option>
                                                                            <option>17</option>
                                                                            <option>18</option>

                                                                          </select>
                                                                        </div>

                                                                       
                                                                     



                                                                        <div className="input-group mt-2">
                                                                          <input className="form-control" type="number" name="payer_document_number" value={payer_document_number} placeholder="Numero documento*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="text" name="payer_email" value={payer_email} placeholder="Email*" required onChange={this.changeHandler}/>
                                                                          <p style={{color:'red',fontSize:'14px'}}> {this.state.payer_emailError}</p>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="number" name='payer_phone' value={payer_phone} placeholder="Telefono*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="text" name='payer_city' value={payer_city} placeholder="Ciudad*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>
                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="text" name='payer_addr1' value={payer_addr1} placeholder="Direccion*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="text" name='payer_department' value={payer_department} placeholder="Departamento*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>


                                                                     
                                                                        <button type="submit" className="btn btn-outline-danger btn-block mt-3">Enviar</button>

                                                                      </form> 
                                                                
                                                                     <div className={this.state.boton}> <Modalbutton/></div>
  
                                                                    
               
       
                                                          </div>
                                                        
                                                             
                                   </div>


                                                </Card.Body>
                                               </div>


                                               <div className='col-lg-4 col-md-5 col-sm-2 mt-5 n'>
                                                        <img alt='' className='img-fluid' src={img}/>   
                                               </div>
                                               </div>
                                          </Accordion.Collapse>
                                     </Card>
                             </div>

                             <div className='efectivo '>
                                          <Efectivo/>
                              </div>


                              <div className='pse '>
                                               <Transferencia/>
                                </div>
                               
                               </Accordion>

                          
                              </div>
                          <ProductInfo/>
                          <Factura/>
                      </div>
                  
                </div>
             
            </div>

        

        )
    }


}

export default FormaPago;