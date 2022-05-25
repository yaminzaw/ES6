import React from "react";

const StudentInput = (props) => {
  let {
    id,
    name,
    email,
    phone,
    addStudent,
    handleChangeId,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
  } = props;
  return (
    <div>
      <div className="row">
        <div className="col">
          <label className="stdLabel">ID</label>
          <input
            className="stdInput"
            type="text"
            value={id}
            onChange={handleChangeId}
          />
        </div>
        <div className="col">
          <label className="stdLabel">Name</label>
          <input
            className="stdInput"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="col">
          <label className="stdLabel">Email</label>
          <input
            className="stdInput"
            type="text"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="col">
          <label className="stdLabel">PhoneNo</label>
          <input
            className="stdInput"
            type="text"
            value={phone}
            onChange={handleChangePhone}
          />
        </div>
        <div className="col">
          <div className="row"></div>
          <button className="btnAdd" onClick={addStudent}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentInput;
