import {Goal} from "./types";

export enum ActionTypes {
    GOAL_DONE = "goal/done",
    GOAL_ADDED = "goal/added"
}

interface GoalDoneAction {
    type: typeof ActionTypes.GOAL_DONE,
    payload: {
        goalId: number
    }
}

interface GoalAddedAction {
    type: typeof ActionTypes.GOAL_ADDED,
    payload: Goal
}

export type Actions = GoalDoneAction | GoalAddedAction;
