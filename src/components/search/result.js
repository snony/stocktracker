import React from 'react';

class CompanyResult extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        const company = this.props.company;
        const onClick = this.props.onClick;
        const onActivate = this.props.onActivate;
        return <li onClick={() => {
            onActivate(company.name + company.symbol);
           return onClick(company.symbol.toLowerCase())}
        }
        >{company.name}, {company.symbol}</li>
    }
}


class SearchResult extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            query:[]
        }
    }


    render(){
        const searchText = this.props.value;
        //searches the values
        const suggestedCompanies = this.props.onChangeValue(searchText);
        return (
            <div>
                <ul>
                    {suggestedCompanies.map((company,i) =><CompanyResult company={company} key={i} onClick={this.props.onClick} onActivate={this.props.onActivate}/>)}
                </ul>  
            </div>
        );
    }
}


export default SearchResult;