import React from "react";
import '../assets/css/Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dar">
        <div className='col-12'>
        <p className='footer'>© 2020 Kiero. Todos los derechos reservados.</p>
        </div>
    </nav>
    );
  }
}
export default Footer;
