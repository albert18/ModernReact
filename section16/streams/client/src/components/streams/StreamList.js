import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return <div>StreamList 2</div>
    }
}


export default connect(null, { fetchStreams })(StreamList);