import React, { useEffect, useState } from 'react';

const athletes1 = [
  { name: "Awanit", sport: "Tennis", age: 22, score: 85 },
 
];

const athletes2 = [
  { name: "Rahul", sport: "Football", age: 19, score: 88 },
 
];

const App = () => {
const [mergedAthletes, setMergedAthletes] = useState([]);
  const [filteredAthletes, setFilteredAthletes] = useState([]);
  const [firstTennisPlayer, setFirstTennisPlayer] = useState(null);
  const [hasHighScore, setHasHighScore] = useState(false);

  useEffect(() => {
   
    const mergedAthletes = [...athletes1, ...athletes2];
    console.log("Merged Athletes:", mergedAthletes);

    
    const adultAthletes = mergedAthletes.filter(athlete => athlete.age >= 18);

    const updatedAthletes = adultAthletes.map(athlete => ({
      ...athlete,
      score: athlete.score * 1.2,
    }));

    setFilteredAthletes(updatedAthletes);

   
    const tennisPlayer = updatedAthletes.find(athlete => athlete.sport === "Tennis");
    setFirstTennisPlayer(tennisPlayer);

    const highScoreExists = updatedAthletes.some(athlete => athlete.score > 90);
    setHasHighScore(highScoreExists);
  }, []);

  return (

    
    <div>
      <h1>Athletes</h1>
      <h1>Merged Athletes</h1>
      <h2>Filtered Athletes</h2>
      
      <ul>
        {mergedAthletes.map((athlete, index) => (
          <li key={index}>
            {athlete.name}, {athlete.sport}, {athlete.age}, Score: {athlete.score}
          </li>
        ))}
      </ul>
      <ul>
        {filteredAthletes.map((athlete, index) => (
          <li key={index}>
            {athlete.name}, {athlete.sport}, {athlete.age}, Score: {athlete.score.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>First Tennis Player</h2>
      {firstTennisPlayer ? (
        <p>{firstTennisPlayer.name} with score {firstTennisPlayer.score.toFixed(2)}</p>
      ) : (
        <p>No Tennis player found</p>
      )}

      <h2>Athlete with Score above 90?</h2>
      <p>{hasHighScore ? "Yes" : "No"}</p>
    </div>
  );
};

export default App;