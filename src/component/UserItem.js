import React from 'react'

const UserItem = ({ a: { login, html_url, avatar_url, location } }) => {

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="MyPic" className="round-img" style={{ width: '100px' }} />

            {<h3>{login}</h3>}
            <p>{location}</p>
            <div>
                <a href={html_url} className="btn btn-primary btn-sm my-1" target='_blank' rel="noopener noreferrer" >Github Profile</a>
            </div>

        </div>
    )
}

// UserItem.propTypes = {
//     a: PropTypes.object.isRequired
// }


export default UserItem;