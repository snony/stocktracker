import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import getStock from './../../api';

const initState = {
    display: 'closed',
    history: [],
}

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getChartData();
        }
    }

    getChartData = (toDisplay='close') => {
        const symbol = this.props.symbol;
        const path = `chart/ytd?filter=date,${toDisplay}`;
        getStock(symbol, path).then(chartData => {
            this.setState({
                display: toDisplay,
                history: chartData
            });
        });
    }

    setDataToDisplay= toDisplay => this.getChartData(toDisplay);

    render() {
        const state = this.state; 
        const displayData = state.history.length === 0 ? (
            <div></div>
        ) : (
            <div>
                <button onClick={() => this.setDataToDisplay('close')}>
                    Close
                </button>
                <button onClick={() => this.setDataToDisplay('open')}>
                    Open
                </button>
                <button onClick={() => this.setDataToDisplay('high')}>
                    High
                </button>
                <button onClick={() => this.setDataToDisplay('low')}>
                    Low
                </button>
                <LineChart width={1000} height={500} data={state.history} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey={state.display} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey={state.display} />
                    <Tooltip />
                </LineChart>
            </div>
        );

        return (
            <div>
                <h3>Historical Data Chart with Filters</h3>
                {displayData}
            </div>
        );   
    }
}

export default Chart;