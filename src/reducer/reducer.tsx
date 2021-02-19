import {State, Action} from "../types/types";


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
            deadline: new Date(),
            done: false,
            repeated: false
        },
        {
            id: 2,
            title: "Order pizza",
            deadline: new Date(),
            done: false,
            repeated: false
        },
        {
            id: 3,
            title: "cry",
            deadline: new Date(),
            done: false,
            repeated: false
        },
        {
            id: 4,
            title: "Brush teeth",
            deadline: new Date(),
            done: false,
            repeated: false
        },
        {
            id: 5,
            title: "Morning coffee",
            deadline: new Date(),
            done: false,
            repeated: false
        }]
}



// Use the initialState as a default value
export default function appReducer(state = initialState, action: Action): State {
    // The reducer normally looks at the action type field to decide what happens
    console.log(state);
    switch (action.type) {
        case ("goals/added"):
            return {
                ...state,
                goals: [
                    ...state.goals,
                    ...action.payload,
                ]
            }
        case ("goals/done"): {
            const goalsList = [...state.goals];
            const changedGoalsList = [...action.payload];
            changedGoalsList.map(changedGoal => {
                const changedGoalIndex = goalsList.indexOf(changedGoal);
                if (changedGoalIndex) {
                    goalsList[changedGoalIndex].done = true;
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
