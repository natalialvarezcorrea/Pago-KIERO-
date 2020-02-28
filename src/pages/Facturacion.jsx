import React, {Fragment } from 'react';
import Factura from '../Components/Factura';
import Header from '../Components/Header';

class Facturacion extends React.Component{



    render (){

        return(
            <Fragment>
            <Header/>
            <Factura/>
            </Fragment>

        )
    }
}

export default Facturacion;