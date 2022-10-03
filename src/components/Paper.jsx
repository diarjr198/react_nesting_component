import React from "react";

export default function Paper({ children, width, height }) {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "white",
        boxShadow: "0.5rem 0.6rem 0.8rem rgba(0,0,0,0.3)",
        width: width || "auto",
        height: height || "auto",
        margin: "20px 0px",
      }}
    >
      {children}
    </div>
  );
}
