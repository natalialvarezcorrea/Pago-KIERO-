import React, { Component,Fragment } from 'react';
import Factura from '../Components/Factura';
import Header from '../Components/Header';
import Footer from '../Components/Footer'

class Facturacion extends React.Component{



    render (){

        return(
            <Fragment>
            <Header/>
            <Factura/>
            <Footer/>
            </Fragment>

        )
    }
}

export default Facturacion;