// userActions.js

export const addUser = (user) => {
    return {
      type: 'ADD_USER',
      payload: user
    };
  };
  
//   export const fetchUsers = () => {
//     return async (dispatch) => {
//       try {
//         // Make an API call to fetch users
//         const response = await fetch('https://api.example.com/users');
//         const users = await response.json();
  
//         // Dispatch the action to store users
//         dispatch({
//           type: 'FETCH_USERS',
//           payload: users
//         });
//       } catch (error) {
//         // Handle error
//       }
//     };
//   };
  