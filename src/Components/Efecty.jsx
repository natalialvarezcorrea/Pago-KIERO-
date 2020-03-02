import React from 'react';
import '../assets/css/Efecty.css';
import axios from 'axios';


class Efecty extends React.Component{
    constructor(){
        super()
        this.state={
            product_id:'',
            user_id:'',
            address_id: '',
            names:'',
            last_name:'',
            document_type:'',
            document_number:''
        }
    }

    submitHandler = async e => {
        e.preventDefault();
        axios.post('http://localhost:5000/payment_cc', {
            names:this.state.names,
            last_name:this.state.last_name,
            document_type:this.state.document_type,
            document_number:this.state.document_number
        })
        .then(res => {
          console.log(res.data)
        })
        .catch(error => console.log(error))
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render(){
        const { names, last_name, document_type, document_number } = this.state;

        return(

    <div className="container-fluid">
		    <div className="container">
			    <div className="formBox">
				    <form onSubmit={this.submitHandler}>
						<div className="row">
							<div className="col-sm-12">
								<h2>Pago con Efecty</h2>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6">
								<div className="inputBox ">
									<input type="text" name="names"  value={names} placeholder="Nombre" className="input" required onChange={this.changeHandler}/>
								</div>
							</div>

							<div className="col-sm-6">
								<div className="inputBox">
									
									<input type="text" name="last_name"  value={last_name} placeholder="Apellido" className="input" required onChange={this.changeHandler}/>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6">
								<div className="inputBox">
									
									<input type="text" name="document_type" value={document_type}placeholder="Tipo de documento" className="input" required onChange={this.changeHandler}/>
                                </div>
							</div>

                            

							<div className="col-sm-6">
								<div className="inputBox">
								
									<input type="text" name="document_number" value={document_number} placeholder="Número de documento" className="input" required onChange={this.changeHandler}/>
								</div>
							</div>
						</div>



						<div className="row">
							<div className="col-sm-12">
                            
                            <button type="submit" 
                                    className="btn btn-outline-danger btn-block mt-3">
                                Comprar
                            </button>
							
							</div>
						</div>
				</form>
			</div>
		</div>
	</div>
    
    )
    }
}
export default  Efecty;