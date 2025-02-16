import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-light text-center" onClick={onStart}>
      <div>
        <h1 className="display-4 fw-bold">Welcome to GPA Calculator</h1>
        <p className="text-muted">Click anywhere to continue</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
