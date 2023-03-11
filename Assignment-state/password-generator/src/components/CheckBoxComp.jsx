import React from "react";

const CheckBoxComp = ({ label, onchange }) => {
  const style = {
    marginTop: "0.5rem",
    padding: "0.5rem",
    color: "rgb(26, 19, 19)",
    fontSize: "1.2rem",
    fontWeight: "700",
    display:"flex",
    alignItems:"center",
  };

  const labelStyle = {
    marginLeft: "1rem",
  };

  return (
    <>
      <div style={style}>
        <input
          style={{ width: "20px", height: "20px", border: "2px solid red" }}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={() => {
            onchange();
          }}
        />
        <label style={labelStyle}>{label}</label>
      </div>
    </>
  );
};

export default CheckBoxComp;