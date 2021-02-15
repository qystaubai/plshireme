import React, {ReactElement} from "react";
import {useStore} from "react-redux";
import {Goal, State} from "../types/types";
import {GoalCardComponent} from "./GoalCard";

export const BoardComponent: React.FC = (): ReactElement => {

    const state: State = useStore().getState();
    console.log(state);

    return (
        <div className="board-container">
            <div className="board">
                <div className="goals card">
                    {state.repeatedGoals.map((goal: Goal) =>
                        <GoalCardComponent goal={goal} done={false} key={goal.id}/>
                    )}
                    {state.currentGoals.map((goal: Goal) =>
                        <GoalCardComponent goal={goal} done={false} key={goal.id}/>
                    )}
                    {state.doneGoals.map((goal: Goal) =>
                        <GoalCardComponent goal={goal} done={true} key={goal.id}/>
                    )}
                </div>

                <div className="calendar card">
                    me calendar
                </div>
            </div>
        </div>
    )
}
