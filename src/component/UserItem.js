import React from 'react'


class UserItem extends React.Component {
    state = {
        id: 'id',
        login: 'Tanisk Jha',
        avatar_url: "https://avatars1.githubusercontent.com/u/54271649?v=4",
        html_url: "https://github.com/taniskjha",
        location: "Bangalore",
        active: true
    };

    render() {
        return (
            <div className="card text-center">
                <img src={this.state.avatar_url} alt="MyPic" className="round-img" style={{ width: '100px' }} />

                {this.state.active && <h3>{this.state.login}</h3>}
                <p>{this.state.location}</p>
                <div>
                    <a href={this.state.html_url} className="btn btn-primary btn-sm my-1" target='_blank' rel="noopener noreferrer" >Github Profile</a>
                </div>

            </div>
        )
    }
}

export default UserItem;