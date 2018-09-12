import React from 'react';
import getStock from './../../api'


const displayStats = (statsjSON) => {
    return (
        <div>
            <span>Previous Close: </span><span>{statsjSON['previousClose']}</span>
            <br/>
            <span>Day Range: </span><span>{statsjSON['dayRange']}</span>
            <br/>
            <span>Volume: </span><span>{statsjSON['volume']}</span>
            <br/>
            <span>Market Cap: </span><span>{statsjSON['marketCap']}</span>
            <br/>
            <span>P/E Ratio: </span><span>{statsjSON['peRatio']}</span>
            <br/>
            <span>Open </span><span>{statsjSON['open']}</span>
            <br/>
            <span>52 Week Range </span><span>{statsjSON['weekRange52']}</span>
            <br/>
            <span>Total Avg. Volume </span><span>{statsjSON['ttlAvgVolume']}</span>
            <br/>
            <span>Earnings Per Share </span><span>{statsjSON['earningsPerShare']}</span>
            <br/>
            <span>Dividend  Yield: </span><span>{statsjSON['dividendYield']}</span>
            <br/>
        </div>
    );
}

const initState = {
    earningsPerShare: 0,
    dividendYield: 0,
    previousClose:0,
    open:0,
    close: 0,
    dayRange:0,
    volume:0,
    ttlAvgVolume:0,
    peRatio:0,
    marketCap:0,
    weekRange52:0 
};



class Stats extends React.Component {
    constructor(props){
        super(props)
        this.state = initState;
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol){
            this.getStatsData();
        }
    }

    getStatsData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "stats").then((stats) => { 
            getStock(symbol, "previous").then((previousClose)=> {
                getStock(symbol, "ohlc").then((ohlc)=> {
                    getStock(symbol, "quote").then((quote)=> {
                        const keyStats = {
                            earningsPerShare: stats['latestEPS'],
                            dividendYield: stats['dividendYield'],
                            previousClose: previousClose['close'],
                            open: ohlc['open']['price'],
                            close:ohlc['close']['price'] ,
                            dayRange:ohlc['high'] - ohlc['low'],
                            volume:quote['latestVolume'],
                            ttlAvgVolume: quote['avgTotalVolume'],
                            peRatio: quote['peRatio'],
                            marketCap: quote['marketCap'],
                            weekRange52: quote['week52High'] - quote['week52Low']
                        };
                        this.setState(keyStats);
                    });
                });
            });
        });
    }

    render() {
        const stats = this.state;
        return (
            <div>
                <h3>Key Stats</h3>
                {displayStats(stats)}
            </div>
        );   
    }
}

export default Stats;