import './App.css'

import {FaEgg, FaGift, FaGithub, FaLandmark, FaLinkedin, FaTwitter} from "react-icons/fa"

function App() {
    return (
        <div className="App">
            <div>
                <img src="/head.jpg"
                     className="logo"
                     alt="Jop Zitman's Head"
                     style={{borderRadius: "100%"}}
                />
            </div>
            <h1>Jop Zitman</h1>
            <div className="card">
                <p>
                    HackOps Engineer at
                    <a href="https://hadrian.io" target="_blank">
                        <img src="/hadrian.png" style={{marginLeft: "0.4rem", marginBottom: "0.35rem", height: "1rem", verticalAlign: "bottom"}}/>
                    </a>
                </p>
            </div>
            <div className="card" style={{marginTop: "1rem"}}>
                <a href="https://linkedin.com/in/jop-zitman" target="_blank">
                    <FaLinkedin style={{padding: "0.5rem", fontSize: "2rem"}}/>
                </a>
                <a href="https://github.com/EndPositive" target="_blank">
                    <FaGithub style={{padding: "0.5rem", fontSize: "2rem"}}/>
                </a>
                <a href="https://twitter.com/jopzitman" target="_blank">
                    <FaTwitter style={{padding: "0.5rem", fontSize: "2rem"}}/>
                </a>
            </div>
        </div>
    )
}

export default App
