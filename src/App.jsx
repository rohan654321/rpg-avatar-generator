import React, { useState } from "react";
import AvatarCanvas from "./components/AvatarCanvas";
import RPGGenerator from "./components/RPGGenerator";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [character, setCharacter] = useState(null);

  const handleGenerate = (stats) => {
    setCharacter(stats);
    // Pass the stats to Phaser for customization if needed
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <RPGGenerator onGenerate={handleGenerate} />
        <AvatarCanvas />
      </main>
      {character && (
        <div className="character-display">
          <h3>Character Details:</h3>
          <p>Strength: {character.strength}</p>
          <p>Agility: {character.agility}</p>
          <p>Intelligence: {character.intelligence}</p>
        </div>
      )}
    </div>
  );
}

export default App;
