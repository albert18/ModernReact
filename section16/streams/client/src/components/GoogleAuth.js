import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '790062622465-7ijnvqsbj9tn2nfmgls36e70av68afrb.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render () {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;