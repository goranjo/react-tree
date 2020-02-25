import React from 'react';
import './App.css';
import Tree from "./Tree";

const tree = [
    'home',
    {
        "account":
            [
                "log in",
                "settings"
            ]
    },
    {
        "settings":
            [
                "profile",
                "logout"
            ]
    }
]

function App() {
    return (
        <div className="App">
            <Tree items={tree}/>
        </div>
    );
}

export default App;
