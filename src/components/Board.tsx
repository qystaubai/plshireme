import React, {ReactElement} from "react";
import {useStore} from "react-redux";
import {Goal, State} from "../types/types";
import {GoalCardComponent} from "./GoalCard";

export const BoardComponent: React.FC = (): ReactElement => {

    const state: State = useStore().getState();
    console.log(state);

    // const goalDone = () => {
    //     useStore().dispatch({
    //         type: "goals/done",
    //         payload: [{
    //             id: 2,
    //             title: "Order pizza",
    //             deadline: new Date(),
    //             done: false,
    //             repeated: false
    //         }]
    //     })
    // }

    return (
        <div className="board-container">
            <div className="board">
                <div className="goals card">
                    {state.goals.map((goal: Goal) =>
                        <GoalCardComponent {...goal} key={goal.id}/>
                    )}
                    {/*<button onClick={goalDone}>Click</button>*/}
                </div>

                <div className="calendar card">
                    me calendar
                </div>
            </div>
        </div>
    )
}
