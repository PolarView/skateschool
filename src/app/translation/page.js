import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <div style={{ width: "80%", height: "80%" }}>
        <iframe
          style={{
            border: "none",
            display: "block",
            width: "100%",
            height: "100%"
          }}
          src="https://rtsp.me/embed/KPbwo57M/"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default page;
