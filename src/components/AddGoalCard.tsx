import React, {ReactElement} from "react";
// import {Goal} from "../types/types";

export const GoalCardComponent: React.FC = (): ReactElement => {
    return (
        <div className={"goal card"}>
            <div className="goal-title">
                <input/>
            </div>
            <div className="goal-deadline">
                <input/>
            </div>
        </div>
    )
}
