import React, {Component} from 'react';
import './App.css';
import './nprogress.css';
import { EventList } from './EventList';
import { CitySearch } from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';



export class App extends Component {
  
  state = { 
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all"
  };
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all") 
      ? events
      : events.filter((event) => event.location === location);
      const eventsToShow= locationEvents.slice(0, this.state.numberOfEvents);
      if( this.mounted){
        this.setState({
        events: eventsToShow,
        currentLocation: location
        });
      
      }     
    });
  };

  updateNumberOfEvents = async (e) => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;

    if(newNumber < 1 || newNumber > 32){
      await this.setState({ 
        numberOfEvents: newNumber,
      errorText: 'Please choose a number between 0 and 32' 
    });
    } else {
      await this.setState({
        errorText:'',
        numberOfEvents: newNumber
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    } 
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(/[,|-]+/).shift();
      return {city, number};
    })
    return data;
  };

  render () {
    return (
    <div className="App">
      <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
      { !navigator.onLine ? (<WarningAlert text='You are in offline mode!' />) : (<WarningAlert text=' ' />)}
      <CitySearch 
      locations={this.state.locations} 
      updateEvents={this.updateEvents}/>
      <NumberOfEvents 
      numberOfEvents={this.state.numberOfEvents}
      updateNumberOfEvents={this.updateNumberOfEvents}
      errorText ={this.state.errorText}/>

<h4>Events in each city</h4>

<div className="chart-2">
              <h4>Events in Each City</h4>
              <ResponsiveContainer height={400} >
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                  <CartesianGrid />
                  <XAxis tick={{ fill: "#000000" }} type="category" dataKey="city" name="city" />
                  <YAxis allowDecimals={false} tick={{ fill: "#000000" }} type="number" dataKey="number" name="number of events" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#1D4355" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

      <EventList events={this.state.events}/>
      
    </div>
  );
  }
}

export default App;
