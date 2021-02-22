import React from "react";
import BoardComponent from "../components/Board";
import {TopBarComponent} from "../components/TopBar";

export const MainPage: React.FC = () => (
    <div>
        <TopBarComponent/>
        <BoardComponent/>
    </div>
)
