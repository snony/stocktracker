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
        getStock(symbol, "peers").then((res) => {
            this.setState({ peers: res })
        });
    }

    render() {
        let displayData = this.state.peers.join(", ");

        return (
            <div>
                <h3>Top Peers</h3>
                {displayData}
            </div>
        );   
    }
}

export default Peers;