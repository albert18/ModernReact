import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
    state = { language: 'english' };

    onLaguageChange = language => {
        this.setState({ language });
    }

    render () {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLaguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLaguageChange('dutch')}/>
                </div>
                {/* {this.state.language} */}
                <UserCreate />
            </div>
        )
    }
}

export default App;