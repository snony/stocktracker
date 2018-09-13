import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';
import getStock from './../../api';

const ChartTitle = () => (
    <h3>Historical Data Chart with Filters</h3>
)

const initState = {
    typeFilter: 'close',
    dateFilter: 'ytd',
    history: [],
}

class ChartContainer extends React.Component {
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
    

    renderTypeFilterButton = (labelsFilters=[['Close','close'], ['Open','open'], 
        ['High','high'],['Low','low']]) => (
        labelsFilters.map(([label, filter], i) => 
        <button key={i} onClick={() => this.getChartData(filter, this.state.dateFilter)}>
            {label}
        </button>
        )
    )

    renderDateFilterBtn = (labelsFilters=[['Year to Date', 'ytd'], ['1D','1d'], 
        ['1M','1m'], ['6M','6m'],
        ['1Y','1y'], ['5Y','5y']]) => (
        labelsFilters.map(([label, filter], i) => 
        <button key={i} onClick={() => this.getChartData(filter, this.state.typeFilter)}>
            {label}
        </button>
        )
    )
    
    render() {
        const state = this.state;
        const shouldDisplayData = state.history.length > 0;
        return (
            <div>
                <ChartTitle />
                {shouldDisplayData && this.renderTypeFilterButton() }
                {shouldDisplayData && <span>&nbsp;&nbsp;&nbsp;</span>}
                {shouldDisplayData && this.renderDateFilterBtn() }
                {shouldDisplayData && <DisplayChart state={state}/> }
            </div>
        );   
    }
}


const DisplayChart = ({state}) => {
    const yAxisLabel = state.typeFilter.charAt(0).toUpperCase() + state.typeFilter.slice(1);
    return (
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
)}


export default ChartContainer;