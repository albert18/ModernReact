import React from 'react';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';


class Button extends React.Component {
    // note: must called 'contextType' exactly if not it won't work.
    // static contextType = LanguageContext;
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    rednerButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }


    render() {
        // console.log(this.context);
        return (
            <ColorContext.Consumer>
            {(color) => this.rednerButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;