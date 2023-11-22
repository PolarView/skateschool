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
      <div>
        <iframe
          style={{
            border: "none",
            display: "block",
            width: "100%",
            height: "100%"
          }}
          src="https://rtsp.me/embed/G8G2ssks/"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default page;
