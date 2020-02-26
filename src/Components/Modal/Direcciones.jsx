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

    var destructured = [];
    var uri = window.location.href;
    destructured = uri.substr(uri.indexOf("#")).split("/");
    let user_id=destructured[4];


    let qData = {id: ""+user_id};
    axios.get(`https://kieroapi.net/user/getAddress/`, { params: qData })
    .then(res => { 
        console.log(res.data);
        this.setState({data: res.data})
    })
    .catch(error => console.log(error))


    ////////////////////////////////////////////////////////////////
    // SI TIENE UN PARAMETRO ADICIONAL SE CREA UNA DIRECCIÓN.
    // ESTE FRAGMENTO ES ÚNICAMENTE PARA PROBAR EL ENDPOINT "CREAR DIRECCIÓN"
    // POR FAVOR QUITAR DATOS QUEMADOS Y OBTENERLOS DEL DOM
    // EEL ENDPOINT RETORNA: {"message":"ok"} EN CASO DE QUE TODO ESTE BIEN
    //////////////////////////////////////////////////////////////// 
    if(destructured.length==6){
        const data = {
                    user_id: user_id,
                    name_and_lastname: "Jhoubert Rincon",
                    department: "Bogotá D.C",
                    city: "Bogotá",
                    neighborhood: "Galerias",
                    via: "Cra12-34#56",
                    number_via: "",
                    additional_data: "",
                    number_contact: "3118556404" 
                  }
      axios.post(`https://kieroapi.net/createAddress/user/`, {data: data}, {"Content-Type": "application/json"})
      .then(res => { 
          console.log(res.data);
      })
      .catch(error => console.log(error));
    }
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    


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