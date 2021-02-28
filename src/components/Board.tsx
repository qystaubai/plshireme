import React, {ReactElement} from "react";
import {connect, ConnectedProps} from "react-redux";
import {Goal, State} from "../types/types";
import {GoalCardComponent} from "./GoalCard";
import {CalendarCardComponent} from "./CalendarCard";
import {goalDoneAction} from "../actions/actions";
import AddGoalCardComponent from "./AddGoalCard";


const mapStateToProps = (state: State) => ({goals: state.goals});
const mapDispatchToProps = {
    goalDoneAction
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const BoardComponent: React.FC<Props> = (props: Props): ReactElement => {

    return (
        <div className="board-container">
            <div className="board">
                <div className="goals card">
                    {props.goals.map((goal: Goal) =>
                        <GoalCardComponent key={goal.id} {...goal}/>
                    )}
                    <AddGoalCardComponent />

                </div>

                <div className="calendar card">
                        {props.goals.map((goal: Goal) =>
                            <CalendarCardComponent {...goal} key={goal.id}/>
                        )}
                </div>
            </div>
        </div>
    )
}

export default connector(BoardComponent);
