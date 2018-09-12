import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';
import getStock from './../../api';

const initState = {
    display: 'close',
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
        const yLabel = state.display.charAt(0).toUpperCase() + state.display.slice(1);
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
                <LineChart width={1000} height={600} data={state.history} style={{ margin: 5 }}>
                    <Line type="monotone" dataKey={state.display} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date">
                        <Label value="Date" dy={10} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey={state.display}>
                        <Label value={yLabel} dx={10} position="insideLeft" angle={-90} />
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