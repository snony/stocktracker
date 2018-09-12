import React from 'react';
import getStock from './../../api'


const displayStats = (statsjSON) => {
    return (
        <div>
            <span>Previous Close: </span><span>{statsjSON['previous_close']}</span>
            <br/>
            <span>Day Range: </span><span>{statsjSON['day_range']}</span>
            <br/>
            <span>Volume: </span><span>{statsjSON['volume']}</span>
            <br/>
            <span>Market Cap: </span><span>{statsjSON['market_cap']}</span>
            <br/>
            <span>P/E Ratio: </span><span>{statsjSON['pe_ratio']}</span>
            <br/>
            <span>Open </span><span>{statsjSON['open']}</span>
            <br/>
            <span>52 Week Range </span><span>{statsjSON['week_range_52']}</span>
            <br/>
            <span>Total Avg. Volume </span><span>{statsjSON['ttl_Avg_volume']}</span>
            <br/>
            <span>Earnings Per Share </span><span>{statsjSON['earning_per_share']}</span>
            <br/>
            <span>Dividend  Yield: </span><span>{statsjSON['dividend_yield']}</span>
            <br/>
        </div>
        
    )
}

const initState = {
    earning_per_share: 0,
    dividend_yield: 0,
    previous_close:0,
    open:0,
    close: 0,
    day_range:0,
    volume:0,
    ttl_Avg_volume:0,
    pe_ratio:0,
    market_cap:0,
    week_range_52:0 
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
        getStock(symbol, "stats").then((stats) =>{
            console.log(stats); 
            getStock(symbol, "previous").then((previous_close)=>{
                console.log(previous_close);
                getStock(symbol, "ohlc").then((ohlc)=>{
                    console.log("ohlc");
                    getStock(symbol, "quote").then((quote)=>{
                        const keyStats = {
                            earning_per_share: stats['latestEPS'],
                            dividend_yield: stats['dividendYield'],
                            previous_close: previous_close['close'],
                            open: ohlc['open']['price'],
                            close:ohlc['close']['price'] ,
                            day_range:ohlc['high'] - ohlc['low'],
                            volume:quote['latestVolume'],
                            ttl_Avg_volume: quote['avgTotalVolume'],
                            pe_ratio: quote['peRatio'],
                            market_cap: quote['marketCap'],
                            week_range_52: quote['week52High'] - quote['week52Low']
                        };
                        this.setState(keyStats);
                    })
                })  
            })
        });
    }

    render() {
        const stats = this.state;
        console.log(stats);
        return (
            <div><h3>Key Stats</h3>
                {displayStats(stats)}
            </div>
        );   
    }
}

export default Stats;