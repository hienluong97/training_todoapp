import React, { useState, useRef, useEffect } from "react";
import TextArea from "textarea-autosize-reactjs";
import "../common/components/_taskEditModal.scss";

/**
 *
 * @param {object} task
 * @param {function} setShowModal Close modal when cancel or finish editting
 * @param {function} handleEditTask  Handle when click edit icon
 * @property {fucntion} handleClickSaveBtn Handle save data  when finish editting
 * @returns  A modal to edit task title
 */
function TaskEditModal({ task, setShowModal, handleEditTask }) {
  const [inputValue, setInputValue] = useState(task.title);
  const inputRef = useRef();

  // Set cursor at the end of textarea when focus
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setSelectionRange(
      inputRef.current.value.length,
      inputRef.current.value.length
    );
  }, []);

  const handleClickSaveBtn = (id, data) => {
    handleEditTask(id, data);
    setShowModal(false);
  };

  return (
    <div className="taskEdit_modal">
      <div className="taskEdit_modal_inner">
        <TextArea
          className="taskEdit_title"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <div className="taskEdit_btn_group">
          <span
            className="taskEdit_btn btn_cancel"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </span>
          <span
            className="taskEdit_btn btn_save"
            onClick={() => {
              handleClickSaveBtn(task.id, inputValue);
            }}
          >
            Save
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskEditModal;
