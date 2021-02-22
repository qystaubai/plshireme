import {Actions, ActionTypes} from "../types/actionTypes";
import {Goal} from "../types/types";

//action creators
export const goalDoneAction = (goalId: number): Actions => ({
    type: ActionTypes.GOAL_DONE,
    payload: {goalId: goalId}
})

export const goalAddedAction = (goal: Goal): Actions => ({
    type: ActionTypes.GOAL_ADDED,
    payload: goal
})
