export default(state = [], action) => {
    // You can use if statement as well.
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }

};