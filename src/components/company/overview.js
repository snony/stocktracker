import React from 'react';
import getStock from './../../api'

class OverView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overview: "",
        }
    }

    getOverviewData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "company").then(overviewData => this.setState({ overview: overviewData }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getOverviewData();
        }
    }
    
    render() {
        const overview = this.state.overview;
        const displayData = overview === "" ? (
            <div></div>
        ) : (
            <div>
                {overview.companyName} ({overview.symbol})
                <br />
                <a href={overview.website}>{overview.website}</a>
                <br />
                {overview.description}
            </div>
        );

        return (
            <div>
                <h3>Company Overview</h3>
                {displayData}
            </div>
        );   
    }
}

export default OverView;