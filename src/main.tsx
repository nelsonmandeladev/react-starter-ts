import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import './index.css'
import "../src/styles/styles.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route
                path="/*"
                element={<App />}
              />
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
