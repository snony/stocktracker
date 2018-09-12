import React from 'react';
import getStock from './../../api'

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    getNewsData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "news/last/5").then((res) => {
            this.setState({ news: res }) 
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getNewsData();
        }
    }

    render() {
        let displayData = this.state.news.map((article, i) => {
            return (
                <div key={i}>
                    <h5><a href={article.url}>{article.headline}</a></h5>
                    {article.datetime}
                    <br />
                    {article.source}
                </div>
            );
        });

        return (
            <div>
                <h3>Latest News About Company</h3>
                {displayData}
            </div>
        );   
    }
}

export default News;