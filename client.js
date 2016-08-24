import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {observable, computed, reaction} from 'mobx'

import App from './components/App.jsx'
import IndexPage from './components/IndexPage.jsx'
import routes from './routes.js'
import todos from './todos.js'

window.todos = todos

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
)
