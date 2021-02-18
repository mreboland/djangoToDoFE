import React, { Component } from "react";

const list = [
  {
    "id": 1,
    "title": "1st todo",
    "body": "Learn Django properly."
  },
  {
    "id": 2,
    "title": "Second item",
    "body": "Learn Python."
  },
  {
    "id": 3,
    "title": "Learn HTTP",
    "body": "It's important."
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list
    }
  }

  render() {
    return (
      <div>
        {/* https://nemisj.com/implicit-return-in-arrow-function-got-me/ */}
        {/* The () brackets within the map arrow function indicates an implicit return which is where there is an assumed return() within the function. I'm used to using explicit return (using {} inside map which is standard notation) where we have to use return when manipulating code to have it shown on page. It's more concise using implicit however it has the downside of more difficult debugging. Albeit it seems using {} around a console log works just fine despite reading about difficulties in debugging.*/}
        {this.state.list.map(item => (
          // https://dev.to/francodalessio/understanding-the-importance-of-the-key-prop-in-react-3ag7
          // We add a key so react knows how to identify which items have changed, are added, or removed. It helps prevent react doing more work then necessary (if a change is made by adding a new key, while all others are the same, react doesn't have to recalculate every item, just the new one.)
          <div key={item.id}>
            {console.log(item)}
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>        
    );

  }
}

export default App;
