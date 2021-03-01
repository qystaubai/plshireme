/* eslint @typescript-eslint/no-var-requires: "off" */
import React, {ReactElement, useState} from "react";
import {Goal} from "../types/types";
import {useDispatch} from "react-redux";
import {goalDoneAction} from "../actions/actions";
// const hourglass = require("../assets/add");

export const GoalCardComponent: React.FC<Goal> = (goal): ReactElement => {
    const [showGoalActions, setShowGoalActions] = useState<boolean>(false);

    const deadlineTime = goal.deadline.valueOf() - new Date().valueOf();
    const dispatch = useDispatch();

    const toggleGoalActions = () => {
        setShowGoalActions(!showGoalActions);
    }

    const goalDone = () => {
        dispatch(goalDoneAction(goal.id));
    }
    return (
        <div>
            <div
                className={`goal card ${goal.done? "goal-done" : (Math.round(deadlineTime / 60000) <= 0)? "goal-expired": ""}`}
                onClick={toggleGoalActions}>
                <div className="goal-title">
                    {goal.title}
                </div>
                <div className="goal-deadline">
                    {
                        goal.done? "Done :)" :
                        (deadlineTime < 0)? "expired :c": (`
                            ${Math.floor(deadlineTime / 86400000)}d
                            : ${Math.floor(deadlineTime / 3600000)%24}h
                            : ${Math.round(deadlineTime / 60000)%60}m
                        `)
                    }

                </div>
            </div>
                <div className={`goal-actions ${showGoalActions? "": "hidden"}`}>
                    <button
                        className="goal-actions__button"
                        onClick={()=> {
                        goalDone();
                        toggleGoalActions();
                    }}>Done</button>
                </div>
        </div>
    )
}

