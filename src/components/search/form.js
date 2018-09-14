import React from 'react';
import SearchResults from './result';
import {getRefData} from '../../api';
import QueryDB from './queryDB';


class InputSearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            shouldRenderResults: true,
            suggestedCompanies: [],
            symbolNameDB:''
        }
    }

    componentDidMount(){
        getRefData().then((symbolsDB) => {
            this.setState({symbolNameDB:symbolsDB});
        }
        );
    }

    handleInputChange = (event) => {
        
        if(this.state.symbolNameDB !== "" && event.target.value !==""){
            const suggestedCompanies = QueryDB(this.state.value, this.state.symbolNameDB);
            this.setState({value:event.target.value, suggestedCompanies});
        }else{
            this.setState({value:event.target.value, suggestedCompanies:[]});
        }

    }

    setInputSearchValue = (searchValue)=>{
        this.setState({value:searchValue,suggestedCompanies:[]});
    }


    
    render() {
        const {onClickSuggestedResult} = this.props;
        const searchValue = this.state.value;
        return (
            <div>
                <input type="text" value={searchValue} onChange={this.handleInputChange} />
                    <br />
                <SearchResults results={this.state.suggestedCompanies} onClickSuggestedResult={onClickSuggestedResult} onSelect={this.setInputSearchValue}/>           
            </div>
            
        );   
    }
}

export default InputSearchContainer;