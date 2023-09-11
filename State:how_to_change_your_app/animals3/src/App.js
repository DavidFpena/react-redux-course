import { State, useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

const getRandomAnimal = () => {
  const animals = ['cow', 'bird', 'gator', 'cat', 'dog', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]

}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return(
    <div className='app'>
      <h1 className='title'>Animals</h1>
      <button className='addAnimalButton' onClick={handleClick}>Add new animal</button>
      <div className='list'>{renderedAnimals}</div>
    </div>
  )
}

export default App;



// 1. Button to add new animals
//    -Need a function to select random animal from a array of predetermined animals
//    -Need empty array where we will add new animals
//    -Need function called onClick of button to modify the empty array with State from React
//    -This will result in the following: everytime the user clicks on button array will have new random animal
// 2. Create AnimalShow component
//    -Need to show one AnimalShow for every element of the animals array with a function
//    -Need to pass down animal type value as prop to the component
//    -Need to receive props in component
//    -Give to every image a key value
//    -Find each image by using its key value using object
// 3. Heat that grows on every image click
//    -need to show heart on middle of each animal
//    -need to create a function that keeps track of number of clicks
//    -need to make image size grow when clicks increse
