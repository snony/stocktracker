import React from 'react';
//import addCompanySymbol from '../../actions/index';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        onClick: symbol => dispatch({type:'GET_COMPANY', symbol:symbol})
    };
}


class SearchResultContainer extends  React.Component{
    constructor(props){
        super(props);
        
    }

    onClick = (companySymbol)=>{
        console.log(companySymbol);
        this.props.onClick(companySymbol);
    }

    render(){
        const searchText = this.props.value;
        const suggestedCompanies = this.props.onChangeValue(searchText);
        const {onActivate} = this.props;
        return (
            <div>
                <ul>
                    <DisplaySearchResult suggestedCompanies={suggestedCompanies} onClick={this.onClick} onActivate={onActivate}/>
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

//TODO 13/09 ML change name on this one
const SearchResultRedux = connect(null, mapDispatchToProps)(SearchResultContainer);

export default SearchResultRedux;