import React from 'react';
import Modal from 'react-responsive-modal';
import '../../assets/css/modal.css'
import axios from 'axios'

class Direcciones extends React.Component{

  constructor(props){
    super(props);
    
    this.state = { 
      address:[],
      user_id:"" ,
      name_and_lastname: "",
      department: "",
      city: "",
      neighborhood: "",
      via: "",
      number_via: "",
      additional_data: "",
      number_contact: "",
      open:true
    }
    this.destructured = [];
  }

async componentWillMount(){
    let uri = window.location.href;
    this.destructured = uri.substr(uri.indexOf("#")).split("/");
    let user_id=this.destructured[4];

    let qData = { id: "" + user_id};
    await axios.get(`https://kieroapi.net/user/getAddress/`, {params:qData})
    .then(res => { 
      this.setState({address: res.data})
    })
    .catch(error => console.log(error))
}


onSubmitNewDirection = e => {
  e.preventDefault();
  
  let data = this.state;
  axios.post(`https://kieroapi.net/createAddress/user/`, {data:data}, {"Content-Type": "application/json"})
  .then(res => { 
      console.log(res.data);
  })
  .catch(error => console.log(error));

  this.setState(
    {open:false}
  )

}

changeHandler = e => {
  this.setState({[e.target.name]: e.target.value });
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
    const { address } = this.state;
  
    return(
      <div>
        <Modal open={open}  showCloseIcon = {false}  onClose={this.setState} closeOnOverlayClick={false} center>

        <div className='uno col-12'>
          
            <p>Selecciona direccion de envio</p>

          <div className=' derecha col-sm-12 col-lg-4'>
                <div className='col-12'>
                    <div className='tex col-lg-6 col-sm-12 mt-3 a'> 
                        {Object.keys(address).length > 0 && address.address.map((info,index) => (<p>{info.via}</p>))}
                        {Object.keys(address).length > 0 && address.address.map((info,index) => (<p key={index}>{info.neighborhood}</p>))}
                        {Object.keys(address).length > 0 && address.address.map((info,index) => (<p key={index}>{info.city}</p>))}
                        {Object.keys(address).length > 0 && address.address.map((info,index) => (<p key={index}>{info.department}</p>))}
    

                    </div>
                </div>
            </div>
               <a data-toggle="collapse" data-target="#demo" href="/" className="">Agrega una direccion</a>
                <form id="demo" className="collapse" onSubmit={this.onSubmitNewDirection}>
                    <p style={{color:"red", fontSize : "12px"}}>Los campos con * son obligatorios</p>
                    <input className="form-control " name='name_and_lastname'  type="text" value={name_and_lastname} placeholder="Nombre y apellido*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='department' value={department} type="text" placeholder="Departamento*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='city' value={city} type="text" placeholder="Ciudad*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='neighborhood' value={neighborhood} type="text" placeholder="Barrio*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='via' value={via} type="text" placeholder="Direccion*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='number_via' value={number_via} type="text" placeholder="Direccion-2* " required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='additional_data' value={additional_data} type="text" placeholder="Datos adicionales" onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='number_contact' value={number_contact} type="text" placeholder="Numero de Contacto*" required onChange={this.changeHandler}/>

                    <button type="submit"  onClose={this.onCloseModal} className="btn btn-outline-danger btn-block mt-3" >Agregar</button>
                </form>

    </div>
   </Modal>
      </div>
    )
 }

}

export default Direcciones;