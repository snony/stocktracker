import React from 'react';
import ChartContainer from './chart';
import NewsContainer from './news';
import OverViewContainer from './overview';
import Peers from './peers';
import Stats from './stats';

/**
* TODO DOUBLE CHECK IN CASE WE CANNOT FETCH THE DATA
* 11/09/2018
* ML, TL
*/

const CompanyInfo = props => {
    const symbol = props.symbol;

    return (
        <div>
            <ChartContainer symbol={symbol}/>
            <NewsContainer symbol={symbol}/>
            <Stats symbol={symbol}/>
            <OverViewContainer symbol={symbol}/>
            <Peers symbol={symbol} />
        </div>
    );
}

export default CompanyInfo;