import React from 'react';
import Modal from 'react-responsive-modal';
import '../assets/css/modal.css'
import axios from 'axios'


class Modalbutton extends React.Component{

  state = {
    
    open:false
  };

  constructor(){
    super();
    this.state={

      nombre:'',
      telefono:'',
      ciudad:'',
      barrio:'',
      direccion:''


    }
  }

  submitHandler = e => {
    e.preventDefault();
 
   /*Here must be the correct endpoint */
  axios.post('https://10.4.28.184:5000', this.state)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

};

changeHandler = e => {
this.setState({ [e.target.name]: e.target.value });
};


  onOpenModal = () => {
    this.setState({open:true});
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


render(){
    const { open } = this.state;
    const {nombre,telefono,ciudad,barrio,direccion}=this.state;

    return(
        <div>

<button type="submit" className='btn btn-outline-danger btn-block mt-3'  onClick={this.onOpenModal}> comprar </button>
            <Modal open={open} onClose={this.onCloseModal} center>
       

               <div className='uno col-6'>
                   <form className="was-validate" onSubmit={this.submitHandler}>
                   <p>Agregar direccion de envio</p>
           <input className="form-control " name='nombre'  type="text" value={nombre}placeholder="Nombre y apellido*" required onChange={this.changeHandler}/>
           <input className="form-control mt-3" name='telefono' value={telefono} type="text" placeholder="Telefono*" required onChange={this.changeHandler}/>
           <input className="form-control mt-3" name='ciudad' value={ciudad} type="text" placeholder="Ciudad*" required onChange={this.changeHandler}/>
           <input className="form-control mt-3" name='barrio' value={barrio} type="text" placeholder="barrio*" required onChange={this.changeHandler}/>
           <input className="form-control mt-3" name='direccion' value={direccion} type="text" placeholder="direccion*" required onChange={this.changeHandler}/>
           
           <button type="submit" className="btn btn-outline-danger btn-block mt-3">Comprar</button>


</form>
           </div>

           <div className='dos col-6'>
           <p>Tu compra se realizara via </p>
           <p>Subtotal</p>
           <p>$</p>
           <p>Envio :</p>
           <p>Gratis</p>
           <p>Total :</p>
           <p>$</p>






           </div>
        
            </Modal>
        </div>
    )
}

}

export default Modalbutton;