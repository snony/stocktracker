import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfo from './components/company';
import Form from './components/search/form';
import {getRefData} from './api';
import './index.css';


class Search extends React.Component {
    render() {
        return (
            <div>
                <Form onClick={this.props.onClick} onReceive={this.props.onChangeValue}/>
            </div>
        );   
    }
}


class Company extends React.Component {  
    render() {
        const props = this.props;
        return (
            <div>
                <h2>Company Information</h2>
                <CompanyInfo {...props}/>
            </div>
        );   
    }
}

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
        const companyByNameOrSymbol = this.state.symbolNameDB.filter((obj) => obj.name.toLowerCase().includes(text.toLowerCase()) || obj.symbol.toLowerCase().includes(text.toLowerCase()));
        return companyByNameOrSymbol.length > 10?  companyByNameOrSymbol.slice(0,9): companyByNameOrSymbol;
    }

    render() {
        return (
            <div>
                <h1>The Amazing StockTracker App In React-Redux ;-)</h1>
                <Search 
                    onClick={(symbol) => this.setState({
                        symbol: symbol//compnayObj.symbol.toLowerCase()
                    })}
                onChangeValue = {(text) =>{
                    return this.searchDB(text)
                }}/>
                <Company symbol={this.state.symbol} />
            </div>
        );
    }
}

ReactDOM.render(
    <StockTracker />,
    document.getElementById('root')
);

