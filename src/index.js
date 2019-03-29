/* eslint react/jsx-filename-extension: off */
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import registerServiceWorker from './helpers/registerServiceWorker'
import App from './components/App'

const target = document.querySelector('#root')

ReactDOM.render(<App />, target)

registerServiceWorker()
