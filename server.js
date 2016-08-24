import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'

import App from './components/App.jsx'
import IndexPage from './components/IndexPage.jsx'
import routes from './routes.js'

// Instantiate application.
const server = express()
// Server static files on `public` directory.
server.use(express.static('public'))
// Set the view engine to ejs.
server.set('view engine', 'ejs')
// Catches all url GET requests. The routing happens with the
// imported 'match' function and the 'routes' configuration.
server.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // If nothing wrong happened, renders the the component that is returned
      // from RouterContext. The rendered component is passed to the template,
      // which is in turn rendered itself and sent to the client.
      const markup = renderToString(<RouterContext {...renderProps} />)
      res.render('index', { markup })
    } else {
      res.sendStatus(404)
    }
  })
})

server.listen(3000, function () {
  console.log(`Server running on: localhost:3000`)
})
