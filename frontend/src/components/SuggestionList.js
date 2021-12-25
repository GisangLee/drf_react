import React from "react";
import { Card } from 'antd';
import Suggestion from "./Suggestion";
import "./SuggestionList.scss";

const SuggestionList = ({style}) => {
    return(
        <div style={style}>
            <Card title="추천친구" size="small">
               <Suggestion/>
            </Card>
        </div>
    )
};

export default SuggestionList;