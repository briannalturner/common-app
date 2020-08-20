import React from 'react'
import UsersList from './UsersList'
import UserDetail from './UserDetail'


export default class UsersPage extends React.Component {

    constructor() {
        super()
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/users').then(resp => resp.json()).then(json => this.setState({users: json}))
    }

    render() {
        return (
            <div className='row'>
                <div className='col'>
                <UsersList users={this.state.users} updateUser={this.props.updateUser}/>

                </div>
                <div className='col'>
                <UserDetail selectedUser={this.props.user}/>

                </div>
            </div>
        )
    }
}