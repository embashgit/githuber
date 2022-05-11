import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import { Provider } from 'react-redux'
import store, { persistor } from './redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
