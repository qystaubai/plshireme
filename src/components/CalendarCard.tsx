import React from "react";
import {Goal} from "../types/types";

export const CalendarCardComponent: React.FC<Goal> = (goal) => {

    const style = {
        marginRight: `${(new Date('February 27, 2021 03:24:00').valueOf() - goal.deadline.valueOf())/864000}px`

    }


    return (
        <div className="calendar-card card" style={style}>
            {goal.title}
            {goal.deadline.getDate()}
        </div>

    )
}
