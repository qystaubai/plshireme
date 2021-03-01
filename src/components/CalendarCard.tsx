import React, {useState} from "react";
import {Goal} from "../types/types";

export const CalendarCardComponent: React.FC<Goal> = (goal) => {
    // number of days shown on one screen - scale
    const [calendarLength, setCalendarLength] = useState<number>(2);

    const goalWidth = (goal.deadline.valueOf() - new Date().valueOf())/1728000

    const style = {
        display: `${(goalWidth > 0)? "": "none"}`,
        width: `${goalWidth}%`
    }


    return (
        <div className="calendar-card card" style={style}>
            <div className="calendar-title">
                {goal.title}
            </div>
        </div>

    )
}
