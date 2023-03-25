// Node module
import React from "react";

const NotInit = () => {
  // Component: Displaying election not initialize message.
  return (
    <div className="container-item info">
      <center>
        <h3
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            // textDecoration: "underline",
            marginTop: "100px",
          }}
        >
          🚫 The Election is not started yet. 🚫
        </h3>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          ⏳ Please Wait.. ⏳
        </p>
      </center>
    </div>
  );
};
export default NotInit;
