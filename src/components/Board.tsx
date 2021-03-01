import React, {ReactElement} from "react";
import {useSelector} from "react-redux";
import {Goal} from "../types/types";
import {GoalCardComponent} from "./GoalCard";
import {CalendarCardComponent} from "./CalendarCard";
import AddGoalCardComponent from "./AddGoalCard";
import {selectGoals} from "../selectors/selectors";

const BoardComponent: React.FC = (): ReactElement => {

    const goals = useSelector(selectGoals)

    return (
        <div className="board-container">
            <div className="board">
                <div className="goals card">
                    {goals.map((goal: Goal) =>
                        <GoalCardComponent key={goal.id} {...goal}/>
                    )}
                    <AddGoalCardComponent />

                </div>

                <div className="calendar card">
                        {goals.map((goal: Goal) =>
                            <CalendarCardComponent {...goal} key={goal.id}/>
                        )}
                </div>
            </div>
        </div>
    )
}

export default BoardComponent;
