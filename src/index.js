import React from 'react';
import ReactDOM from 'react-dom';
import CompanyInfo from './components/company';
import './index.css';


class Search extends React.Component {
    render() {
        let input;
        return (
            <div>
                <input 
                    type="text" 
                    ref={node => {
                        input = node;
                    }}
                />
                <button 
                    onClick={() => {
                        this.props.onClick(input.value)
                    }}
                >
                    Search
                </button>
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
    // search: 'Apple Inc (aapl)',
    // companyName: 'Apple Inc',
    symbol: ''
}
/**
 * TODO add the Filter buttons
 * 
 */
class StockTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div>
                <h1>The Amazing StockTracker App In React-Redux ;-)</h1>
                <Search 
                    onClick={text => this.setState({
                        symbol: text
                    })}
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

