import React from 'react';
import getStock from './../../api'

class OverView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overview: [],
        }
    }

    getOverviewData = () => {
        const symbol = this.props.symbol;
        getStock(symbol, "company").then((res) => {
            this.setState({
                overview: [res],
            })
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getOverviewData();
        }
    }
    
    render() {
        let display = this.state.overview.map((overview, i) => {
            return (
                <div key={i}>
                    {overview.companyName} ({overview.symbol})
                    <br />
                    <a href={overview.website}>{overview.website}</a>
                    <br />
                    {overview.description}
                </div>
            )
        })

        return (
            <div>
                <h3>Company Overview</h3>
                {display}
            </div>
        );   
    }
}

export default OverView;