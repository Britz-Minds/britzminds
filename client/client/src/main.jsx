import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
//import {Toaster} from 'components/ui/sonner'
import { appStore } from './app/store'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
      <Toaster/>
    </Provider>
  </StrictMode>,
)
