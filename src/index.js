import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfo from './components/company';
import InputSearchContainer from './components/search/form';
import {getRefData} from './api';
import './index.css';


const initialState = {
    symbol: '',
    searchKey: '',
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

    searchDB = (text)=>{
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
                <InputSearchContainer 
                    onClick={(symbol) => this.setState({
                        symbol
                    })}
                onChangeValue = {(text) => this.searchDB(text)}/>
                <CompanyInfo symbol={this.state.symbol} />
            </div>
        );
    }
}

ReactDOM.render(
    <StockTracker />,
    document.getElementById('root')
);

