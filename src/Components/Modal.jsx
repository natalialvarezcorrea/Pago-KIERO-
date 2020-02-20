import React from 'react';
import Modal from 'react-responsive-modal';
import '../assets/css/modal.css'

class Modalbutton extends React.Component{

  state = {
    
    open:false
  };

  onOpenModal = () => {
    this.setState({open:true});
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


render(){
    const { open } = this.state;


    return(
        <div>
            <Modal open={open} onClose={this.onCloseModal} center>
       

               <div className='uno col-6'>
                   <form>
                   <p>Agregar direccion de envio</p>
           <input className="form-control " type="text" placeholder="Nombre y apellido*" required />
           <input className="form-control mt-3" type="text" placeholder="Telefono*" required />
           <input className="form-control mt-3" type="text" placeholder="barrio*" required />
           <input className="form-control mt-3" type="text" placeholder="direccion*" required />
           <input className="form-control mt-3" type="text" placeholder="Ciudad*" required />

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