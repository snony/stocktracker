import React from 'react';
import { getNews } from './../../api'

class NewsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    getNewsData = () => {
        const symbol = this.props.symbol;
        getNews(symbol).then(newsData => this.setState({ news: newsData }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getNewsData();
        }
    }

    render() {
        const {news} = this.state;
        return news && news.length ? <News news={this.state.news}/> : <div>No Data</div>
    }
}


const News = ({news}) => (
    <div> 
        <h3>Latest News About Company</h3>
        {news.map((newsData, i) => {
            return (
                <div key={i}>
                    <h5><a href={newsData.url}>{newsData.headline}</a></h5>
                    {newsData.datetime}
                    <br />
                    {newsData.source}
                </div>
            );
        })}
    </div>
)

export default NewsContainer;
