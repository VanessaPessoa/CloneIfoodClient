import GlobalStyle from './styles/global';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import Route from './routes/Routes'
import store, {persistor} from './store'
// import history from './services/history'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BrowserRouter>
          <GlobalStyle />
          <Route/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
   
  )
}

export default App;
