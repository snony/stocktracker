import React from 'react';
import Chart from './chart';
import NewsContainer from './news';
import OverView from './overview';
import Peers from './peers';
import Stats from './stats';

//TODO DOUBLE CHECK IN CASE WE CANNOT FETCH THE DATA
class CompanyInfo extends React.Component {
    render() {
        const symbol = this.props.symbol;

        return (
            <div>
                <Chart symbol={symbol}/>
                <NewsContainer symbol={symbol}/>
                <Stats symbol={symbol}/>
                <OverView symbol={symbol}/>
                <Peers symbol={symbol} />
            </div>
        )
    }
}

export default CompanyInfo;