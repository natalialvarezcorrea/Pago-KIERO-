import React from 'react';
import Modal from 'react-responsive-modal';
import '../../assets/css/modal.css';
import axios from 'axios';
import '../../assets/css/Direcciones.css';



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
      open:true,
      address_id:0,
    }
    this.destructured = [];
    this.changeHandler=this.changeHandler.bind(this);

  }

async componentWillMount(){
    let uri = window.location.href;
    this.destructured = uri.substr(uri.indexOf("#")).split("/");
    let user_id=this.destructured[4];

     let qData = { id: "" + user_id };

     await axios.get(`https://kieroapi.net/user/getUserAddress/`, {params:qData})
    .then(res => { 
      this.setState({address: res.data})
    })
    .catch(error => console.log(error))
}


onSubmitNewDirection = async e => {
  e.preventDefault();
  
  let data = this.state;

  let uri = window.location.href;
  this.destructured = uri.substr(uri.indexOf("#")).split("/");
  let user_id=this.destructured[4];


  data.user_id = user_id;

  let res = await axios.post(`https://kieroapi.net/createAddress/user/`, {data:data}, {"Content-Type": "application/json"}) 
  
  if(res.data.message === "ok"){
    await axios.get(`https://kieroapi.net/user/getUserAddress/?id=${user_id}`)
  }

  this.setState({open:false})
}



changeRBHandler = e => {
  let selectedAddress = this.state.address.addresses.find( d => d.id==e.target.value );
  this.props.cb(selectedAddress);
};

changeHandler = e => {
  this.setState({[e.target.name]: e.target.value });
}

onOpenModal = () => {
    this.setState({ open: true });
};
 
onCloseModal = () => {
  
  var d = this;

  setTimeout(
      function(){
       
        d.setState({ open: false });
      },450
  );
 
};


render(){
    const { open } = this.state;
    const { name_and_lastname, department, city, neighborhood, via,number_via,additional_data, number_contact } = this.state;
    const { address } = this.state;
  
    
    return(
      <div>
        <Modal  open={open}  showCloseIcon = {false}  onClose={this.setState} closeOnOverlayClick={false} center>

       
        <div style={{fontSize: '20px', padding:'28px 34px 32px'}} className="font-weight-bold">Mis Direcciones</div> 
      <form onSubmit={this.onSubmitNewDirection}>    
            <div className="address_">
                  <div className="ml-3 mr-3 mb-2 ">
                       
                          
                  {Object.keys(address).length > 0 && address.addresses.map((info,index) => (<div className="row ml-3 mb-2"  key={index}>
                        <div onClick={this.onCloseModal} className="custom-control custom-radio" >
                            <label><input type="radio" value={info.id} onChange={this.changeRBHandler} name="address"/>
                            <span>{info.neighborhood} {info.via} {info.number_via} {info.city} {info.department}<br/></span></label>
                          </div>
                        </div>
                         ))}
                  </div>
          </div>
     </form> 
      
     <div className='col-12'>
               <a data-toggle="collapse" data-target="#demo" href="/" className="" style={{textAlign:'center'}}>Agregar nueva dirección</a>
                <form id="demo" className="collapse" onSubmit={this.onSubmitNewDirection}>
                    <p style={{color:"red", fontSize : "12px"}}>Los campos con * son obligatorios</p>
                    <input className="form-control " name='name_and_lastname'  type="text" value={name_and_lastname} placeholder="Nombre y apellido*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='department' value={department} type="text" placeholder="Departamento*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='city' value={city} type="text" placeholder="Ciudad*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='neighborhood' value={neighborhood} type="text" placeholder="Barrio*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='via' value={via} type="text" placeholder="Dirección*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='number_via' value={number_via} type="text" placeholder="Dirección-2*" onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='number_contact' value={number_contact} type="text" placeholder="Número de Contacto*" required onChange={this.changeHandler}/>
                    <input className="form-control mt-3" name='additional_data' value={additional_data} type="text" placeholder="Datos adicionales" onChange={this.changeHandler}/>
                   
                    
                    <button type="submit"  onClose={this.onCloseModal} className="btn btn-outline-danger btn-block mt-3" >Agregar</button>
                </form>
                </div>
          

        </Modal>
      </div>
    )
 }

}

export default Direcciones;