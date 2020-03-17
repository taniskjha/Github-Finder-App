import React, { Component, Fragment } from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types'

const Users = (props) => {

    return (
        <div style={userStyles}>
            {props.users.map(a => <UserItem key={a.id} a={a} />)}
        </div>

    )
}

class User extends Component {
    render() {

        return (
            <div style={userStyles}>
                {this.props.users.map(a => <UserItem key={a.id} a={a} />)}
            </div>

        )

    }
}

User.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default User
