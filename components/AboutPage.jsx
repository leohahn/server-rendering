import React from 'react'
import {browserHistory} from 'react-router'

class AboutPage extends React.Component {
  redirectTo (path) {
    browserHistory.push(path)
  }

  render () {
    return (
      <div>
        <h2>A little more about me.</h2>
        <button onClick={() => this.redirectTo('/')}>
          Go back to the Index Page!
        </button>
      </div>
    )
  }
}

export default AboutPage
