import React from 'react';
import Chart from './chart';
import NewsContainer from './news';
import OverView from './overview';
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
            <Chart symbol={symbol}/>
            <News symbol={symbol}/>
            <Stats symbol={symbol}/>
            <OverView symbol={symbol}/>
            <Peers symbol={symbol} />
        </div>
    );
}

export default CompanyInfo;