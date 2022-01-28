import React from 'react';
import { Event } from './Event';

import './EventList.css';

export function EventList(props) {
    const { events } = props;
    return <ul className="EventList">
        {events.map(event =>
            <li className="event-list" key={event.id}>
                <Event event={event} />
            </li>
        )}    
    </ul>;
}
    
