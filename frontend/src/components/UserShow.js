import React from 'react'

export default class UserShow extends React.Component {


    render() {
        return (
            <div>
                { this.props.user ?
                
                <div>
                    <h1>
                        User Detail: {this.props.user.id}
                    </h1>
                    <div className='card clickable text-left p-5'>
                        <h5>
                            First Name: 
                        </h5>
                        <p>
                            {this.props.user.first_name}
                        </p>
                        <h5>
                            Last Name: 
                        </h5>
                        <p>
                            {this.props.user.last_name}
                        </p>
                        <h5>
                            Email Address: 
                        </h5>
                        <p>
                            {this.props.user.first_name}
                        </p>
                        <h5>
                            Phone Number: 
                        </h5>
                        <p>
                            {this.props.user.country_code} {this.props.user.phone}
                        </p>
                        <div className='row'>
                        <button className='btn btn-primary m-2'>Edit</button>
                        <button className='btn btn-primary m-2' onClick={() => this.props.deleteUser(this.props.user)}>Delete</button>
                        </div>
                    </div>

                </div>
            
                :
                <h1>User Detail: </h1>
                }
            </div>
        )
    }
}