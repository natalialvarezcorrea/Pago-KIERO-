import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card } from 'react-bootstrap';
import '../assets/css/FormaPago.css';
import Modalbutton from '../Components/Modal';
import axios from 'axios'


class Transferencia extends React.Component{

  constructor(){
    super()
    this.state = {
        items: {},
        person_type:'',
        document_type:'',
        document_number:'',
        bank_id:''
    }
}


  componentDidMount(){
  axios.get(`http://10.4.28.184:5000/payment_cc`) /*Here must be the correct endpoint */
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
      noValidate>
            <div className="form-group col-12">
                                  <label htmlFor="inputState " className='tes'>BANCOS</label>
                                  <select id="inputState" className="form-control sel" name='bank_id' value={bank_id} onChange={this.changeHandler} required >
                                  
                                  <option defaultValue>Busca tu Banco</option>
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


                                <input className="form-control" type="text" name="document_number" value={document_number} placeholder="Numero documento*" required onChange={this.changeHandler}/>

          
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