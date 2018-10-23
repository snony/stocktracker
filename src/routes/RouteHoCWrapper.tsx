import React from 'react'
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import styled from 'styled'
import { API, GlobalState } from 'types'

const BgColorWrapper = styled('div')(props => `
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
  background-image: ${props.theme.bg}
`
)

interface RouteProps {
  match: {
    params: {
      symbol: string
    }
  }
  isExact: boolean
  path: string
  url: string
  getInfo: (symbol: string) => void
}

type ThunkDispatchAction = ThunkDispatch<GlobalState, API, AnyAction>
type ThunkActionResult = ThunkAction<void, GlobalState, API, AnyAction>

const mapDispatchToProps = (getData: (symbol: string) => ThunkActionResult) => (dispatch: ThunkDispatchAction) => ({
  getInfo: (symbol: string) => dispatch(getData(symbol))
})

const HOC = (Component: React.ComponentClass, getData: (symbol: string) => ThunkActionResult) => {


  return connect(null, mapDispatchToProps(getData))(class extends React.Component<RouteProps> {

    public componentDidMount() {
      this.props.getInfo(this.props.match.params.symbol)
    }

    public render() {
      return <BgColorWrapper><Component /></BgColorWrapper>
    }
  })
}

export default HOC