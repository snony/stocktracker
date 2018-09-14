import React from 'react';


class SearchResults extends  React.Component{
    
     render(){
        const {results, onClickSuggestedResult, onSelect} = this.props;
        return (
            <div>
                <ul>
                    {results.map((company) => <Result key={company.symbol} company={company} onClick={onClickSuggestedResult} onSelect={onSelect}/> )}
                </ul>  
            </div>
        );
    }
}

const Result = ({company, onSelect, onClick}) => (
    <li onClick={()=>{onSelect(`${company.name} ${company.symbol}`); onClick(company.symbol);}}
        >{company.name} {company.symbol}
    </li>
)


export default SearchResults;