import React from 'react';
import '../assets/css/FormaPago.css'
import ProductInfo from "../Components/Product-info";
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import { Button, Card } from 'react-bootstrap';
import img from '../assets/img/card-credit.png'
import Efectivo from './Efectivo';
import Transferencia from './Transferencia';


const validate = values => {
  const errors = {}
  if (values.numerotarjeta) {
    errors.numerotarjeta = 'Este campo es obligatorio'
  }
  if (values.nombreapellido) {
    errors.nombreapellido = 'Este campo es obligatorio'
  }
  if (values.month) {
    errors.month = 'Este campo es obligatorio'
  }
  console.log(values)
  return errors
}

class FormaPago extends React.Component {
  state = {
    errors: {}
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }
  handleSubmit = e => {
    e.preventdefault()
    const { errors, ...sinErrors } = this.state
    const result = validate(sinErrors)
    this.setState({ errors: result })
    if (Object.keys(result).length) {
      //enviar
      console.log('formulario valido')
    }

  }


  render() {
    const { errors } = this.state
    return (
      <div className='container-fluid'>
        <div className="row-fluid">
          <div className='col-8 contenedor '>
            <div className="izquierda col-sm-12 col-lg-7 ">
              <p className='titulo'>Elige la forma de pago</p>

              <Accordion >


                <div className='credito'>
                  <Card>

                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className='tamano'>
                      Credito
                                            </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body className='cred' >

                        <p>Ingresa una nueva tarjeta</p>

                        <div className='tarjeta col-12'>
                          <div className='col-8 contenido'>

                            <div className="input-group mr-5">
                              <input name='numerotarjeta' class="form-control" type="text" placeholder="Numero tarjeta*" onChange={this.handleChange} />
                              {errors.numerotarjeta && <p>{errors.numerotarjeta}</p>}
                              <div className="input-group-append">

                              </div>
                            </div>
                            <input type='submit' values='Enviar' />

                            <div className="input-group mt-2">
                              <input class="form-control" type="text" placeholder="Nombre y Apelido*" name='nombreapellido' onChange={this.handleChange} />
                              {errors.nombreapellido && <p>{errors.nombreapellido}</p>}

                              <div className="input-group-append">

                              </div>
                            </div>

                            <div className=" mt-2">

                              <div class="form-group col-4 month">
                                <select id="month" name="month" class="select_month cart_select italic light" class="form-control  " onChange={this.handleChange}>
                                  {errors.month && <p>{errors.month}</p>}

                                  <option selected hidden>Mes</option>
                                  <option value="01">Enero</option>
                                  <option value="02">Febrero</option>
                                  <option value="03">Marzo</option>
                                  <option value="04">Abril</option>
                                  <option value="05">Mayo</option>
                                  <option value="06">Junio</option>
                                  <option value="07">Julio</option>
                                  <option value="08">Agosto</option>
                                  <option value="09">Septiembre</option>
                                  <option value="10">Octubre</option>
                                  <option value="11">Noviembre</option>
                                  <option value="12">Diciembre</option>
                                </select>
                              </div>
                              <div class="form-group an col-4">
                                <select id="year" name="year" class="select_year cart_select italic light" class="form-control ml-2" >
                                  <option selected hidden>Año</option>
                                  <option value="2018">2018</option>
                                  <option value="2017">2017</option>
                                  <option value="2016">2016</option>
                                  <option value="2015">2015</option>
                                  <option value="2014">2014</option>
                                  <option value="2013">2013</option>
                                  <option value="2012">2012</option>
                                  <option value="2011">2011</option>
                                  <option value="2010">2010</option>
                                  <option value="2009">2009</option>
                                  <option value="2008">2008</option>
                                  <option value="2007">2007</option>
                                  <option value="2006">2006</option>
                                  <option value="2005">2005</option>
                                  <option value="2004">2004</option>
                                  <option value="2003">2003</option>
                                  <option value="2002">2002</option>
                                  <option value="2001">2001</option>
                                  <option value="2000">2000</option>
                                  <option value="1999">1999</option>
                                  <option value="1998">1998</option>
                                  <option value="1997">1997</option>
                                  <option value="1996">1996</option>
                                  <option value="1995">1995</option>
                                  <option value="1994">1994</option>
                                  <option value="1993">1993</option>
                                  <option value="1992">1992</option>
                                  <option value="1991">1991</option>
                                  <option value="1990">1990</option>
                                  <option value="1989">1989</option>
                                  <option value="1988">1988</option>
                                  <option value="1987">1987</option>
                                  <option value="1986">1986</option>
                                  <option value="1985">1985</option>
                                  <option value="1984">1984</option>
                                  <option value="1983">1983</option>
                                  <option value="1982">1982</option>
                                  <option value="1981">1981</option>
                                  <option value="1980">1980</option>
                                  <option value="1979">1979</option>
                                  <option value="1978">1978</option>
                                  <option value="1977">1977</option>
                                  <option value="1976">1976</option>
                                  <option value="1975">1975</option>
                                  <option value="1974">1974</option>
                                  <option value="1973">1973</option>
                                  <option value="1972">1972</option>
                                  <option value="1971">1971</option>
                                  <option value="1970">1970</option>
                                  <option value="1969">1969</option>
                                  <option value="1968">1968</option>
                                  <option value="1967">1967</option>
                                  <option value="1966">1966</option>
                                  <option value="1965">1965</option>
                                  <option value="1964">1964</option>
                                  <option value="1963">1963</option>
                                  <option value="1962">1962</option>
                                  <option value="1961">1961</option>
                                  <option value="1960">1960</option>
                                  <option value="1959">1959</option>
                                  <option value="1958">1958</option>
                                  <option value="1957">1957</option>
                                  <option value="1956">1956</option>
                                  <option value="1955">1955</option>
                                  <option value="1954">1954</option>
                                  <option value="1953">1953</option>
                                  <option value="1952">1952</option>
                                  <option value="1951">1951</option>
                                  <option value="1950">1950</option>
                                  <option value="1949">1949</option>
                                  <option value="1948">1948</option>
                                  <option value="1947">1947</option>
                                  <option value="1946">1946</option>
                                  <option value="1945">1945</option>
                                  <option value="1944">1944</option>
                                  <option value="1943">1943</option>
                                  <option value="1942">1942</option>
                                  <option value="1941">1941</option>
                                  <option value="1940">1940</option>
                                  <option value="1939">1939</option>
                                  <option value="1938">1938</option>
                                  <option value="1937">1937</option>
                                  <option value="1936">1936</option>
                                  <option value="1935">1935</option>
                                  <option value="1934">1934</option>
                                  <option value="1933">1933</option>
                                  <option value="1932">1932</option>
                                  <option value="1931">1931</option>
                                  <option value="1930">1930</option>
                                </select>
                              </div>


                              <div className="input-group col-4 cv ">
                                <input class="form-control" type="text" placeholder="CVV" />
                                <div className="input-group-append">

                                </div>
                              </div>

                            </div>

                            <div className='f'>
                              <div class="form-group col-7 doc">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                  <option selected>Tipo Documentos*</option>
                                  <option>CN</option>
                                  <option>CC</option>
                                  <option>NIT</option>
                                </select>
                              </div>

                              <div class="form-group col-5 cuotas">
                                <label for="inputState"></label>
                                <select id="inputState" className="form-control sel"  >
                                  <option selected>Cuotas*</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                                  <option>15</option>
                                  <option>16</option>
                                  <option>17</option>
                                  <option>18</option>

                                </select>
                              </div>
                            </div>



                            <div className="input-group mt-2">
                              <input class="form-control" type="text" placeholder="Numero documento*" />
                              <div className="input-group-append">

                              </div>
                            </div>





                          </div>
                          <div className='col-4 imagen'>
                            <img className='img-credito' src={img} />

                          </div>
                        </div>


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>

                <div className='efectivo '>
                  <Efectivo />
                </div>


                <div classNameName='pse mt-5'>
                  <Transferencia />
                </div>

              </Accordion>


            </div>
            <ProductInfo />
          </div>
        </div>
      </div>

    )
  }


}

export default FormaPago;