import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";
import { Form } from "react-bootstrap";
import "../Css.css";
import TaskDetail from "./TaskDetail";


// On trouve dans ce component les buttons (et actions qui vont avec) "Edit/Update" et "delete, ainsi que le form pour changer et/ou effacer la ou les Tasks"
//On integre egalement le component "TaskDetail" ou on retrouve le detail des Tasks ajoutées, modifiées ou supprimées

function EditableTaskName(props) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.task.name);
  let dispatch = useDispatch();

  // console.log("props point task", props.task);
  // console.log("iiiiiiiiiiiiiiiiiiiiiiiiiid", task.id);
  // console.log("props task ", props.task !== {});
  // console.log("taaaask length", Object.keys(props.task).length);

  return (
    <div className="row justify-content-md-center">
      {Object.keys(props.task).length ? (
        <div>
          <div className="row">
            {/* <div>{props.task.id.length > 1 ? props.task.id[2] : props.task.id}</div> */}

            {editable ? (
              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder={props.task.name}
                    className="edit"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Form>
            ) : (
              <b>{props.task.name}</b>
            )}

            <button
              onClick={() => {
                dispatch(
                  updateTask({
                    ...props.task,
                    name: name,
                  })
                );
                if (editable) {
                  setName(props.task.name);
                }
                setEditable(!editable);
              }}
              className="btn btn-primary m-2"
            >
              {editable ? "Update" : "Edit"}
            </button>

            <button
              onClick={() => dispatch(deleteTask(props.task.id))}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
          </div>

          <TaskDetail key={props.task.id} task={props.task} />
        </div>
      ) : (
        <h4 className="edit">Select Task to Edit</h4>
      )}
    </div>
  );
}

export default EditableTaskName;
