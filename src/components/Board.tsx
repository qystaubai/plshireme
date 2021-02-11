import React from "react";
import {useStore} from "react-redux";
import {Goal} from "../types/types";
import {GoalCardComponent} from "./GoalCard";

export const BoardComponent: React.FC = () => {

    const state = useStore().getState();
    console.log(state);

    return (
        <div className="board-container">
            <div className="board">
                <div className="goals card">
                    {state.goals.map((goal: Goal) =>
                        <GoalCardComponent {...goal} key={goal.id}/>
                    )}
                </div>

                <div className="calendar card">
                    me calendar
                </div>
            </div>
        </div>
    )
}
