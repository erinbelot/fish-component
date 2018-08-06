melbourne = {
    climate: "Temperate",
    politics: "Left-leaning",
    population: 4900000,
    suburbs: [
        {
            name: "Footscray"
        },
        {
            name: "Caulfield"
        },
        {
            name: "CBD",
            restaurants: [
                {
                    name: "Gypsy and Pig",
                    cuisine: "Japanese",
                    dishes: [
        
                    ]
                },
                {
                    name: "Biryani House",
                    cuisine: "Indian",
                    dishes: [
                        {
                            name: "Chicken Malai Kebab",
                            price: 950,
                            ingredients: [

                            ]
                        },
                        {
                            name: "Lamb Biryani",
                            price: 1150,
                            ingredients: [
                                {
                                    ingredient: "rice",
                                    amount: "500g",
                                },
                                {
                                    ingredient: "lamb",
                                    amount: "300g"
                                },
                                {
                                    ingredient: "cloves, cardimom, garam masala",
                                    amount: "20g"
                                }
                            ]
                        },
                        {
                            name: "Lamb Palak",
                            price: 1150,
                            ingredients: [

                            ]
                        }
                    ]
                },
                {
                    name: "Bebu",
                    cuisine: "Korean",
                    dishes: [

                    ]
                }
            ] 
        }
    ]
}

// Use this start to get back the string "20g"
// save this into a file and run 'node <filename>' to get the output
console.log(melbourne.suburbs[2].restaurants[1].dishes[1].ingredients[2].amount)



// 1. What is happening when we import things from another file?
// we're giving ourselves access to that file.

// 2. What is happening when we import things from ‘react’?
// we're giving ourselves access to react features etc

// 3. What is happening when we import something like ListWrapper?
// we're giving ourselves access to the react component to use in other files.

// 4. What type of thing is ListWrapper?
//  a react component

// 5. In React, what is ‘state’?
// javascript object that contains all the properties of the app

// 6. How does ‘state’ relate to ‘props’?
// Props is state's children.

// 7. Why should be be careful when passing around objects like ‘state’ (or any object)?
// Objects are not immutable, they can change. You don't want to dick around with that. And you want a copy of the object

// 8. What syntax can we use in modern JS so that we avoid trouble when passing objects?
// {...this.state}

// 9. What are props?
// state's children? it's just state when you can't use state because you've already used it

// 10. What are the two types of component that we can make in React?
// function and class

// 11. Why might we use one type of React component over another?
// class gives you more options, you can use a function in a class. A class component can have its own state.

// 12. What is JSX?
// javascript html

// 13. What is the render() function?
// show to screen

// 14. Give an example of how we would render a component called ListWrapper as JSX.
// <ListWrapper />


// 15. Using the previous example, show how you would pass through this.state to a child component.
// <ListWrapper {...this.state} />

// 1. Start a React app using create-react-app
// 2. Create a class component called Search
// 3. Have the Search component render some simple JSX
// 4. See if you can work out how to add to state within the Search component

// * please always think in terms of data type
// ** please also think about the functions and whether they are being defined or called