import React from 'react'
import {browserHistory} from 'react-router'
import {observer} from 'mobx-react'
import todos from '../todos.js'
import uuid from 'node-uuid'

@observer
class IndexPage extends React.Component {
  redirectTo (path) {
    browserHistory.push(path)
  }

  render () {
    return (
      <div>
        <h2>My TODO's</h2>
        <ul>
          {todos.itemsUpper.map((item) => (
            <li key={uuid.v4()}>{item}</li>
          ))}
        </ul>
        <button onClick={() => this.redirectTo('/about')}>
          Go to About Page!
        </button>
      </div>
    )
  }
}

export default IndexPage
