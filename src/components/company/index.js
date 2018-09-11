import React from 'react';
import ReactDOM from 'react-dom';
import {Chart} from './components/company/chart';
import {News} from './components/company/news';
import {OverView} from './components/company/overview';
import {Peer} from './components/company/peer';
import {Stat} from './components/company/stat';



class CompanyInfo extends React.Component{

    render(){
        return (
            <div>
                <Chart />
                <News />
                <Stat />
                <OverView />
                <Peer />
            </div>
            
        )
    }
}

export default './index';