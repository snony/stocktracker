import React from 'react';

class CompanyResult extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            symbol: ''
        }
    }

    render(){
        const company = this.props.company;
        const onClick = this.props.onClick;
        return <li onClick={() => onClick(company.symbol.toLowerCase())}>{company.name}, {company.symbol}</li>
    }
}


class SearchResult extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            query:[]
        }
    }

    searchCompany = ()=>{

    }


    render(){
        const searchText = this.props.value;
        const suggestedCompanies = this.props.onChangeValue(searchText);
        return (
            <div>
                <ul>
                    {suggestedCompanies.map((company,i) =><CompanyResult company={company} key={i} onClick={this.props.onClick}/>)}
                </ul>  
            </div>
        );
    }
}


export default SearchResult;