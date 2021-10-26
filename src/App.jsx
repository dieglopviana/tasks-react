import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

const App = () => {
    // let message = 'Hello World!!!';
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");

            setTasks(data);
        };

        fetchTasks();
    }, []);

    const handleTaskAddition = (taskTitle) => {
        const newTask = [
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                completed: false,
            },
        ];

        setTasks(newTask);
    };

    const handleTaskRemove = (taskId) => {
        const newTask = tasks.filter((task) => task.id !== taskId);

        setTasks(newTask);
    };

    const handleTaskClick = (taskId) => {
        const newTask = tasks.map((task) => {
            if (task.id === taskId) return { ...task, completed: !task.completed };

            return task;
        });

        setTasks(newTask);
    };

    return (
        <Router>
            <div className="container">
                <Header />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <>
                            <AddTask handleTaskAddition={handleTaskAddition} />
                            <Tasks
                                tasks={tasks}
                                handleTaskClick={handleTaskClick}
                                handleTaskRemove={handleTaskRemove}
                            />
                        </>
                    )}
                ></Route>

                <Route path="/:taskTitle" exact component={TaskDetail}></Route>
            </div>
        </Router>
    );
};

export default App;
