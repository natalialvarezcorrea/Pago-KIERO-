import React from 'react';
import '../assets/css/Header.css'
import logo from '../assets/img/logo.png'

class Header extends React.Component{


    render(){

        return(

              <div className='header col-12'>
                  <div className=' log col-6'>
                  <img src={logo} alt = '' className='mt-3 ml-5'/>
                  </div >
                  <div className=' ayuda col-6'>
                      <p className="text">Ayuda</p>
                  </div>
              </div>
          
        )
    }

   
}

export default Header;