import React from 'react'

// importing axios
import axios from 'axios'
// improt Css 
import './App.css'

// importing Navbar
import NavBar from "./component/NavBar";

// importing useritem
import UserItem from "./component/UserItem";

// import users
import User from "./component/User"
import Search from './component/search';




class App extends React.Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const res = await axios.get('https://api.github.com/users?client_id=fb30c0da6ae5a62bdd53&client_secret=7ec01d53c703ffb557f8ad984e2e65a4c16d76e0')
        this.setState({ users: res.data, loading: false })
    }

    searchUsers = (text) => {
        console.log(text)
    }
    render() {
        return (
            <div className="App">
                <NavBar title="Github" icon="fab fa-github" />

                <div className="container" >
                    <Search searchUsers={this.searchUsers} />
                    <User users={this.state.users} loading={this.state.spinner} />
                </div>


            </div>
        )
    }
}

export default App;