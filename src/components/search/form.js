import React from 'react';
import SearchResult from './result';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    handleChange = (event) => {
        this.setState({value:event.target.value});
        //this.props.

    }


    render() {
        const onClick = this.props.onClick;
        const searchValue = this.state.value;
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <br />
                <SearchResult onClick={onClick} value={searchValue} onChangeValue={this.props.onReceive}/>                
            </div>
            
        );   
    }
}

export default Form;