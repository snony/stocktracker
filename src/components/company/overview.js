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
        getStock(symbol, "company").then((res) => {
            this.setState({
                overview: res,
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getOverviewData();
        }
    }
    
    render() {
        let display = this.state.overview === "" ? (
            <div></div>
        ) : (
            <div>
                {this.state.overview.companyName} ({this.state.overview.symbol})
                <br />
                <a href={this.state.overview.website}>{this.state.overview.website}</a>
                <br />
                {this.state.overview.description}
            </div>
        );

        return (
            <div>
                <h3>Company Overview</h3>
                {display}
            </div>
        );   
    }
}

export default OverView;