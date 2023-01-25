import { Link } from 'react-router-dom'
import React from 'react'

function Navigation() {
    return (
        <div>
            <h1>
                React Routing DOM
            </h1>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='profile'>Profile</Link> | {" "}
                <Link to='about'>About</Link> | {" "}
            </nav>
        </div>
    )
};

export default Navigation;
