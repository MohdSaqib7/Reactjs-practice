import React from "react";
import './style.css'

const PasswordGenerator = ({
  handelText,
  setHandelText,
  copied,
  setCopied,
}) => {
  return (
    <>
      <div className="passwordGenerator">
        <input className="passwordScreen"  type="text" value={handelText} onChange={(e) => {setHandelText(e.target.value);}}/>
        <button
          style={
            copied
              ? {
                  width: "75px",
                  padding:"5px 0px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "lightgray",
                  color: "red",
                  fontSize: "1rem",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px black",
                }
              : {
                  width: "70px",
                  padding:"5px 0px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "lightblue",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px black",
                }
          }
          onClick={() => {
            if (handelText.length > 0) {
              console.log("handelText", handelText);
              navigator.clipboard.writeText(handelText);
              setCopied(true);
              setInterval(() => {
                setCopied(false);
              }, 3000);
            }
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </>
  );
};

export default PasswordGenerator;
