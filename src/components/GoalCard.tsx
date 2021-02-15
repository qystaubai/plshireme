/* eslint @typescript-eslint/no-var-requires: "off" */
import React, {ReactElement} from "react";
import {Goal} from "../types/types";
// const hourglass = require("../assets/add");

export const GoalCardComponent: React.FC<{goal: Goal, done: boolean}> = (goal): ReactElement => {
    return (
    <div className={`goal card  ${goal.done? "goal-done": ""}`}>
        <div className="goal-title">
            {goal.goal.title}
        </div>
        <div className="goal-deadline">
            {/*<img src={hourglass} alt="time left"/>           svg doesnt load for some reason >:[ */}
            4 h
        </div>
    </div>
    )
}
