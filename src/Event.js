import React, { Component } from 'react';

export class Event extends Component {

    render(){
      return <div className='event'>
        <h1 className='summary'></h1>
        <p className='dateTime'></p>
        <p className='timezone'></p>
        <p className='location'></p>
    </div>;  
    }
    
}