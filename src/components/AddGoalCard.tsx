import React, {ReactElement, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {goalAddedAction} from "../actions/actions";
import {Goal} from "../types/types";
import {selectGoals} from "../selectors/selectors";

export const AddGoalCardComponent: React.FC = (): ReactElement => {

    const goals = useSelector(selectGoals);
    const dispatch = useDispatch();

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
            console.log(new Date(e.currentTarget.value))
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
        goal.id = goals[goals.length - 1].id + 1;

        if (goal && goal.id !== -1) {
            dispatch(goalAddedAction(goal));
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
                    <input name="deadline"
                           className="add-goal__datetime-input"
                           value={
                               new Date(goal.deadline.valueOf() - (new Date().getTimezoneOffset() * 60000))
                                   .toISOString()
                                   .slice(0, -8)
                           }
                           min={new Date().toISOString().slice(0, -8)}
                           max={
                               new Date(new Date()
                                   .setMonth(new Date().getMonth() + 1))
                                   .toISOString()
                                   .slice(0, -8)
                           }
                           onChange={onChange}
                           type="datetime-local"/>
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
export default AddGoalCardComponent;
