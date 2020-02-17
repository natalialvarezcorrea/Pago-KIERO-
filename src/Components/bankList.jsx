import React from 'react'
import axios from 'axios';

class BankList extends React.Component {
    
        state = {
            banks: [],
        }
    
    componentDidMount(){
        axios.get(`http://kieroapi.net/collector`)
         .then(res => {
             console.log(res);
             this.setState({banks:res.data});
         })
    }
    render(){
        return(
            <ul>
                {this.state.banks.map(bank => <li>{bank.id}</li>)}
            </ul>
        )
    }
}

export default BankList; 