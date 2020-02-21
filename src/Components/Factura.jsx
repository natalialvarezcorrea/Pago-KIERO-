import React from 'react';
import Modal from 'react-responsive-modal';
import '../assets/css/modal.css'
import axios from 'axios';


class Factura extends React.Component {
   
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get(`http://10.4.28.184:5000/payment_cc`) 
        .then(res => {
            this.setState = res.data
        })
        .catch(err => {
            console.log(err)
        })
        
        }

        state = {
            open: false,
          };
         
          onOpenModal = () => {
            this.setState({ open: true });
          };
         
          onCloseModal = () => {
            this.setState({ open: false });
          };
        
    render() {
        const { data } = this.state;
        const { open } = this.state;
        
        
        return(
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    {this.state.data.map(datos => <p>{datos.data}</p>)}
                </Modal> 
            </div>
        );
    }
}
export default Factura;
