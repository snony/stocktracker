import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';
import getStock from './../../api';

const initState = {
    typeFilter: 'close',
    dateFilter: 'ytd',
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

    getChartData = (typeFilter='close', dateFilter="ytd") => {
        const symbol = this.props.symbol;
        const path = `chart/${dateFilter}?filter=date,${typeFilter}`;
        getStock(symbol, path).then(chartData => {
            this.setState({
                typeFilter: typeFilter,
                dateFilter: dateFilter,
                history: chartData
            });
        });
    }

    render() {
        const state = this.state;
        const yAxisLabel = state.typeFilter.charAt(0).toUpperCase() + state.typeFilter.slice(1);
        const displayData = state.history.length === 0 ? (
            <div></div>
        ) : (
            <div>
                <button onClick={() => this.getChartData('close', state.dateFilter)}>
                    Close
                </button>
                <button onClick={() => this.getChartData('open', state.dateFilter)}>
                    Open
                </button>
                <button onClick={() => this.getChartData('high', state.dateFilter)}>
                    High
                </button>
                <button onClick={() => this.getChartData('low', state.dateFilter)}>
                    Low
                </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => this.getChartData(state.typeFilter, "ytd")}>
                    Year to Date
                </button>
                <button onClick={() => this.getChartData(state.typeFilter, "1d")}>
                    1D
                </button>
                <button onClick={() => this.getChartData(state.typeFilter, "1m")}>
                    1M
                </button>
                <button onClick={() => this.getChartData(state.typeFilter, "6m")}>
                    6M
                </button>
                <button onClick={() => this.getChartData(state.typeFilter, "1y")}>
                    1Y
                </button>
                <button onClick={() => this.getChartData(state.typeFilter, "5y")}>
                    5Y
                </button>
                <LineChart width={1000} height={600} data={state.history} style={{ margin: 5 }}>
                    <Line type="monotone" dataKey={state.typeFilter} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date">
                        <Label value="Date" dy={10} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey={state.typeFilter}>
                        <Label value={yAxisLabel} dx={10} position="insideLeft" angle={-90} />
                    </YAxis>
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