import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:""
        }
    }

    render() {
        const onClick = this.props.onClick;
        
        return (
            <div>
                <input type="text" ref={node => {
                 this.input = node;
             }}/>
                <button>Search</button>
            </div>
            
        );   
    }
}

export default Form;