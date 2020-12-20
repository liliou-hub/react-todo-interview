import React from "react";
import { Badge } from "react-bootstrap";

// On a ici le component qui affiche la liste de toutes les Tasks, simplement ajoutées et/ou modifiées
//Permet de selectionner une Task pour la modifier ou la supprimer 

function TaskInfo(props) {
  return (
    <div className="info" onClick={props.onClick}>       
          <b >
            <Badge variant="info">?</Badge>
            {props.task.name}
          </b>     
    </div>
  );
}

export default TaskInfo;
