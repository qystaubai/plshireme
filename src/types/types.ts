export interface Goal {
    id: number,
    title: string,
    deadline: Date,
}

export interface State {
    goals: Goal[]
}
