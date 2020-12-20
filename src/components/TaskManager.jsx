import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import "../Css.css";

// On trouve dans ce component le compte des Tasks

function TaskManager() {

  let tasks = useSelector((state) => state);
  
  return (
    <Badge pill variant="info">
      <div className="txt my-4">

        <p>Tasks Count</p>
        {tasks.length}
        
      </div>
    </Badge>
  );
}

export default TaskManager;
