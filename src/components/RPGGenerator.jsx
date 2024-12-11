import React, { useState } from "react";

const RPGGenerator = ({ onGenerate }) => {
  const [name, setName] = useState("");
  const [stats, setStats] = useState({
    strength: 10,
    agility: 10,
    intelligence: 10,
  });

  const randomizeStats = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/characters/random");
      const data = await response.json();
      setStats(data);
      onGenerate(data);
    } catch (err) {
      console.error("Failed to fetch random stats", err);
    }
  };

  return (
    <div className="rpg-generator">
      <h2>Create Your RPG Character</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button onClick={randomizeStats}>Generate Random Stats</button>
      <div>
        <p>Strength: {stats.strength}</p>
        <p>Agility: {stats.agility}</p>
        <p>Intelligence: {stats.intelligence}</p>
      </div>
    </div>
  );
};

export default RPGGenerator;
