//We create a user action with a function that takes a user/authUser and sets the payload to that user.
// If no user/authUser, the payload is automatic null.
// user = authUser
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})