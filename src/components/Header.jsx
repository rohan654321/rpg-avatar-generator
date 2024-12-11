import React from "react";
import "./Header.css"; // External CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">RPG Avatar Generator</h1>
        <p className="subtitle">
          Create unique RPG characters and design their avatars effortlessly!
        </p>
      </div>
    </header>
  );
};

export default Header;
