import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import Application from './Application'
global.jQuery = require('jquery')
require('styles/bootstrap/css/bootstrap.min.css')
require('styles/bootstrap/js/bootstrap.min.js')
require('styles/font-awesome/css/font-awesome.min.css')
require('styles/bootstrap-select/boostrap-select.css')
require('styles/bootstrap-select/boostrap-select.js')
require('styles/google-fonts/Roboto/roboto.css')

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)
  ReactDOM.render(
    <Application store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
