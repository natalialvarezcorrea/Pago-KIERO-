import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card, Modal } from 'react-bootstrap';
import '../assets/css/FormaPago.css';
import axios from 'axios'
import Modalbutton from '../Components/Modal';


class Transferencia extends React.Component{

  constructor(){
    super()
    this.state = {
        items: {},
        person_type:'',
        document_type:'',
        document_number:'',
        bank_id:'',
        boton:'false',
        document_numberError:''
    }
}

valid(){

  if ( !this.state.document_number )
  {
    this.setState(
      {document_numberError:'invalid'}
      )
  }
  else{
    return true 
  }

}


  componentDidMount(){
  axios.get(`https://kieroapi.net/pse_banks`) /*Here must be the correct endpoint */
  .then(res => {
      this.setState({items:res.data});
  })
  .catch(err => {
      console.log(err)
  })
  }

submitHandler = e => {
        e.preventDefault();
     
       /*Here must be the correct endpoint */
      axios.post('https://kieroapi.net/pse_payment', this.state)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });

      this.setState(
        {document_numberError:""}
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
      const{person_type,document_type,document_number,bank_id}=this.state;

        return(

          <div>
            <Card>
                                                  
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className='tamano '>
               Transferencia desde PSE.
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="2">
            <Card.Body>
            
<form
      className="needs-validation"
      onSubmit={this.submitHandler}
      >
            <div className="form-group col-12">
                                  <label htmlFor="inputState " className='tes'>BANCOS</label>
                                  <select id="inputState" className="form-control sel" name='bank_id' value={bank_id} onChange={this.changeHandler} required >
                                  
                                  
                                { /* change the params id for the description*/}
                                  {Object.keys(this.state.items).length > 0 && this.state.items.banks.map(bank => <option key={bank.id} value={bank.id}>{bank.description}</option>  )}
                                 

                                  </select>
                                </div>

                               <div className="form-group col-12">
                                  <label htmlFor="inputState " className='tes' >TIPO DE PERSONA</label>
                                  <select id="inputState" className="form-control sel" name='person_type' value={person_type} onChange={this.changeHandler} required>
                                  <option defaultValue>Persona Natural</option>
                                    <option>Persona juridica</option>
                                  </select>
                                </div>
               
                                 <div className="form-group col-12">
                                  <label htmlFor="inputState " className='tes' >DOCUMENTO DE IDENTIFICACION</label>
                                  <select id="inputState" className="form-control sel" name='document_type' value={document_type} onChange={this.changeHandler} required>
                                  <option defaultValue>Cedula de ciudadania.</option>
                                    <option>Numero de identificacion Tributario.</option>
                                    <option>Tarjeta de Identidad</option>
                                    <option>Pasaporte.</option>
                                    <option>Identificador unico de cliente.</option>
                                    <option>Movil</option>
                                    <option>Registro civil</option>
                                    <option>Documento de identificacion extranjero.</option>
                                
                                  </select>
                                </div>

                                <div className="form-group col-12">
                                <input className="form-control col-12" type="text" name="document_number" minLength='5' maxLength='40' value={document_number} placeholder="Numero documento*"  onChange={this.changeHandler} required/>
                                <p style={{color:'red',fontSize:'14px'}}> {this.state.document_numberError}</p>
                                </div>
                                <button type="submit" className="btn btn-outline-danger btn-block mt-3">Continuar Compra</button>
          
                
                                <div className={this.state.boton}> <Modalbutton/></div>

                </form>
              

            </Card.Body>
            </Accordion.Collapse>
        </Card>

        </div>
        )
    }
}

export default Transferencia;