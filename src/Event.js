import React, { Component } from 'react';

export class Event extends Component {

    state = {
        collapsed: true
    };

    handleClick= ()  => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render(){
        const { event} = this.props;
        const {collapsed} = this.state;
       
        
    return <div className='event'>
        
        <h1 className='summary'>{event.summary}</h1>
        <p className='dateTime'>{event.dateTime}</p>
        <p className='timeZone'>{event.timeZone}</p>
        <p className='location'>@{event.summary} | {event.location}</p>
        if(collapsed === true){
            <button className='show-details'
        onClick={this.handleClick}>show Details</button>
        }
        else{<button className='hide-details'
        onClick={this.handleClick}>hide Details</button>
        }
    </div>;  
    }
    
}