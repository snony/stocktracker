import React from 'react';
import Chart from './chart';
import News from './news';
import OverView from './overview';
import Peers from './peers';
import Stats from './stats';


class CompanyInfo extends React.Component {
    render() {
        const symbol = this.props.symbol;
        //console.log(symbol);
        return (
            <div>
                <Chart symbol={symbol}/>
                <News symbol={symbol}/>
                <Stats />
                <OverView />
                <Peers symbol={symbol} />
            </div>
        )
    }
}

export default CompanyInfo;