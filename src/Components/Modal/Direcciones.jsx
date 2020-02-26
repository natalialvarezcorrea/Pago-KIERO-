import React from 'react';
import Modal from 'react-responsive-modal';
import '../../assets/css/modal.css'
import axios from 'axios'
import Formapago from '../Forma-pago'
import { Link } from 'react-router-dom'


class Direcciones extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: {
        user_id:"" ,
        name_and_lastname: "",
        department: "",
        city: "",
        neighborhood: "",
        via: "",
        number_via: "",
        additional_data: "",
        number_contact: "" 
      },
      open:true
    }
    this.destructured = [];
  }

  submitHandler = e => {
  e.preventDefault();
  
  axios.post(`https://kieroapi.net/createAddress/user/`, {

    user_id : this.state.dataUser.user_id,
    name_and_lastname : this.state.dataUser.name_and_lastname,
    department : this.state.dataUser.department,
    city : this.state.dataUser.city,
    neighborhood : this.state.dataUser.neighborhood,
    via : this.state.dataUser.via,
    number_via : this.state.dataUser.number_via,
    additional_data : this.state.dataUser.additional_data,
    number_contact : this.state.dataUser.number_contact
  }, 
  {"Content-Type": "application/json"})
  .then(res => { 
      console.log(res.data);
  })
  .catch(error => console.log(error));
  

};


async componentWillMount(){
    var uri = window.location.href;
    this.destructured = uri.substr(uri.indexOf("#")).split("/");
    let user_id=this.destructured[4];


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
    if(this.destructured.length==6){
        const data = {
                    user_id:"2301220" ,
                    name_and_lastname: "Jhoubert Rincon",
                    department: "Bogotá D.C",
                    city: "Bogotá",
                    neighborhood: "Galerias",
                    via: "Cra12-34#56",
                    number_via: "calle 36 #81-22",
                    additional_data: "casa primer pisd",
                    number_contact: "3118556404" 
                  }
      
    }
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
}

onSubmitNewDirection = () => {
  let data = this.state.data;
  axios.post(`https://kieroapi.net/createAddress/user/`, {data}, {"Content-Type": "application/json"})
  .then(res => { 
      console.log(res.data);
  })
  .catch(error => console.log(error));
}

changeHandler = e => {
this.setState({...this.state.data,[e.target.name]: e.target.value });
console.log(this.state)
};


onOpenModal = () => {
    this.setState({ open: true });
};
 
onCloseModal = () => {
    this.setState({ open: false });
};
 


render(){
    const { open } = this.state;
    const { name_and_lastname, department, city, neighborhood, via,number_via,additional_data, number_contact } = this.state;
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
                    <input className="form-control " name='name_and_lastname'  type="text" value={name_and_lastname} placeholder="Nombre y apellido*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='department' value={department} type="text" placeholder="Departamento*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='city' value={city} type="text" placeholder="City*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='neighborhood' value={neighborhood} type="text" placeholder="Barrio*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='via' value={via} type="text" placeholder="Direccion*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='number_via' value={number_via} type="text" placeholder="Direccion* 2" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='additional_data' value={additional_data} type="text" placeholder="Datos adicionales" onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='number_contact' value={number_contact} type="text" placeholder="Numero de Contacto" required onChange={this.changeHandler}/>
                </form>

            <div className={this.state.botone}>
                <button type="submit" className="btn btn-outline-danger btn-block mt-3" onSubmit={this.onSubmitNewDirection} >Continuar</button>
            </div>
    </div>
   </Modal>
      </div>
    )
 }

}

export default Direcciones;