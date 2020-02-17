import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FormaPago from '../Components/Forma-pago';
import BankList from '../Components/bankList';
class Pago extends React.Component{


    render(){

        return(
            <div>
        
                <Header/>
                <FormaPago/>
                <BankList/>
               <Footer/>
            </div>
        )
    }
}

export default Pago;