import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { Button,Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../assets/css/FormaPago.css';
import Modalbutton from '../Components/Modal';
import axios from 'axios'


class Transferencia extends React.Component{

  constructor(){
    super()
    this.state = {
        items: {},
    }
}


componentDidMount(){
axios.get(`http://localhost:5000/payment_cc`) /*Here must be the correct endpoint */
 .then(res => {
     //console.log(res.data)
     this.setState({items:res.data});
     
 })
 .catch(err => {
     console.log(err)
 })
}

    render(){
        return(

          <div>
            <Card>
                                                  
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className='tamano '>
               Transferencia desde PSE.
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="2">
            <Card.Body>
            
<form>
            <div class="form-group col-12">
                                  <label for="inputState " className='tes'>BANCOS</label>
                                  <select id="inputState" className="form-control sel"  >
                                  
                                  <option selected>Busca tu Banco</option>
                                { /* change the params id for the description*/}
                                  {Object.keys(this.state.items).length > 0 && this.state.items.banks.map(bank => <option>{bank.id}</option>)}
                                  {/* <option>BANCO AGRARIO</option>
                                  <option>BANCO AV VILLAS</option>
                                  <option>BANCO BBVA COLOMBIA S.A</option>
                                  <option>BANCO CAJA SOCIAL</option>
                                  <option>BANCO COOPERATIVO COOPCENTRAL</option>
                                  <option>BANCO DAVIVIENDA</option>
                                  <option>BANCO DE BOGOTA</option>
                                  <option>BANCO DE OCCIDENTE</option>
                                  <option>BANCO FALABELLA</option>
                                  <option>BANCO GNB SUDAMERIS</option>
                                  <option>BANCO ITAU</option>
                                  <option>BANCO PICHINCHA S.A</option>
                                  <option>BANCO POPOULAR</option>
                                  <option>BANCO PROCREDIT</option>
                                  <option>BANCO SANTANDER COLOMBIA</option>
                                  <option>BANCO SERFINANZA</option>
                                  <option>BANCOLOMBIA</option>
                                  <option>CITIBANK</option>
                                  <option>CONFIAR COOPERATIVA FINANCIERA</option>
                                  <option>COOPERATIVA FINANCIERA DE ANTIOQUIA</option>
                                  <option>DAVIPLATA</option>
                                  <option>NEQUI</option>
                                  <option>SCOTIABANK COLPATRIA</option> */}

                                  </select>
                                </div>

         
           

                <div className='terminos'>

                 

                               <div class="form-group col-12">
                                  <label for="inputState " className='tes'>TIPO DE PERSONA</label>
                                  <select id="inputState" className="form-control sel"  >
                                  <option selected>Persona Natural</option>
                                    <option>Persona juridica</option>
                                  </select>
                                </div>
               


                
                  <div class="form-group col-12">
                                  <label for="inputState " className='tes'>DOCUMENTO DE IDENTIFICACION</label>
                                  <select id="inputState" className="form-control sel"  >
                                  <option selected>Cedula de ciudadania.</option>
                                    <option>Cedula de ciudadania.</option>
                                    <option>Numero de identificacion Tributario.</option>
                                    <option>Tarjeta de Identidad</option>
                                    <option>Pasaporte.</option>
                                    <option>Identificador unico de cliente.</option>
                                    <option>Movil</option>
                                    <option>Registro civil</option>
                                    <option>Documento de identificacion extranjero.</option>
                                
                                  </select>
                                </div>

                 
                


                
                </div>


                <Modalbutton/>

                </form>
           
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        </div>
        )
    }
}

export default Transferencia;