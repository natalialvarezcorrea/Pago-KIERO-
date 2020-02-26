import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card } from 'react-bootstrap';
import '../assets/css/FormaPago.css';
import axios from 'axios'
import Pse from '../Components/Modal/Pse';
import '../assets/css/Transferencia.css';


class Transferencia extends React.Component{

  constructor(){
    super()
    this.state = {
        items: {},
        names:'',
        email:'',
        phone:'',
        product_id:'',
        user_id:'',
        person_type:'',
        document_type:'',
        document_number:'',
        bank_pseCode:'',
        boton:'false',
        document_numberError:'',
        Enviar:'',
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
  axios.get(`https://kieroapi.net/pse_banks`) 
  .then(res => {

    this.setState({items:res.data});
  }
    
    
  )
  .catch(err => {
      console.log(err)
  })
  }

submitHandler = e => {
        e.preventDefault();
        e.target.className += " was-validated";

      axios.post('https://kieroapi.net/pse_payment', {
        names:this.state.names,
        email:this.state.email,
        phone:this.state.phone,
        product_id:"2374824",
        user_id:"1093",
        person_type:this.state.person_type,
        document_type:this.state.document_type,
        document_number:this.state.document_number,
        bank_id:this.state.bank_pseCode
      })
      .then(res => {
        console.log(res.data)
        this.setState({LinkBank:res.data})
        
      }).catch(e => {
        console.log(e)
      })

      this.setState(
        {document_numberError:""}
        )
    
      
    
      if(this.valid()){
       
        this.setState({
          boton:'active'
        })  
        this.setState(
          {Enviar:`Enviado con exito, Revisa el estado de tu compra :`}
          )
        
      }
    

    };

changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value });
};
 
    render(){
      const{person_type,document_type,document_number,bank_pseCode,names,email,phone}=this.state;
    

        return(

          <div>
            <Card>
                                                  
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className='tamano'>
               Transferencia desde PSE.
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="2" className='tam'>
            <Card.Body>
            
<form className="was-validate needs-validation" onSubmit={this.submitHandler}>
            <div className="form-group col-12">
                                    
                                  <div className="input-group col-12">
                                     <input className="form-control" name='names' type='text' value={names}  placeholder="Nombre Completo*" required onChange={this.changeHandler}/>
                                     <div className="input-group-append">                                              
                                  </div>
                              </div>

                              <div className="input-group col-12 mt-3">
                                     <input className="form-control" name='email' type='email' value={email}  placeholder="Email*" required onChange={this.changeHandler}/>  
                                     <div className="input-group-append">                                              
                                  </div>
                              </div>      

                              <div className="input-group col-12 mt-3">
                                     <input className="form-control" name='phone' type='number' value={phone}  placeholder="Telefono*" required onChange={this.changeHandler}/>
                                     <div className="input-group-append">                                              
                                  </div>
                              </div>      



                                  <label htmlFor="bank" className='tes mt-3'>BANCOS</label>
                                  <select  className="form-control sel" id="bank" name='bank_pseCode' value={bank_pseCode}  onChange={this.changeHandler} required >
                                  
                                  
                                { /* change the params id for the description*/}
        {Object.keys(this.state.items).length > 0 && this.state.items.banks.map((bank,index) => <option key={index} value={bank.pseCode}> {bank.description}</option>  )}
                                 

                                  </select>
                                </div>

                               <div className="form-group col-12">
                                  <label htmlFor="kindperson " className='tes' >TIPO DE PERSONA</label>
                                  <select id="kindperson" className="form-control sel" name='person_type' value={person_type} onChange={this.changeHandler} required>
                                  <option defaultValue >Tipo persona</option>
                                    <option value={"J"} >Juridica</option>
                                    <option value={"N"} >Natural</option>
                                  </select>
                                </div>
               
                                 <div className="form-group col-12">
                                  <label htmlFor="identification" className='tes' >DOCUMENTO DE IDENTIFICACION</label>
                                  <select id="identification" className="form-control sel" name='document_type' value={document_type} onChange={this.changeHandler} required>
                                  <option >CC</option>

                                    <option>CE</option>
                                 
                                
                                  </select>
                                </div>


                                
        

                                <div className="form-group col-12">
                                <input className="form-control col-12" type="text" name="document_number" minLength='5' maxLength='40' value={document_number} placeholder="Numero documento*"  onChange={this.changeHandler} required/>
                                <p style={{color:'red',fontSize:'14px'}}> {this.state.document_numberError}</p>
                                </div>
                                
                                    <button type="submit" className="btn btn-outline-danger btn-block mt-3">Continuar Compra</button>
                               
                               
          
                
                               

                </form>
                <p style={{color:'#055902',fontSize:'14px', textAlign:'center'}} className='mt-3'>{this.state.Enviar} </p>
                <div className={this.state.boton}> <Pse/></div>
               

            </Card.Body>
            </Accordion.Collapse>
        </Card>

        </div>
        )
    }
}

export default Transferencia;