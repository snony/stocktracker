import React from 'react';
import getStock from './../../api'



class Peers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            peers: [],
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getData();
        }
    }

    getData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "peers").then((peersList) => { this.setState({peers: peersList}) });
    }

    render() {
        return (
            <div>
                <h3>Top 5 Peers</h3>
                {this.state.peers}
            </div>
        );   
    }
}

export default Peers;