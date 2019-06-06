import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>PageOne
            <Link to="/pagetwo">Navigate to Page Two</Link> 
        </div>
        
    )
}

const PageTwo = () => {
    return (
        <div>PageTwo
            <Link to="/">Navigate to Page one</Link> 
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/PageTwo" exact component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;