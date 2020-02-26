import React from 'react';
import Modal from 'react-responsive-modal';
import '../../assets/css/modal.css'
import axios from 'axios'
import Formapago from '../Forma-pago'
import { Link } from 'react-router-dom'


class Direcciones extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data:{},
      nombre:'',
      apellidos: '',
      telefono:'',
      ciudad:'',
      barrio:'',
      direccion:'',
      open:true
    }
  }

  submitHandler = e => {
  e.preventDefault();
  axios.post('https://kieroapi.net/user/getAddress/', this.state)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

};

async componentWillMount(){
    axios.get(`https://kieroapi.net/user/getAddress/`)
    .then(res => {
        this.setState({data: res.data})
    })
    .catch(error => console.log(error))
}


changeHandler = e => {
this.setState({ [e.target.name]: e.target.value });
};


onOpenModal = () => {
    this.setState({ open: true });
};
 
onCloseModal = () => {
    this.setState({ open: false });
};
 


render(){
    const { open } = this.state;
    const { nombre, telefono, ciudad, barrio, direccion } = this.state;
    //const { data } = this.state;

    return(
      <div>
        <Modal open={open}  showCloseIcon = {false}  onClose={this.setState} closeOnOverlayClick={false} center>

        <div className='uno col-12'>
          
            <p>Selecciona direccion de envio</p>

          <div className=' derecha col-sm-12 col-lg-4'>
                <div className='col-12'>
                    <div className='tex col-lg-6 col-sm-12 mt-3 a'> 
                        

                    </div>
                </div>
            </div>
               <a data-toggle="collapse" data-target="#demo" href="/" className="">Agrega una direccion</a>
                <form id="demo" className="collapse">
                    <input className="form-control " name='nombre'  type="text" value={nombre}placeholder="Nombre y apellido*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='telefono' value={telefono} type="text" placeholder="Telefono*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='ciudad' value={ciudad} type="text" placeholder="Ciudad*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='barrio' value={barrio} type="text" placeholder="Barrio*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='direccion' value={direccion} type="text" placeholder="Direccion*" required onChange={this.changeHandler}/>
                </form>

            <div className={this.state.botone}>
                <button type="submit" className="btn btn-outline-danger btn-block mt-3">Continuar</button>
            </div>
    </div>
   </Modal>
      </div>
    )
 }

}

export default Direcciones;