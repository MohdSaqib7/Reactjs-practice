import React from "react";

const Length = ({ label, onchange }) => {
  return (
    <>
      <div style={{ marginTop: "1rem", display:"flex", justifyContent:"space-between"}}>
        <h2>Select Password length</h2>
        <label style={{ color: "white" }}>{label}</label>
        <input
          style={{
            border:"2px solid darkgray",
            padding: ".4rem 0.3rem",
            color: "black",
            fontSize: "1rem",
            fontWeight: "600",
            width:"150px",
            borderRadius:"8px"
          }}
          type="number"
          name=""
          id=""
          onChange={(e) => {
            onchange(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Length;