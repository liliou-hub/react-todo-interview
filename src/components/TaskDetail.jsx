import React from "react";

// On trouve ici le detail des Tasks ajoutées, modifiées ou supprimées
// Je n'ai pas encore reussi à changer l'id en un nombre entier (parsInt?) et dans l'ordre  d'ajout

function TaskDetail(props) {
  return (
    <div className="edit detail"  >
      <p>name: {props.task.name}</p>
      <p>id: {props.task.id}</p>
    </div>
  );
}
export default TaskDetail;
