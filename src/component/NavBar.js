import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
    static defaultProps = {
        title: [1, 2, 3],
        icon: "fab fa-github"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <i className={this.props.icon}>{this.props.title} </i>
            </nav>
        )
    }
}

export default NavBar;