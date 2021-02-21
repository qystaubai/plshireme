export enum ActionTypes {
    GOAL_DONE = "goal/done"
}

interface GoalDoneAction {
    type: typeof ActionTypes.GOAL_DONE,
    payload: {
        goalId: number
    }
}

export type Actions = GoalDoneAction;
