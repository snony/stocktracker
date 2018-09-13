import React from 'react';
import Chart from './chart';
import News from './news';
import OverView from './overview';
import Peers from './peers';
import Stats from './stats';


class CompanyInfoContainer extends React.Component {
    render() {
        const symbol = this.props.symbol;
        return (
            <div>
                <Chart symbol={symbol}/>
                <News symbol={symbol}/>
                <Stats symbol={symbol}/>
                <OverView symbol={symbol}/>
                <Peers symbol={symbol} />
            </div>
        )
    }
}

export default CompanyInfoContainer;
