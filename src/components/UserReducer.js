// userReducer.js

const initialState = {
    users: []
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        // case 'FETCH_USERS':
        //   return {
        //     ...state,
        //     users: action.payload
        //   };
        default:
            return state;
    }
};

export default UserReducer;
