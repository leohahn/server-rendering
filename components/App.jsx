import React from 'react'

const App = React.createClass({
  render () {
    return (
      <div>
        <h2>Welcome to react</h2>
        {this.props.children}
      </div>
    )
  }
})

export default App
