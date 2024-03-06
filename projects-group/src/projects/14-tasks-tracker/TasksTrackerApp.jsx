import React, { useState } from "react";
import Title from "../components/Title";
import { TableStyle } from "./TableStyle";
import Task from "./Task";
import NewTask from "./NewTask";

export default function TasksTrackerApp() {
  const [newTask, setNewTask] = useState({
    date: "",
    type: "",
    completed: "",
  });

  const handleChangeDate = (e) => {
    setNewTask({ ...newTask, date: e.target.value });
  };

  const handleChangeType = (e) => {
    setNewTask({ ...newTask, type: e.target.value });
  };

  const addNewTask = () => {
    setTaskList([...taskList, { date: newTask.date, type: newTask.type }]);
  };

  const handleCompleted = (e) => {
    e.target.classList.toggle("completed");
    console.log("yes");
  };

  const handleDelete = (e) => {
    window.confirm("Delete this Task?") && e.target.parentElement.remove();
  };

  let tasks = [{ date: "", type: "" }];

  const [taskList, setTaskList] = useState(tasks);

  return (
    <>
      <Title text={"Tasks Tracker"} />
      <TableStyle>
        <ul className="table-head">
          <li>Date</li>
          <li>Task</li>
        </ul>
        <Task
          date={newTask.date}
          setDate={handleChangeDate}
          type={newTask.type}
          setType={handleChangeType}
          onClick={addNewTask}
        />
        <ul className="table-row p-0">
          {taskList.map((task, index) => {
            return task.date !== "" && task.type !== "" ? (
              <NewTask
                key={index}
                date={task.date}
                type={task.type}
                onTaskClick={handleCompleted}
                onDelete={handleDelete}
              />
            ) : null;
          })}
        </ul>
      </TableStyle>
    </>
  );
}
