import React, { Component } from 'react';

class ListItems extends Component {

    makeAllItemsIntoHTML(arrayOfPeople) {
        const newArrayOfPeopleInHTML = arrayOfPeople.map((person, index) => {
            return (
                <li key={index}>
                    {person.firstName}
                </li>
            )
        })
        return newArrayOfPeopleInHTML
    }

    render() {
        console.log(this.props.people)

        const newArrayOfListItems = this.makeAllItemsIntoHTML(this.props.people)

        return (
            <div>
                <h2> list items </h2>
                <ul>
                    {newArrayOfListItems}
                </ul>
            </div>
        );
    }
}

export default ListItems

// make a component called searchbar
// find a tutorial about search bar react
// copy only the bit you need
// have it appear in your app
