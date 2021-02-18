import React, { Component } from "react";
import axios from "axios";

// Test code of our backend db
// const list = [
//   {
//     "id": 1,
//     "title": "1st todo",
//     "body": "Learn Django properly."
//   },
//   {
//     "id": 2,
//     "title": "Second item",
//     "body": "Learn Python."
//   },
//   {
//     "id": 3,
//     "title": "Learn HTTP",
//     "body": "It's important."
//   }
// ]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // list
      todos: [],
    }
  }

  // https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
  // https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n
  // componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.
  componentDidMount() {
    this.getTodos();
  }

  // function to run in componentDidMount
  getTodos() {
    // Using axios to access server
    axios
      // getting the address of the server
      .get("http://127.0.0.1:8000/api/")
      // then manipulating the data (axios gets a promise to which .then allows us to manipulate)
      .then( (res) => {
        // Log for understanding data manipulation
        console.log(res)
        // saving the data to state so we can access it in other parts of the app.
        this.setState({
          todos: res.data
        })
      })
      // if an error is thrown, catch it and print it.
      .catch( (err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        {/* https://nemisj.com/implicit-return-in-arrow-function-got-me/ */}
        {/* The () brackets within the map arrow function indicates an implicit return which is where there is an assumed return() within the function. I'm used to using explicit return (using {} inside map which is standard notation) where we have to use return when manipulating code to have it shown on page. It's more concise using implicit however it has the downside of more difficult debugging. Albeit it seems using {} around a console log works just fine despite reading about difficulties in debugging.*/}
        {this.state.todos.map( (item) => (
          // https://dev.to/francodalessio/understanding-the-importance-of-the-key-prop-in-react-3ag7
          // We add a key so react knows how to identify which items have changed, are added, or removed. It helps prevent react doing more work then necessary (if a change is made by adding a new key, while all others are the same, react doesn't have to recalculate every item, just the new one.)
          <div key={item.id}>
            {console.log(item)}
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>        
    );

  }
}

export default App;
