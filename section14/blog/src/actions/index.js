import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import { async } from 'q';

export const fetchPostsAndUsers = () => async dispatch => {
    console.log('feadadadsasa before');
    await dispatch(fetchPosts());
    console.log('feadadadsasa post');
};

export const fetchPosts = () => async dispatch => {        
    const response = await jsonPlaceHolder.get('./posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload:response.data });
};

// ----- LODASH it Prevent from calling multiple calls APIn`
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload:response.data });
// });
// ----- LODASH it Prevent from calling multiple calls APIn`







