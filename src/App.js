import React, {Component} from 'react';
import './App.css';
import { EventList } from './EventList';
import { CitySearch } from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

export class App extends Component {
  
  state = { 
    events: [],
    locations: []
  };
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all") 
      ? events
      : events.filter((event) => event.location === location);
      if( this.mounted){
        this.setState({
        events: locationEvents
        });
      
      }     
    });
  };

  

  render () {
    return (
    <div className="App">
      <EventList events={this.state.events}/>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents/>
    </div>
  );
  }
}

export default App;
