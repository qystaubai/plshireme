import {State} from "../types/types";
import {Action} from "redux";


const initialState: State = {
    goals: [{
        id: 0,
        title: "Order pizza",
        deadline: new Date()
    }, {
        id: 1,
        title: "Find a job",
        deadline: new Date()
    }]
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
