//The state'e that have anything to do with the users

//We define the initial state/current state
const INITIAL_STATE = {
    currentUser: null,
}


//The current state is what the state is now. The action is the custom action that we write like "ADD_USER_ON_CLICK".
//currentState = INITIAL_STATE means that if ever currentState is undefined, it will fall beach to INITIAL_STATE
const userReducer = (currentState = INITIAL_STATE, action) => {

    //We lop trough the actions to find the action the equals the action.type (string) that we pass trough
    switch (action.type) {
        //When the action.type = SET_CURRENT_USER
        case 'SET_CURRENT_USER':
            return {
                //First we import everything in the state
                ...currentState,
                //The payload is the value or object we set our element in our currentState to
                currentUser: action.payload
            }
        default:
            //If no match with action.type, we just return the currentState with no changes
            return currentState;
    }
}

export default userReducer;