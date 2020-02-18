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



class FormaPago extends React.Component{

  constructor(){
    super()
    this.state = {
        card_number : "",
        ccv : '',
        expiration_dateEmail : '',
        card_holder : '',
        card_type: '',
        payer_fullname: '',
        payer_email : '',
        payer_phone : '',
        payer_document_number : '',
        payer_document_type : '',
        payer_addr1 : '',
        payer_addr2 : '',
        payer_city : '',
        payer_department : '',
        user_id : '',
        address_id : '',
        device_session_id : '',
        cuotas:''
      };
  }
  
  
 submitHandler = e => {
    e.preventDefault();
    e.target.className += " was-validated";
    /*Here must be the correct endpoint */
   axios.post('http://10.4.28.184:5000/payment_cc', this.state)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
   
    render(){
      
      const {card_number,ccv,card_type,payer_fullname,payer_email,payer_phone,payer_document_number,payer_document_type,payer_addr1,payer_city,payer_department,cuotas,expiration_dateEmail}=this.state;
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
                                                  <div className='cont col-12'>
                                          <div className='cred col-md-12 col-sm-12 col-lg-8'>
                                             <Card.Body   >
                                            
                                                <p>Ingresa una nueva tarjeta</p> 
                                              
                                                        <div className='tarjeta col-12'>
                                                          <div className='col-12 contenido'>

                                                            
                                                          <form
                                                                  className="was-validate"
                                                                  onSubmit={this.submitHandler}
                                                      
                                                                >


                                                                      <div className="input-group mr-5">
                                                                          <input className="form-control" type="number" name='card_number' value={card_number} placeholder="Numero tarjeta*" required onChange={this.changeHandler}/>
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
                                                                      <select id="month" name="expiration_dateEmail" value={expiration_dateEmail} className="select_month cart_select italic light form-control"   required onChange={this.changeHandler}>
                                                                        
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
                                                                      <select id="year" name="expiration_dateEmail" value={expiration_dateEmail} className="select_year cart_select italic light form-control ml-"  required onChange={this.changeHandler}>
                                                                            <option defaultValue hidden>Año</option> 
                                                                            <option value="2018">2018</option> 
                                                                            <option value="2017">2017</option> 
                                                                            <option value="2016">2016</option> 
                                                                            <option value="2015">2015</option> 
                                                                            <option value="2014">2014</option> 
                                                                            <option value="2013">2013</option> 
                                                                            <option value="2012">2012</option> 
                                                                            <option value="2011">2011</option> 
                                                                            <option value="2010">2010</option> 
                                                                            <option value="2009">2009</option>
                                                                            <option value="2008">2008</option>
                                                                            <option value="2007">2007</option>
                                                                            <option value="2006">2006</option>
                                                                            <option value="2005">2005</option>
                                                                            <option value="2004">2004</option>
                                                                            <option value="2003">2003</option>
                                                                            <option value="2002">2002</option>
                                                                            <option value="2001">2001</option>
                                                                            <option value="2000">2000</option>
                                                                            <option value="1999">1999</option>
                                                                            <option value="1998">1998</option>
                                                                            <option value="1997">1997</option>
                                                                            <option value="1996">1996</option>
                                                                            <option value="1995">1995</option>
                                                                            <option value="1994">1994</option>
                                                                            <option value="1993">1993</option>
                                                                            <option value="1992">1992</option>
                                                                            <option value="1991">1991</option>
                                                                            <option value="1990">1990</option>
                                                                            <option value="1989">1989</option>
                                                                            <option value="1988">1988</option>
                                                                            <option value="1987">1987</option>
                                                                            <option value="1986">1986</option>
                                                                            <option value="1985">1985</option>
                                                                            <option value="1984">1984</option>
                                                                            <option value="1983">1983</option>
                                                                            <option value="1982">1982</option>
                                                                            <option value="1981">1981</option>
                                                                            <option value="1980">1980</option>
                                                                            <option value="1979">1979</option>
                                                                            <option value="1978">1978</option>
                                                                            <option value="1977">1977</option>
                                                                            <option value="1976">1976</option>
                                                                            <option value="1975">1975</option>
                                                                            <option value="1974">1974</option>
                                                                            <option value="1973">1973</option>
                                                                            <option value="1972">1972</option>
                                                                            <option value="1971">1971</option>
                                                                            <option value="1970">1970</option>
                                                                            <option value="1969">1969</option>
                                                                            <option value="1968">1968</option>
                                                                            <option value="1967">1967</option>
                                                                            <option value="1966">1966</option>
                                                                            <option value="1965">1965</option>
                                                                            <option value="1964">1964</option>
                                                                            <option value="1963">1963</option>
                                                                            <option value="1962">1962</option>
                                                                            <option value="1961">1961</option>
                                                                            <option value="1960">1960</option>
                                                                            <option value="1959">1959</option>
                                                                            <option value="1958">1958</option>
                                                                            <option value="1957">1957</option>
                                                                            <option value="1956">1956</option>
                                                                            <option value="1955">1955</option>
                                                                            <option value="1954">1954</option>
                                                                            <option value="1953">1953</option>
                                                                            <option value="1952">1952</option>
                                                                            <option value="1951">1951</option>
                                                                            <option value="1950">1950</option>
                                                                            <option value="1949">1949</option>
                                                                            <option value="1948">1948</option>
                                                                            <option value="1947">1947</option>
                                                                            <option value="1946">1946</option>
                                                                            <option value="1945">1945</option>
                                                                            <option value="1944">1944</option>
                                                                            <option value="1943">1943</option>
                                                                            <option value="1942">1942</option>
                                                                            <option value="1941">1941</option>
                                                                            <option value="1940">1940</option>
                                                                            <option value="1939">1939</option>
                                                                            <option value="1938">1938</option>
                                                                            <option value="1937">1937</option>
                                                                            <option value="1936">1936</option>
                                                                            <option value="1935">1935</option>
                                                                            <option value="1934">1934</option>
                                                                            <option value="1933">1933</option>
                                                                            <option value="1932">1932</option>
                                                                            <option value="1931">1931</option>
                                                                            <option value="1930">1930</option>
                                                                            </select> 
                                                                           </div>
                                                                          
                                                                      
                                                                      <div className="input-group col-lg-4 col-sm-12 cv sele ">
                                                                          <input className="form-control" type="text" name='ccv' value={ccv} placeholder="CVV" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                    
                                                                          </div>
                                                                          </div>

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
                                                                          <input className="form-control" type="text" name="payer_document_number" value={payer_document_number} placeholder="Numero documento*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="text" name="payer_email" vaue={payer_email} placeholder="Email*" required onChange={this.changeHandler}/>
                                                                          <div className="input-group-append">                                              
                                                                     
                                                                          </div>
                                                                      </div>

                                                                      <div className="input-group mt-2">
                                                                          <input className="form-control" type="text" name='payer_phone' value={payer_phone} placeholder="Telefono*" required onChange={this.changeHandler}/>
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

                                                                        <button type="submit" className="btn btn-outline-danger btn-block mt-3">Enviar</button>

                                                                      </form> 
                                                         

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


                              <div className='pse mt-5'>
                                               <Transferencia/>
                                </div>
                               
                               </Accordion>

                          
                              </div>
                          <ProductInfo/>
                      </div>
                </div>
            </div>

        )
    }


}

export default FormaPago;