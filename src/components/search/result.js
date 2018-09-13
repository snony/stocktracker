import React from 'react';

class SearchResultContainer extends  React.Component{
    constructor(props){
        super(props);
        
    }


    render(){
        const searchText = this.props.value;
        const suggestedCompanies = this.props.onChangeValue(searchText);
        const {onClick, onActivate} = this.props;
        return (
            <div>
                <ul>
                    <DisplaySearchResult suggestedCompanies={suggestedCompanies} onClick={onClick} onActivate={onActivate}/>
                </ul>  
            </div>
        );
    }
}


const DisplaySearchResult = ({suggestedCompanies, onClick, onActivate }) => (
    <ul>
        {suggestedCompanies.map((company,i) => <li key={i} 
            onClick={()=>{
                onActivate(`${company.name} ${company.symbol}`)
                onClick(company.symbol.toLowerCase())
            }}> {company.name}, {company.symbol} 
            </li>
        )}
    </ul>
)

export default SearchResultContainer;