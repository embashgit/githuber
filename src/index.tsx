import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import { Provider } from 'react-redux'
import store from './redux'

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
