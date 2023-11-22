import React from 'react'
import logo from '../../Logo.png'
import './Home.css'
const Home = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Please Kindly read instructions.txt
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>

        </header>
    )
}

export default Home