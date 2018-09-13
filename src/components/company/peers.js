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
            this.getPeersData();
        }
    }

    getPeersData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "peers").then(peersData => this.setState({ peers: peersData }));
    }

    render() {
        const peersData = this.state.peers.join(", ");

        return (
            <div>
                <h3>Top Peers</h3>
                {peersData}
            </div>
        );   
    }
}

export default Peers;