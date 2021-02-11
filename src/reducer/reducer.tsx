import {State} from "../types/types";
import {Action} from "redux";


const initialState: State = {
    goals: {
        id: 0,
        name: "try it",
        date: new Date()
    }
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action: Action): State {
    // The reducer normally looks at the action type field to decide what happens
    console.log("action!");
    switch (action.type) {
        case ("goal/added"):
            return {
                ...state,
                goals: {
                    ...state.goals,

                }
            }
        default:
            return state
    }
}
