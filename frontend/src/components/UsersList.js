import React from 'react'

export default class UsersList extends React.Component {

    renderUsers = () => {
        let userDivs = []
        this.props.users.forEach(user => {userDivs.push( <div onClick={() => this.props.updateUser(user)} className='card clickable'>User {user.id} {user.last_name}, {user.first_name} </div>)})
        return userDivs
    }

    render() {
        return (
            <div>
                <h1>Users List</h1>
                <div>
                    {
                        this.props.users ?

                        this.renderUsers() :

                        null
                    }
                </div>
            </div>
        )
    }
}