
// make the most simple class component you can make
// just have it have a h3 that says search
// use that component in JSX somewhere (maybe in app)
// then we will look at what this component should actually be

import React, {Component} from 'react'
// make the most simple class component you can make
class Search extends Component {

    render() {
        return (
            <div>
                <h3> Search </h3>
            </div>
        )
    }   
}

export default Search