/* eslint @typescript-eslint/no-var-requires: "off" */
import React, {ReactElement} from "react";
import {Goal} from "../types/types";
const hourglass = require("../assets/add");

export const GoalCardComponent: React.FC<Goal> = (goal: Goal): ReactElement => {
    return (
    <div className="goal card goal-failed">
        <div className="goal-title">
            {goal.title}
        </div>
        <div className="goal-deadline">
            <img src={hourglass} alt="time left"/>
            4 h
        </div>
    </div>
    )
}
