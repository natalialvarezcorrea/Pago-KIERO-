import React from 'react';
import Modal from 'react-responsive-modal';
import '../assets/css/modal.css'
import axios from 'axios';
class Factura extends React.Component {
    state = {
        open: false
    }
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
   
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount(){
        axios.get(`http://10.4.28.184:5000/payment_cc`) /*Here must be the correct endpoint */
        .then(res => 
           
            console.log(res.data)
        )

        .catch(err => {
            console.log(err)
        })
        
        }

    render() {
        const { open } = this.state;
        
        return(
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2> </h2>
                </Modal> 
            </div>
        );
    }
}
export default Factura;
