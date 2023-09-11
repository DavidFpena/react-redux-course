import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ['horse', 'cow', 'gator', 'bird', 'dog', 'cat'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  })




  return(
  <div>
    <h1>hey</h1>
    <button onClick={handleClick}>add animals</button>
    <div>{renderedAnimals}</div>
  </div>
  );
}

export default App;
