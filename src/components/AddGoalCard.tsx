import React, {ReactElement} from "react";
import {Goal} from "../types/types";

export const GoalCardComponent: React.FC<Goal> = (goal: Goal): ReactElement => {
    return (
        <div className="goal card">
            <div className="goal-title">
                me {goal.title}
            </div>
            <div className="goal-deadline">
                yesterday {goal.deadline.toString()}
            </div>
        </div>
    )
}
