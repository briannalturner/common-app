import React from 'react'
import UsersList from './UsersList'
import UserDetail from './UserDetail'


export default class UsersPage extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col'>
                <UsersList />

                </div>
                <div className='col'>
                <UserDetail />

                </div>
            </div>
        )
    }
}