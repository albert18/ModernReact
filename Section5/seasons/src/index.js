/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the only time we do the direct
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // We called setState!!
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    //React says we have to define render!!!
    render() {
        return  <div>Latitude: { this.state.lat }</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))