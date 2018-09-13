import React from 'react';
import SearchResultRedux from './result';
import {connect} from 'react-redux';
import mapStateToProps from '../../stateMapper';


class InputSearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            activate:true
        }
    }

    handleChange = (event) => {
        this.setState({value:event.target.value, activate:true});
    }

    displaySearch = (value)=>{
        this.setState({activate:false, value:value});
    }

    render() {
        const onChangeValue = this.props.onChangeValue;
        const searchValue = this.state.value;
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br />
            {this.state.activate && <SearchResultRedux value={searchValue} onChangeValue={onChangeValue} onActivate={this.displaySearch}/>}           
            </div>
            
        );   
    }
}


connect(mapStateToProps)(InputSearchContainer);
export default InputSearchContainer;
