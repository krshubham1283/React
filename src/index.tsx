import * as React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css'
import {Provider} from './context/book'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider>
    <App/>
  </Provider>
)
