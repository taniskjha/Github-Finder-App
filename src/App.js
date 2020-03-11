import React from 'react'

// improt Css 
import './App.css'

// importing Navbar
import NavBar from "./component/NavBar";

// importing useritem
import UserItem from "./component/UserItem";



class App extends React.Component {


    render() {
        return (
            <div className="App">
                <NavBar title="Github" icon="fab fa-github" />
                <UserItem />
            </div>
        )
    }
}

export default App;