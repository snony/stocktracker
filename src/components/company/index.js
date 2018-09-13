import React from 'react';
import Chart from './chart';
import News from './news';
import OverView from './overview';
import Peers from './peers';
import Stats from './stats';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {symbol: state.symbol};
}

class CompanyInfoContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const symbol = this.props.symbol;
        console.log("Hellow");
        console.log(symbol);
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

//TODO 13/09 ML change name
const CompanyInfoContainerRedux = connect(mapStateToProps)(CompanyInfoContainer);
export default CompanyInfoContainerRedux;
