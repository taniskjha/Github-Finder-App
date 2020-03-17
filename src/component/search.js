import React, { Component } from 'react'


class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' })
    }

    // static propTypes = {
    //     searchUsers: PropTypes.func.isRequired()
    // }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange} />
                    <input type="submit"
                        value="search"
                        className="btn btn-dark btn-block"
                    />
                </form>
                <button onClick={this.props.clearUsers} className="btn btn-light btn-block" >Clear</button>
            </div>
        )
    }
}

export default Search
