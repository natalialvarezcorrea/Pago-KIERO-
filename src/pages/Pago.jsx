import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FormaPago from '../Components/Forma-pago';

class Pago extends React.Component{


    render(){
        return(
            <div>
        
                <Header/>
                <FormaPago/>
               <Footer/>
            </div>
        )
    }
}

export default Pago;