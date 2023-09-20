import { useState } from "react";
import AnimalShow from "./AnimalShow";

const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

const randomAnimal = () => {
  return animals[Math.floor(Math.random() * animals.length)]
};


function App() {
  const [animals, setAnimals] = useState([])

  const clickHandle = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index}/>
    });

  return(
    <div>
      <button onClick={clickHandle}>
        Add Animal
      </button>
      <div>
        {renderedAnimals}
      </div>
    </div>
  )
}

export default App;


// 1. Create button that adds animals randomly to an array
//    -Add button to App
//    -Create array (animals) of animals that could be added
//    -Create function that chooses randomly an animal out of the array animals
//    -Create an empty array (animals) using the useState
//    -Add an event listener that handles the click onClick = {clickHandle}
//    -Create clickHandle function that modifies animals using setAnimals to add random animals using func
// 2. Show one new random animal on screen when button clicked
//    -Create AnimalShow component and import to App
//    -Using map show one AnimalShow per element of the animals array
//    -Pass down as props the animal type to the AnimalShow component
//    -In the Animal show component import images and give to each image a key value
//    -Using props pass down each animal type value as a src of an img tag to show image on screen
// 3. Everytime user clicks on an animal that animal's heart increases in size
//    - Add img tag to AnimalShow with src of heart
//    - Create const of click using useState to keep track of how many clicks
//    - Add an onclick handler on div
//    - Make clickHandle increase number of clicks by 1
//    - Using style on the heart img element give it a value in pixels that increases with # of clicks
//
//
