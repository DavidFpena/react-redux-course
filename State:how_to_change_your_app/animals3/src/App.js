import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'


const randomAnimal = () => {
  const animals = ['horse', 'cow', 'dog', 'bird', 'gator', 'cat'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
    console.log(animals);
  }

  const renderedAnimals = animals.map( (animal, index) => {
      return <AnimalShow type={animal} key={index} />
    })

  return(

    <div className="app">
      <h1 className="title">Animals</h1>
      <button className='add-animal-button' onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
