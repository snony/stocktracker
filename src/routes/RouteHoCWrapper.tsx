import React from 'react'
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'search/searchContainer';
import styled from 'styled'
import { Company } from 'types';

const BgColorWrapper = styled('div')(props => `
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
  background-image: ${props.theme.bg}
`
)

interface RouterProps {
  match: {
    params: {
      symbol: string
    }
  }
  isExact: boolean
  path: string
  url: string
  getInfo: (company: Company) => void
}

const HOC = (Component: React.ComponentClass) => {
  return connect(null, mapDispatchToProps)(class extends React.PureComponent<RouterProps> {

    public componentDidMount() {
      this.props.getInfo({ symbol: this.props.match.params.symbol, name: '' })
    }

    public render() {
      return <BgColorWrapper><Component /></BgColorWrapper>
    }
  })
}

export default HOC