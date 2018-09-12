import React from 'react';
import getStock from './../../api'

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
        }
    }

    getNewsData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "news/last/5").then((res) => { this.setState({ news: JSON.stringify(res) }) });
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getNewsData();
        }
    }

    render() {
        return (
            <div>
                <h3>Latest News About Company</h3>
                {this.state.news}    
            </div>
        );   
    }
}

export default News;