import React from 'react';
import {getRefData} from '../../api';
import QueryDB from './queryDB';

class SearchResultContainer extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            symbolNameDB:"",
            suggestedCompanies:[]
        }
    }

    componentDidMount(){
        getRefData().then((symbolsDB) => {
            this.setState({symbolNameDB:symbolsDB});
        }
        );
    }

    componentDidUpdate(prevProps) {
        const currentSearchValue = this.props.inputValue;
        const prevSearchValue = prevProps.inputValue;
        if (currentSearchValue !== prevSearchValue && this.state.symbolNameDB !== '') {
            
            this.setState({suggestedCompanies:QueryDB(currentSearchValue, this.state.symbolNameDB)});
        }
    }
    

    render(){
        const suggestedCompanies = this.state.suggestedCompanies;
        const {onClickSuggestedResult, shouldRenderResult} = this.props;
        return (
            <div>
                <ul>
                    <DisplaySearchResult suggestedCompanies={suggestedCompanies} onClick={onClickSuggestedResult} shouldRenderResult={shouldRenderResult}/>
                </ul>  
            </div>
        );
    }
}


const DisplaySearchResult = ({suggestedCompanies, onClick, shouldRenderResult }) => (
    <ul>
        {suggestedCompanies.map((company) => <li key={company.symbol} 
            onClick={()=>{
                shouldRenderResult(`${company.name} ${company.symbol}`)
                onClick(company.symbol.toLowerCase())
            }}> {company.name}, {company.symbol} 
            </li>
        )}
    </ul>
)

export default SearchResultContainer;