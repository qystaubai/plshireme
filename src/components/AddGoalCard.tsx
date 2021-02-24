import React, {ReactElement, useState} from "react";
import {connect, ConnectedProps} from "react-redux";
import {goalAddedAction} from "../actions/actions";
import {State} from "../types/types";
import {Goal} from "../types/types";

const mapStateToProps = (state: State) => ({goals: state.goals});
const mapDispatchToProps = {
    goalAddedAction
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export const AddGoalCardComponent: React.FC<Props> = (props): ReactElement => {

    const emptyGoal: Goal = {
        id: -1,
        title: "",
        deadline: new Date(),
        done: false,
        repeated: false
    }

    const [goal, setGoal] = useState<Goal>(emptyGoal);
    const [showForm, setShowForm] = useState<boolean>(false);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {

        if (e.currentTarget.name === "deadline") {
            setGoal({
                ...goal,
                [e.currentTarget.name]: new Date(e.currentTarget.value)
            })

        } else if ( e.currentTarget.name === "repeated") {
            setGoal({
                ...goal,
                repeated: !goal.repeated
            })
        } else {
            setGoal({
                ...goal,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }
    }

    const handleGoalAdded = () => {
        goal.id = props.goals[props.goals.length - 1].id + 1;

        if (goal && goal.id !== -1) {
            props.goalAddedAction(goal)
        }
        setGoal(emptyGoal);
        setShowForm(!showForm);
    }
    return (
        <div className="add-goal card">
            <div className={`add-goal__open-form ${showForm? "hidden": ""}`}>
                <button className="add-goal__button" onClick={()=> setShowForm(!showForm)}>+</button>
            </div>
            <div className={`add-goal__form ${showForm? "": "hidden"}`}>
            <div className="add-goal__title">
                <input name="title" className="add-goal__title-input" value={goal.title} onChange={onChange}/>
            </div>
            <div className="add-goal__info-tab">
                <div>
                    Deadline
                    <input name="deadline" className="add-goal__datetime-input" value={goal.deadline.toISOString().slice(0,-8)} onChange={onChange} type="datetime-local"/>
                </div>
                <div>
                    Repeated
                    <input name="repeated"  className="add-goal__repeated-checkbox" value={goal.repeated? "on": "off"} onChange={onChange} type="checkbox"/>
                </div>
            </div>
                <button disabled={!goal.title} className="add-goal__button" onClick={handleGoalAdded}>Add</button>
            </div>
        </div>
    )
}
export default connector(AddGoalCardComponent);
