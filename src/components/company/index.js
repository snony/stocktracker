import React from 'react';
import Chart from './chart';
import News from './news';
import OverView from './overview';
import Peers from './peers';
import Stats from './stats';


class CompanyInfo extends React.Component{

    render(){
        return (
            <div>
                <Chart />
                <News />
                <Stats />
                <OverView />
                <Peers />
            </div>
        )
    }
}

export default CompanyInfo;