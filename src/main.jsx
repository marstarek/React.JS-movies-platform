import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "swiper/css/bundle";
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
