import React from 'react';
import getStock from './../../api'



class Peers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            peers: [],
        }
    }

    // componentDidMount() {
    //     this.getData();
    // }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getPeersData();
        }
    }

    getPeersData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "peers").then((res) => { this.setState({ peers:res }) });
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