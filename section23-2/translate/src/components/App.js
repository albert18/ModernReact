import React from 'react';

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
                {this.state.language}
            </div>
        )
    }
}

export default App;