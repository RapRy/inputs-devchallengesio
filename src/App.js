import React from "react";
import "./_app.css";
import Input from "./Input";

const App = () => {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>Default</p>
        <Input />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>with error</p>
        <Input error />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>disabled</p>
        <Input disabled />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>
          with text helper
        </p>
        <Input textHelper="Some interesting text" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>
          with text helper and error
        </p>
        <Input textHelper="Some interesting text" error />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>
          with start icon
        </p>
        <Input startIcon="face" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>with end icon</p>
        <Input endIcon="face" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>with value</p>
        <Input value="text" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>small size</p>
        <Input size="sm" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>medium size</p>
        <Input size="md" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>full width</p>
        <Input fullWidth />
      </div>

      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>
          with multiline and rows
        </p>
        <Input multiline rows="4" />
      </div>

      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: ".9rem", marginBottom: "10px" }}>
          different border color
        </p>
        <Input color="orange" />
      </div>
      <p style={{ marginTop: "20px", fontSize: "12px" }}>
        Created by Ralph - devChallenges.io
      </p>
    </>
  );
};

export default App;
