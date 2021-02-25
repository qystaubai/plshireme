/* eslint @typescript-eslint/no-var-requires: "off" */
import React, {ReactElement} from "react";
import {Goal} from "../types/types";
// const hourglass = require("../assets/add");

export const GoalCardComponent: React.FC<Goal> = (goal): ReactElement => {
    const deadlineTime = goal.deadline.valueOf() - new Date().valueOf();
    return (
        <div className={`goal card  ${goal.done ? "goal-done" : ""}`}>
            <div className="goal-title">
                {goal.title}
            </div>
            <div className="goal-deadline">
                {
                    (deadlineTime < 0)? "expired :c": (`
                        ${Math.floor(deadlineTime / 86400000)}d
                    : ${Math.floor(deadlineTime / 3600000)%24}h
                    : ${Math.round(deadlineTime / 60000)%60}m
                    `
                    )
                }

            </div>
        </div>
    )
}

