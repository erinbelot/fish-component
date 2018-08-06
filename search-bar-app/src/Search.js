// 2. Create a class component called Search
// 3. Have the Search component render some simple JSX
// 4. See if you can work out how to add to state within the Search component
import React, { Component } from 'react';

class Search extends Component {

    render() {
        console.log(this.props)
        return (
            <h3> Search component </h3>
        )
    }

}

export default Search;

// 1. class syntax
// jsx syntax
//  add state syntax


