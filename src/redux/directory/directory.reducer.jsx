//Import fake shopping data
import SECTIONS_DATA from "../../shopping_data/sections.data";

//We define the initial state/current state
const INITIAL_STATE = {
    sections: SECTIONS_DATA,
}

//The current state is what the state is now. The action is the custom action that we write like "ADD_USER_ON_CLICK".
//currentState = INITIAL_STATE means that if ever currentState is undefined, it will fall beach to INITIAL_STATE
const directoryReducer = (currentState = INITIAL_STATE, action) => {

    //We lop trough the actions to find the action the equals the action.type (string) that we pass trough
    switch (action.type) {
        //We only need to return the fake store data
        default:
            //If no match with action.type, we just return the currentState with no changes
            return currentState;
    }
}

export default directoryReducer;