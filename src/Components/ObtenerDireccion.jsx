import React from 'react';

class ObtenerDireccion extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            data:this.props.data,
        };

    }

    haldeData = e => {
        this.setState({address_id:"asd"});
    }

    render(){

        return(
              
            <div className=' derecha col-sm-12 col-lg-4'>
                <div className='col-12'>
                    <div className='tex col-lg-6  col-sm-12 mt-3 a'> 
                        <p>ADID{this.state.address_id}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ObtenerDireccion;