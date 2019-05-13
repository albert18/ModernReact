import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 3309e3bf897959a95859cd536ca50cb581b98d4e99be045572a862a27a2eb3cb'
            }
        });

        console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
    }
}

export default App;