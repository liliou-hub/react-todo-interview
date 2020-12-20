import React, { useState } from "react";
import TaskInfo from "./TaskInfo";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import EditableTaskName from "./EditableTaskName";
import "../Css.css";

// Ce component sert à afficher les Tasks ajoutées et ou modifiées
// On retrouve ici le component "TaskInfo" qui va nous permettre de selectionner une Task pour la modifier ou la supprimer 
// On retrouve ici le component "EditableTaskName" qui va nous permettre de modifider ou supprimer la Task selectionnée

function TaskList() {
  let tasks = useSelector((state) => state);
  const [currentTask, setCurrentTask] = useState({});
  console.log("current task", currentTask);

  return (
    <div>
      <h4 className="h4">Tasks</h4>

      <div className="row">
        <ListGroup className="col sm={3}">
          {tasks.map((task) => {
            return (
              <ListGroup.Item className="list">
                <TaskInfo
                  onClick={() => setCurrentTask(task)}
                  key={task.id}
                  task={task}
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        <EditableTaskName className="col sm={9}" task={currentTask} />
        
      </div>
    </div>
  );
}

export default TaskList;
