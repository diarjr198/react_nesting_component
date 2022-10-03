import React from "react";

export default function ImageCard(props) {
  return (
    <div
      style={{
        width: props.width || "100%",
        height: props.height || "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        boxShadow: "0.5rem 0.6rem 0.8rem rgba(0,0,0,0.3)",
        borderRadius: 10,
        gap: 20,
      }}
    >
      {props.left} {props.right}
    </div>
  );
}
