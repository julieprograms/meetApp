import React, { Component } from 'react';

export class NumberOfEvents extends Component {

    state = {numberOfEvents: '32'};
    
    handleInputChanged = (event) => {
        
        this.setState({ 
            numberOfEvents: event.target.value
        });
    };
    
    render() {
        return(
        <div className="NumberOfEvents">
            <input type="number" className="number"
            value={this.state.numberOfEvents} 
            onChange={this.handleInputChanged}/>
        </div>
        

        )
    }};
