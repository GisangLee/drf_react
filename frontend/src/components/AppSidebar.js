import React from "react";
import "./AppSidebar.scss";
import StoryList from "./StoryList";
import SuggestionList from "./SuggestionList";

const AppSidebar = () => {
    return(
        <div className="sidebar">
            <StoryList style={{marginBottom:'1rem'}}/>
            <SuggestionList style={{marginBottom:'1rem'}}/>
        </div>
    )
}

export default AppSidebar;