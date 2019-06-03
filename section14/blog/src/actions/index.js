import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import { async } from 'q';

export const fetchPosts = () => async dispatch => {        
    const response = await jsonPlaceHolder.get('./posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload:response.data });
}

    // return {
    //     type: 'FETCH_POSTS',
    //     payload: response
    // };



