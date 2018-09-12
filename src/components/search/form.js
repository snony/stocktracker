import React from 'react';
import SearchResult from './result';

class Form extends React.Component {
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
        const onClick = this.props.onClick;
        const searchValue = this.state.value;
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br />
            {this.state.activate && <SearchResult onClick={onClick} value={searchValue} onChangeValue={this.props.onChangeValue} onActivate={this.displaySearch}/>}
            {this.state.activate || <SearchResult onClick={onClick} value={searchValue} onChangeValue={this.props.onChangeValue} onActivate={this.displaySearch}/>}               
            </div>
            
        );   
    }
}

export default Form;