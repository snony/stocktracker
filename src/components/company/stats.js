import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../stateMapper';


const Stats = ({ companyInfo:{keystats} }) => {
    return (
    <div>
        <span>Previous Close: </span><span>{keystats.previousClose}</span>
        <br/>
        <span>Day Range: </span><span>{keystats.dayRange}</span>
        <br/>
        <span>Volume: </span><span>{keystats.volume}</span>
        <br/>
        <span>Market Cap: </span><span>{keystats.marketCap}</span>
        <br/>
        <span>P/E Ratio: </span><span>{keystats.peRatio}</span>
        <br/>
        <span>Open: </span><span>{keystats.open}</span>
        <br/>
        <span>52 Week Range: </span><span>{keystats.weekRange52}</span>
        <br/>
        <span>Total Avg. Volume: </span><span>{keystats.avgTotalVolume}</span>
        <br/>
        <span>Earnings Per Share: </span><span>{keystats.earningsPerShare}</span>
        <br/>
        <span>Dividend  Yield: </span><span>{keystats.dividendYield}</span>
        <br/>
    </div>
)};


export default connect(mapStateToProps)(Stats);