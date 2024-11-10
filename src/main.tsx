import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Wrap your app in BrowserRouter for routing */}
        <AppRouter /> {/* Use AppRouter as the main component */}
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
