import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfoContainerRedux from './components/company';
//TODO 13/09 ML change name on this one
import Foo from './components/search/form';
import {getRefData} from './api';
import { Provider } from "react-redux";
import store from './store';
import './index.css';


const initialState = {
    symbolNameDB: [],
}



class StockTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        getRefData().then((symbolsDB) => {
            this.setState({symbolNameDB:symbolsDB});
        }
        );
    }

    querySymbolDB = (text)=>{
        if(text === ""){
            return [];
        }
        //TODO 13/09 ML: search for algorithm associated to searching through db
        const companyByNameOrSymbol = this.state.symbolNameDB.filter((obj) => 
            obj.name.toLowerCase().includes(text.toLowerCase()) || obj.symbol.toLowerCase().includes(text.toLowerCase())
        );
        return companyByNameOrSymbol.length > 10?  companyByNameOrSymbol.slice(0,9): companyByNameOrSymbol;
    }

    render() {
        return (
            <div>
                <h1>The Amazing StockTracker App In React-Redux ;-)</h1>
                <Foo onChangeValue = {(text) => this.querySymbolDB(text)}/>
                <CompanyInfoContainerRedux />
            </div>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <StockTracker />
    </Provider>,
    document.getElementById('root')
);

