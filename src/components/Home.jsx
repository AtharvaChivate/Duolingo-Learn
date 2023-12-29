import React from "react";
import InputGroup from "./InputGroup";
import Blob from "./Blob";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        <Blob />
        <InputGroup />
      </div>
    </div>
  );
};

export default Home;
