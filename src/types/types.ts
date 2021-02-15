export interface Goal {
    id: number,
    title: string,
    deadline: Date,
}

export interface State {
    currentGoals: Goal[],
    doneGoals: Goal[],
    repeatedGoals: Goal[]
}

export interface Action {
    type: string,
    payload: Goal[]
}
