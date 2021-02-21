import {ActionTypes, Actions} from "../types/actionTypes";

//action creators
export const goalDoneAction = (goalId: number): Actions => ({
    type: ActionTypes.GOAL_DONE,
    payload: {goalId: goalId}
})
