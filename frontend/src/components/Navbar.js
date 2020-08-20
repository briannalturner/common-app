import React from 'react'
import {NavLink} from 'react-router-dom'

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
                        <NavLink to='/users' className='nav-link' activeClassName='active'>Users</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}