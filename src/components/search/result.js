import React from 'react';
import { connect } from 'react-redux';
import {getCompanyInfo} from '../../api'

const mapDispatchToProps = dispatch => {
    return {
        onClick: company =>{ 
            getCompanyInfo(company.symbol).then(companyInfo =>
                {
                   
                    return dispatch({type:'GET_COMPANY', company, companyInfo});
                } 
            )
        }
    };
}


const Result = ({ company, onSelect }) => {

    const click = ()=>onSelect(company);

    return <li onClick={click}>{company.name} {company.symbol}</li>
}

class SearchResults extends React.Component {

    
    render() {
        const { results } = this.props;
        console.log(this.props);
        return (
            <ul>
                {results.map(company =>
                    <Result
                        key={company.symbol}
                        company={company} 
                        onSelect={this.props.onClick} />)}
            </ul>
        );
    }
}


export default connect(null, mapDispatchToProps)(SearchResults);