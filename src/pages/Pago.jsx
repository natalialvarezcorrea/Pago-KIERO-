import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FormaPago from '../Components/Forma-pago';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'


const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }
  

class Pago extends React.Component{


      
    render(){

 
        return(
            <div>
                  <AlertProvider template={AlertTemplate} {...options}>
                <Header/>
              
                 <FormaPago/> 
         
               <Footer/>
               </AlertProvider>
            </div>
        )
    }
}

export default Pago;