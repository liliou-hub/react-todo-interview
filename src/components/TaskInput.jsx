import React, { useState } from "react";
import { addTask } from "../redux/actions";
import { Button } from "react-bootstrap";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

// Ce component sert à ajouter et enregistrer les Tasks 

function TaskInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2">
        
        <input
        className="col form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text "
        />

        <Button
            className="mx-2"
            variant="info"
          onClick={() => {
            dispatch(
              addTask({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          >Add
        </Button>

      </div>
    </div>
  );
}

export default TaskInput;
