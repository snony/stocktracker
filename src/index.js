import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfo from './components/company';
import './index.css';

const Search = props => (
    <div>
        <input type="text" onChange={props.handleChange}/>
        <button onClick={props.onClick}>
            Search
        </button>
    </div>
);

const Company = props => (
    <div>
        <h2>Company Information</h2>
        <CompanyInfo {...props}/>
    </div>
);

const initialState = {
    search: 'Apple Inc (aapl)',
    companyName: 'Apple Inc',
    symbol: 'aapl'
}
/**
 * TODO add the Filter buttons
 * 11/09/2018
 * ML
 */
class StockTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = (event) => {this.setState({search: event.target.value});}

    onClick = () => {this.setState({symbol: this.state.search});}

    render() {
        return (
            <div>
                <h1>The Amazing StockTracker App In React-Redux ;-)</h1>
                <Search 
                    handleChange={this.handleChange}
                    onClick={this.onClick}
                />
                <Company {...this.state} />
            </div>
        );
    }
}

ReactDOM.render(
    <StockTracker />,
    document.getElementById('root')
);

