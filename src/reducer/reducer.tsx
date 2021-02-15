import {State, Action} from "../types/types";


const initialState: State = {
    currentGoals: [{
        id: 0,
        title: "Order pizza",
        deadline: new Date()
    }, {
        id: 1,
        title: "Find a job",
        deadline: new Date()
    }],
    doneGoals: [{
        id: 2,
        title: "Order pizza",
        deadline: new Date()
    }, {
        id: 3,
        title: "cry",
        deadline: new Date()
    }],
    repeatedGoals: [{
        id: 4,
        title: "Brush teeth",
        deadline: new Date()
    }, {
        id: 5,
        title: "Morning coffee",
        deadline: new Date()
    }]
}



// Use the initialState as a default value
export default function appReducer(state = initialState, action: Action): State {
    // The reducer normally looks at the action type field to decide what happens
    console.log("action!");
    switch (action.type) {
        case ("currentGoals/added"):
            return {
                ...state,
                currentGoals: [
                    ...state.currentGoals,
                    ...action.payload,
                ]
            }
        case ("currentGoals/done"):
            return {
                ...state,
                currentGoals: [
                    // deleting goal from currentGoals list
                    ...state.currentGoals.splice(state.currentGoals.indexOf(action.payload[0]), 1)
                ],
                doneGoals: [
                    // adding goal to doneGoals list
                    ...state.doneGoals,
                    ...action.payload,
                ]
            }
        case ("repeatedGoals/added"):
            return {
                ...state,
                repeatedGoals: [
                    ...state.repeatedGoals,
                    ...action.payload,
                ]
            }
        default:
            return state
    }
}
