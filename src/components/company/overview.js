import React from 'react';
import { getOverview } from './../../api'

class OverViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: "",
        }
    }

    getOverviewData = () => {
        const symbol = this.props.symbol;
        getOverview(symbol).then(overviewData => this.setState({ overview: overviewData }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getOverviewData();
        }
    }

    render() {
        const overview = this.state.overview;
        return (
            overview === "" ? null : <AboutCompany overview={overview} />
        );
    }
}

const AboutCompany = ({ overview }) => (
    <div>
        {overview.companyName} {overview.symbol}
        <br />
        <a href={overview.website}>{overview.website}</a>
        <br />
        {overview.description}
    </div>
)

export default OverViewContainer;