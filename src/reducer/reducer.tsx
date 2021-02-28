import {State} from "../types/types";
import {ActionTypes, Actions} from "../types/actionTypes";


const initialState: State = {
    goals: [
        {
            id: 0,
            title: "Order pizza",
            deadline: new Date('February 21, 2021 03:24:00'),
            done: false,
            repeated: false
        },
        {
            id: 1,
            title: "Find a job",
            deadline: new Date('February 27, 2021 03:24:00'),
            done: false,
            repeated: false
        },
        {
            id: 2,
            title: "Order pizza",
            deadline: new Date('February 25, 2021 22:24:00'),
            done: false,
            repeated: false
        },
        {
            id: 3,
            title: "cry",
            deadline: new Date('February 26, 2021 03:24:00'),
            done: false,
            repeated: false
        },
        {
            id: 4,
            title: "Brush teeth",
            deadline: new Date('February 25, 2021 19:20:00'),
            done: false,
            repeated: false
        },
        {
            id: 5,
            title: "Morning coffee",
            deadline: new Date('February 28, 2021 03:24:00'),
            done: false,
            repeated: false
        }]
}



// Use the initialState as a default value
export default function appReducer(state = initialState, action: Actions): State {
    // The reducer normally looks at the action type field to decide what happens
    console.log(state);
    switch (action.type) {
        case ActionTypes.GOAL_ADDED:
            return {
                ...state,
                goals: [
                    ...state.goals,
                    action.payload
                ]

            }
        case ActionTypes.GOAL_DONE: {
            const goalsList = [...state.goals];

            goalsList.map(changedGoal => {
                if (changedGoal.id == action.payload.goalId) {
                    changedGoal.done = true;
                }
            })
            return {
                ...state,
                goals: goalsList
            }
        }
        default:
            return state
    }
}
