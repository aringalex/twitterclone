import React from "react"
import './styles/App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import RouteSwitch from "./components/Router/Router"
import Header from "./components/Header/Header"

const App = () => (
    <Router>
            <div className="App">
                <Header/>
                <RouteSwitch/>
            </div>
    </Router>
)

export default App;
