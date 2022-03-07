import React, { useState } from "react";

import "./AddNewList.scss";

function AddNewList({ hideShow }) {
  return (
    <fieldset className={`${hideShow} addNewList`}>
      {console.log(hideShow)}
      <legend>Add new list</legend>
      <button className="btnR addNewList_btnClose">x</button>
      <input
        type="text"
        name="addList"
        id=""
        className="addNewList_inputField"
      />
      <button className="btnR addNewList_btn-submit">Create list</button>
    </fieldset>
  );
}

//   return (
//     <fieldset className={`${isActive ? "hide" : hideShow} addNewList`}>
//       {console.log(hideShow)}
//       <legend>Add new list</legend>
//       <button
//         className="btnR addNewList_btnClose"
//         onClick={() => {
//           setIsActive(!isActive);
//         }}
//       >
//         x
//       </button>
//       <input
//         type="text"
//         name="addList"
//         id=""
//         className="addNewList_inputField"
//       />
//       <button className="btnR addNewList_btn-submit">Create list</button>
//     </fieldset>
//   );
// }

export default AddNewList;
