import React, {ReactElement} from "react";
import {connect, ConnectedProps} from "react-redux";
import {Goal, State} from "../types/types";
import {GoalCardComponent} from "./GoalCard";
import {CalendarCardComponent} from "./CalendarCard";
import {goalDoneAction} from "../actions/actions";


const mapStateToProps = (state: State) => ({goals: state.goals});
const mapDispatchToProps = {
    goalDoneAction
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const BoardComponent: React.FC<Props> = (props: Props): ReactElement => {

    const handleGoalDone = (goalId: number) => {
        props.goalDoneAction(goalId)
        console.log("doing")
    }
    return (
        <div className="board-container">
            <div className="board">
                <div className="goals card">
                    {props.goals.map((goal: Goal) =>
                        <div key={goal.id}>
                            <GoalCardComponent {...goal}/>
                            {/*testing button*/}
                            <button onClick={() => handleGoalDone(goal.id)}> goal done</button>
                        </div>
                    )}

                </div>

                <div className="calendar card">
                    me calendar
                        {props.goals.map((goal: Goal) =>
                            <CalendarCardComponent {...goal} key={goal.id}/>
                        )}
                </div>
            </div>
        </div>
    )
}

export default connector(BoardComponent);
