import React from 'react';
import SearchResultContainer from './result';

class InputSearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            shouldRenderResults:true
        }
    }


    handleInputChange = (event) => {
        this.setState({value:event.target.value, shouldRenderResults:true});
    }

    shouldDismissResults = (value)=>{
        this.setState({shouldRenderResults:false ,value:value});
    }

    render() {
        const {onClickSuggestedResult} = this.props;
        const searchValue = this.state.value;
        return (
            <div>
                <input type="text" value={searchValue} onChange={this.handleInputChange} />
                <br />
            {this.state.shouldRenderResults && <SearchResultContainer onClickSuggestedResult={onClickSuggestedResult} inputValue={searchValue} shouldRenderResult={this.shouldDismissResults}/>}           
            </div>
            
        );   
    }
}

export default InputSearchContainer;