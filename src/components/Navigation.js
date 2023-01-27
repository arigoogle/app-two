import { Link } from 'react-router-dom'
import React from 'react'

function Navigation() {
    return (
        <div>
            <h1>
                React Routing DOM
            </h1>
            <nav className='py-3'>
                <Link to='/'> All Meetup </Link> |
                <Link to='new-meetup'> New Meetup </Link> |
                <Link to='favorites'> Favorites </Link> |
                <Link to='safasf'> 404 </Link> |
            </nav>
        </div>
    )
};

export default Navigation;
