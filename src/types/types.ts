export interface Goal {
    id: number,
    title: string,
    deadline: Date,
    done: boolean,
    repeated: boolean
}

export interface State {
    goals: Goal[]
}
