import React from 'react';
import { getKeyStats } from './../../api'
import { isObjEmpty } from './../../helpers'

class StatsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyStats: {}
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol){
            this.getStatsData();
        }
    }

    getStatsData = () => {
        const symbol = this.props.symbol;
        getKeyStats(symbol).then(keyStats => this.setState({ keyStats: keyStats }))
    }

    render() {
        const { keyStats } = this.state;
        return (
            isObjEmpty(keyStats) ? null : <Stats stats={keyStats} />
        );   
    }
}

const Stats = ({ stats }) => (
    <div>
        <span>Previous Close: </span><span>{stats.previousClose}</span>
        <br/>
        <span>Day Range: </span><span>{stats.dayRange}</span>
        <br/>
        <span>Volume: </span><span>{stats.volume}</span>
        <br/>
        <span>Market Cap: </span><span>{stats.marketCap}</span>
        <br/>
        <span>P/E Ratio: </span><span>{stats.peRatio}</span>
        <br/>
        <span>Open: </span><span>{stats.open}</span>
        <br/>
        <span>52 Week Range: </span><span>{stats.weekRange52}</span>
        <br/>
        <span>Total Avg. Volume: </span><span>{stats.avgTotalVolume}</span>
        <br/>
        <span>Earnings Per Share: </span><span>{stats.earningsPerShare}</span>
        <br/>
        <span>Dividend  Yield: </span><span>{stats.dividendYield}</span>
        <br/>
    </div>
);

export default StatsContainer;