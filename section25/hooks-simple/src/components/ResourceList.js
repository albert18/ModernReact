import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { async } from 'q';

const ResourceList = ({ resource }) => {
    
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
                );
                setResources(response.data);
        })(resource)
    }, [resource]);

    return (
        <div>{resources.length}</div>
    )
    
}

export default ResourceList;