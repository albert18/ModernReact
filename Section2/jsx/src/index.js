// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return (
    <div>
        <label className="label" for="name">Enter Name:</label>
        <input id="name" text="text"/>
        <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>)
};

// Take the react component and show it on to screen
ReactDOM.render(<App />, document.querySelector('#root'))