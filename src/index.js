import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfo from './components/company';
import Form from './components/search/form';
import getStock from './api';
import './index.css';


class Search extends React.Component {
    constructor(props){
        super(props);

    }
    
    render() {
        let input;
        return (
            <div>
                <input type="text" ref={node => {
                 input = node;
             }}/>
                <button onClick={() =>{
                    this.props.onClick(input.value)
                }}>Search</button>
            </div>
        );   
    }
}


class Company extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        const props = this.props;
        return (
            <div>For the Company Info
                <CompanyInfo {...props}/>
            </div>
        );   
    }
}

const initialState = {
    search: 'Apple Inc (aapl)',
    companyName: 'Apple Inc',
    symbol: 'aapl'
}
/**
 * TODO add the Filter buttons
 * 
 */
class StockTracker extends React.Component {
    constructor(props){
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div>The Amazing StockTracker App In React-Redux ;-)
                <Search onClick={text =>this.setState({
                    symbol: text
                })}/>
                <Company {...this.state}/>
            </div>
        );
    }
}

ReactDOM.render(
    <StockTracker />,
    document.getElementById('root')
);

