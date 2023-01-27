import React from 'react'
import classes from './MeetupItem.module.css'

export default function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <div>
                <img src={props.img} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div>
                <button>To Favorites</button>
            </div>
        </li>
    )
}
