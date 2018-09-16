import React from 'react'
import { connect } from 'react-redux'
import InputSearchContainer from './components/search/form'
import './index.css'
import {
  ChartContainer,
  NewsContainer,
  OverViewContainer,
  Peers,
  StatsContainer
} from './components/company/index'
import { mapDispatchToProps } from './redux/index'

const ComponentTitle = ({ title }) => <h3>{title}</h3>

export class StockTracker extends React.Component {
  componentDidMount() {
    this.props.getCompanies()
  }

  render() {
    return (
      <div>
        <h1> The Amazing StockTracker App In React-Redux</h1>
        <InputSearchContainer />
        <ComponentTitle title="Historical Data" />
        <ChartContainer />
        <ComponentTitle title="News" />
        <NewsContainer />
        <ComponentTitle title="Overview" />
        <OverViewContainer />
        <ComponentTitle title="Peers" />
        <Peers />
        <ComponentTitle title="Key Stats" />
        <StatsContainer />
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StockTracker)
