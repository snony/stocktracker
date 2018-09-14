import React from 'react';
import SearchResults from './result';
import { getRefData } from '../../api';
import QueryDB from './queryDB';


class InputSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestedCompanies: [],
            companies: [],
            selectedCompany:null
        }
    }

    componentDidMount() {
        getRefData().then(companies => this.setState({ companies: companies }))
    }

    handleInputChange = ({target:{value}}) => {
        const suggestedCompanies = !!value ? QueryDB(value, this.state.companies) : [];
        this.setState({ value, suggestedCompanies, selectedCompany:null });        
    }

    onCompanySelected = (company) => {
        this.setState({selectedCompany:company, suggestedCompanies:[]});
        this.props.onClickSuggestedResult(company.symbol);
    }

    render() {
        const searchValue = this.state.value;
        const selectedCompany = this.state.selectedCompany;
        return (
            <div>
               {selectedCompany !== null && <input type="text" value={selectedCompany.name + ' ' + selectedCompany.symbol } onChange={this.handleInputChange} />}
               {selectedCompany === null && <input type="text" value={searchValue} onChange={this.handleInputChange} />}
                <br />
                <SearchResults results={this.state.suggestedCompanies} onSelect={this.onCompanySelected} />
            </div>

        );
    }
}

export default InputSearchContainer;