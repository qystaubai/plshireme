import React, {ReactElement, useState} from "react";
import {connect, ConnectedProps} from "react-redux";
import {goalAddedAction} from "../actions/actions";
import {State} from "../types/types";
// import {Goal} from "../types/types";

const mapStateToProps = (state: State) => ({goals: state.goals});
const mapDispatchToProps = {
    goalAddedAction
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export const AddGoalCardComponent: React.FC<Props> = (props): ReactElement => {
    const [goalTitle, setGoalTitle] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setGoalTitle(e.currentTarget.value);
    }

    const handleGoalAdded = () => {
        if (goalTitle) {
            props.goalAddedAction({
                title: goalTitle,
                id: props.goals.length,
                deadline: new Date(),
                repeated: false,
                done: false
            })
        }
    }
    return (
        <div className="add-goal card">
            <div className="add-goal-title">
                <input className="input" value={goalTitle} onChange={onChange}/>
            </div>
            <div className="add-goal-info-tab">
                <div>
                    Deadline
                    <input className="add-goal-info-tab__datetime-input" type="datetime-local"/>
                </div>
                <div>
                    <input className="add-goal-info-tab__repeated-checkbox" type="checkbox"/>
                    Repeated
                </div>
            </div>
                <button className="add-goal-button" onClick={handleGoalAdded}>Add</button>
        </div>
    )
}
export default connector(AddGoalCardComponent);
