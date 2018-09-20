import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import StockTracker from './stockTracker'

import 'ress'
import './index.css'
import './colours.css'

library.add(faSearch)

ReactDOM.render(<StockTracker />, document.getElementById('root'))
