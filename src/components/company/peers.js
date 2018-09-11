import React from 'react';
import getStock from './../../api'



class Peers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            peers: [],
        }
        this.getData();
    }

    getData = ()=>{
        const symbol = this.props.symbol;
        getStock(symbol, "peers").then((res)=>{ this.setState({peers:res})});
    }

    render() {
        const symbol = this.props.symbol;
        
        //const results = this.state.peers;
        console.log(symbol);
        return (
            <div>For the top 5  {this.state.peers} </div>
        );   
    }
}

export default Peers;