import React from 'react';
import getStock from './../../api'

class OverView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overview: [],
        }
    }

    getOverviewData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "company").then((res) => { this.setState({ overview: JSON.stringify(res) }) });
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getOverviewData();
        }
    }
    
    render() {
        return (
            <div>
                <h3>Company Overview</h3>
                {this.state.overview}    
            </div>
        );   
    }
}

export default OverView;