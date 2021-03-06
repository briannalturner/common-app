import React from 'react'
import {Link} from 'react-router-dom'

export default class UserDetail extends React.Component {

    render() {
        return (
            <div>
                { this.props.selectedUser ?
                
                <div>
                    <h1>
                        <Link to={`/users/${this.props.selectedUser.id}`} >
                        User Detail: {this.props.selectedUser.id}
                        </Link>
                    </h1>
                    <div className='card text-left p-5'>
                        <h5>
                            First Name: 
                        </h5>
                        <p>
                            {this.props.selectedUser.first_name}
                        </p>
                        <h5>
                            Last Name: 
                        </h5>
                        <p>
                            {this.props.selectedUser.last_name}
                        </p>
                        <h5>
                            Email Address: 
                        </h5>
                        <p>
                            {this.props.selectedUser.first_name}
                        </p>
                        <h5>
                            Phone Number: 
                        </h5>
                        <p>
                            {this.props.selectedUser.country_code} {this.props.selectedUser.phone}
                        </p>

                    </div>

                </div>
            
                :
                <h1>User Detail: </h1>
                }
            </div>
        )
    }
}