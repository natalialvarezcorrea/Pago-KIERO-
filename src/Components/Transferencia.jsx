import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { Button,Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../assets/css/FormaPago.css'


class Transferencia extends React.Component{


    render(){
        return(
            <Card>
                                                  
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className='tamano '>
               Transferencia desde PSE.
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="2">
            <Card.Body>

            <div class="form-group col-12">
                                  <label for="inputState " className='tes'>TIPO DE PERSONA</label>
                                  <select id="inputState" className="form-control sel"  >
                                  <option selected>Persona Natural</option>
                                    <option>BANCO AGRARIO</option>
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
                                  <option>SCOTIABANK COLPATRIA</option>

                                   
                                
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

                 
                


                  <Form className='condiciones '>
                      {['checkbox'].map(type => (
                        <div key={`custom-${type}`} >
                          <Form.Check 
                            custom
                            type={type}
                            id={`custom-${type}`}
                            label={`Terminos y condiciones`}
                          />
                        </div>
                      ))}
                    </Form>
                  <button type="button" class="btn btn-danger btn-sm btn-block">Continuar</button>
                </div>


           
            </Card.Body>
            </Accordion.Collapse>
           
        </Card>
        )
    }
}

export default Transferencia;