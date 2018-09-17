import React from 'react'
import { connect } from 'react-redux'
import InputSearchContainer from './components/search/form'
import './index.css'
import { ChartContainer, News, OverView, Peers, Stats } from './components/company/index'
import { mapDispatchToProps, mapStateToProps } from './redux/index'

const ComponentTitle = ({ title }) => <h3>{title}</h3>

export class StockTracker extends React.Component {
  componentDidMount() {
    this.props.getCompanies()
  }

  render() {
    const { news, overview, peers, keystats } = this.props.companyInfo
    return (
      <div>
        <h1> The Amazing StockTracker App In React-Redux</h1>
        <InputSearchContainer />
        <ComponentTitle title="Historical Data" />
        <ChartContainer />
        <ComponentTitle title="News" />
        <News news={news} />
        <ComponentTitle title="Overview" />
        <OverView overview={overview} />
        <ComponentTitle title="Peers" />
        <Peers peers={peers} />
        <ComponentTitle title="Key Stats" />
        <Stats keystats={keystats} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockTracker)
