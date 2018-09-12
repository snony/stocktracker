import React from 'react';
import getStock from './../../api';

const initState = {
    display: 'closed',
    closed:[],
    open: [],
    high: [],
    low:[]
}

class Chart extends React.Component {
    constructor(props){
        super(props);
        this.state = initState;
    }
    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getChartData();
        }
    }

    getChartData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "chart/ytd?filter=date,close").then((chartData) => {
            this.setState({ closed: JSON.stringify(chartData) });
        });
    }
    render() {
        const listData = this.state.closed;
        //console.log(listData);
        return (

            <div><h3>Historical Data Chart with Filters</h3>
                {listData}
            </div>
        );   
    }
}

export default Chart;