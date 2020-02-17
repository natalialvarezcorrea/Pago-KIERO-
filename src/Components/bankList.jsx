import React from 'react'
import axios from 'axios';

class BankList extends React.Component {
        constructor(){
            super()
            this.state = {
                items: {},
            }
        }
       
    
    componentDidMount(){
        axios.get(`http://localhost:5000/payment_cc`)
         .then(res => {
             //console.log(res.data)
             this.setState({items:res.data});
             
         })
         .catch(err => {
             console.log(err)
         })
    }
    render(){
      console.log(this.state.items)
        return(
          <div>

              {Object.keys(this.state.items).length > 0 && this.state.items.banks.map(bank => <h1>{bank.id}</h1>)}
          </div>

          
        )
    }
}

export default BankList; 