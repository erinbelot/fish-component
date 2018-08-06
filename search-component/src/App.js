import React, { Component } from 'react';

import ListWrapper from './ListWrapper';
import Search from './Search'

class App extends Component {

  state = {
    count: 4,
    people: [   
        {
            "_id": "634545435",
            "firstName": "Luke",
            "lastName": "Colcott",
            "employeeNumber": "T12345",
            "email": "l.colcott@live.com",
            "department": "Research and Design",
            "administrator": true,
            "active": true 
        },
        {
            "_id": "13234324",
            "firstName": "Mike",
            "lastName": "Lunchbox",
            "employeeNumber": "T12346",
            "email": "m.lunchbox@live.com",
            "department": "Cars",
            "administrator": true,
            "active": true 
        },
        {
            "_id": "343423432432",
            "firstName": "Buke",
            "lastName": "Bolcott",
            "employeeNumber": "T12315",
            "email": "b.bolcott@live.com",
            "department": "Trucks",
            "administrator": true,
            "active": true 
        },
        {
            "_id": "234324343",
            "firstName": "Duke",
            "lastName": "Dolcott",
            "employeeNumber": "T12347",
            "email": "d.dolcott@live.com",
            "department": "Motorcycles",
            "administrator": true,
            "active": true 
        }
      ]
  }

  render() {
    return (
      <div>
        <h1>THIS COMES FROM APP</h1>
        <Search />
        <ListWrapper {...this.state} />
      </div>
    );
  }
}

export default App;


// make the most simple class component you can make
// just have it have a h3 that says search
// use that component in JSX somewhere (maybe in app)
// then we will look at what this component should actually be