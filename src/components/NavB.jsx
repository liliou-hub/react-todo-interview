import React from "react";
import { Navbar } from "react-bootstrap";
import "../Css.css";
import TaskManager from "./TaskManager";

// On trouve ici le haut de la page avec le titre ainsi que le component "TaskManager"

function NavB() {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <div  className=" txt col sm={8}">
          <h1>React ToDo</h1>
        </div>
        <TaskManager className="txt col sm={4}" />
      </Navbar>
    </div>
  );
}

export default NavB;
