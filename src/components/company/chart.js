import React from 'react';
import getStock from './../../api';

const initState = {
    display: 'closed',
    dataToDisplay:[]
}

class Chart extends React.Component {
    constructor(props){
        super(props);
        this.state = initState;
    }
    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.getChartData();
        }
    }

    getChartData = (toDisplay='close') => {
        const symbol = this.props.symbol;
        const path = "chart/ytd?filter=date," + toDisplay;
        getStock(symbol, path).then((chartData) => {
            this.setState({ dataToDisplay: JSON.stringify(chartData), display:toDisplay });
        });
    }

    setDataToDisplay= (toDisplay)=>{
        this.getChartData(toDisplay);
    }

    render() {
        const listData = this.state.dataToDisplay;
        return (

            <div>
                <h3>Historical Data Chart with Filters</h3>
                <button onClick={()=>{
                    this.setDataToDisplay('close')
                }}>Closed</button>
                <button onClick={()=>{
                    this.setDataToDisplay('open')
                }}>open</button>
                <button onClick={()=>{
                    this.setDataToDisplay('high')
                }}>High</button>
                <button onClick={()=>{
                    this.setDataToDisplay('low')
                }}>Low</button>
                <br/>
                {listData}
            </div>
        );   
    }
}

export default Chart;