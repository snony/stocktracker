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
        getStock(symbol, "news/last/5").then(newsData => this.setState({ news: newsData }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getNewsData();
        }
    }

    render() {
        const displayData = this.state.news.map((newsData, i) => {
            return (
                <div key={i}>
                    <h5><a href={newsData.url}>{newsData.headline}</a></h5>
                    {newsData.datetime}
                    <br />
                    {newsData.source}
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