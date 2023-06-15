
// import React, { useState } from "react";

// const TodoCard = ({
//   todo,
//   handleDeleteTodo,
//   toggleCompleted,
//   handleUpdatedTodo,
// }) => {
//   // State variables for edit mode and updated todo
//   const [toggleEdit, setToggleEdit] = useState(false);
//   const [updatedTodo, setUpdatedTodo] = useState(todo.todo);

//   // Function to handle submitting the edited todo item
//   const handleEdit = () => {
//     handleUpdatedTodo(todo.date, updatedTodo); // Call the handleUpdatedTodo function with the todo date and updatedTodo
//     setToggleEdit(false); // Exit the edit mode
//   };

//   // Function to handle canceling the edit mode
//   const handleCancel = () => {
//     setUpdatedTodo(todo.todo); // Revert the updatedTodo to the original value
//     setToggleEdit(false); // Exit the edit mode
//   };

//   return (
//     <div className={`listItem`}>
//       <div>
//         {toggleEdit ? (
//           // Render an input field for editing the todo item
//           <input
//             type="text"
//             value={updatedTodo}
//             onChange={(e) => setUpdatedTodo(e.target.value)}
//           />
//         ) : (
//           // Render a span element for displaying the todo item or null
//           updatedTodo && (
//             <span
//               style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//             >
//               {updatedTodo}
//             </span>
//           )
//         )}
//       </div>

//       <div className="listItemInputs">
//         {!toggleEdit && (
//           // Render the checkbox only if not in edit mode
//           <input
//             type="checkbox"
//             id="my-check"
//             checked={todo.completed}
//             onChange={() => toggleCompleted(todo.date)}
//           />
//         )}

//         {toggleEdit ? (
//           // Render the Submit and Cancel buttons in edit mode
//           <>
//             <button className="submitButton" style={{ backgroundColor: "green" }} onClick={handleEdit}>
//               Submit
//             </button>
//             <button className="cancelButton" style={{ backgroundColor: "red" }} onClick={handleCancel}>
//               Cancel
//             </button>
//           </>
//         ) : (
//           // Render the Edit and Delete buttons when not in edit mode
//           <>
//             <button className="editButton" onClick={() => setToggleEdit(true)}>
//               Edit
//             </button>
//             <button
//               className="deleteButton"
//               onClick={() => handleDeleteTodo(todo.date)}
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoCard;

import React, { useState } from "react";

const TodoCard = ({
  todo, // The todo item passed as a prop
  handleDeleteTodo, // Function to handle deleting a todo item
  toggleCompleted, // Function to toggle the completion status of a todo item
  handleUpdatedTodo, // Function to handle updating a todo item
}) => {
  // State variables for edit mode and updated todo
  const [toggleEdit, setToggleEdit] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.todo);

  // Function to handle submitting the edited todo item
  const handleEdit = () => {
    handleUpdatedTodo(todo.date, updatedTodo); // Call the handleUpdatedTodo function with the todo date and updatedTodo
    setToggleEdit(false); // Exit the edit mode
  };

  // Function to handle canceling the edit mode
  const handleCancel = () => {
    setUpdatedTodo(todo.todo); // Revert the updatedTodo to the original value
    setToggleEdit(false); // Exit the edit mode
  };

  return (
    <div className={`listItem`}>
      <div>
        {toggleEdit ? (
          // Render an input field for editing the todo item
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        ) : (
          // Render a span element for displaying the todo item or null
          updatedTodo && (
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {updatedTodo}
            </span>
          )
        )}
      </div>

      <div className="listItemInputs">
        {!toggleEdit && (
          // Render the checkbox only if not in edit mode
          <input
            type="checkbox"
            id="my-check"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.date)}
          />
        )}

        {toggleEdit ? (
          // Render the Submit and Cancel buttons in edit mode
          <>
            <button
              className="submitButton"
              style={{ backgroundColor: "green" }}
              onClick={handleEdit}
            >
              Submit
            </button>
            <button
              className="cancelButton"
              style={{ backgroundColor: "red" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          // Render the Edit and Delete buttons when not in edit mode
          <>
            <button
              className="editButton"
              onClick={() => setToggleEdit(true)}
            >
              Edit
            </button>
            <button
              className="deleteButton"
              onClick={() => handleDeleteTodo(todo.date)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoCard;

