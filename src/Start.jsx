// Start.jsx

import React, { useState } from "react";

const Start = ({ onOpenClick }) => {
  const handleOpenClick = () => {
    onOpenClick();
  };

  return (
    <div className="start-page">
      Hey sweet ass ❤️ aka Rajeshwar
      <br/>
      <br/>
      <span className="pixelify-sans-1" onClick={handleOpenClick}>
      Click here when ready...
      </span>
    </div>
  );
};

export default Start;
