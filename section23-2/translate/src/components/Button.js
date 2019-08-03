import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class Button extends React.Component {
    // note: must called 'contextType' exactly if not it won't work.
    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        return (
            <button className="ui button primary">Submit</button>
        )
    }
}

export default Button;