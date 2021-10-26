import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetail.css";

const TaskDetail = () => {
    const params = useParams();
    const history = useHistory();

    const hancleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container">
                <Button onClick={hancleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-detail-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, obcaecati
                    ipsum. Ut necessitatibus esse a?
                </p>
            </div>
        </>
    );
};

export default TaskDetail;
