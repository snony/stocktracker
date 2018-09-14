import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../stateMapper';
import SearchResults from './result';
import { getRefData } from '../../api';
import QueryDB from './queryDB';


class InputSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestedCompanies: [],
            companies: [],//TODO 14/09 ML move this to Redux and should be passed as a prop
            //selectedCompany:null//TODO move this to REDUX
        }
    }

    //TODO 14/09 ML remove this one as well now
    componentDidMount() {
        getRefData().then(companies => this.setState({ companies: companies }))
    }

    handleInputChange = ({target:{value}}) => {
        //TODO get this from the prop
        const suggestedCompanies = !!value ? QueryDB(value, this.state.companies) : [];
        this.setState({ value, suggestedCompanies, selectedCompany:null });        
    }

    onCompanySelected = (company) => {
        this.setState({selectedCompany:company, suggestedCompanies:[]});
        
    }

    render() {
        const searchValue = this.state.value;
        const selectedCompany = this.props.company;
        return (
            <div>
               {selectedCompany !== null && <input type="text" value={selectedCompany.name + ' ' + selectedCompany.symbol } onChange={this.handleInputChange} />}
               {selectedCompany === null && <input type="text" value={searchValue} onChange={this.handleInputChange} />}
                <br />
                <SearchResults results={this.state.suggestedCompanies} />
            </div>

        );
    }
}


export default connect(mapStateToProps)(InputSearchContainer);
