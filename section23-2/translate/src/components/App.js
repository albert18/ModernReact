import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from './contexts/LanguageContext';

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
                <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
                </LanguageContext.Provider>

                <LanguageContext.Provider value="dutch">
                <UserCreate />
                </LanguageContext.Provider>

                <UserCreate />
            </div>
        )
    }
}

export default App;