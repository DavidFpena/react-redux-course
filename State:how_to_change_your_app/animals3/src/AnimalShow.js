import { useState } from 'react'
import bird from './svg (1)/bird.svg'
import cat from './svg (1)/cat.svg'
import cow from './svg (1)/cow.svg'
import dog from './svg (1)/dog.svg'
import gator from './svg (1)/gator.svg'
import horse from './svg (1)/horse.svg'
import heart from './svg (1)/heart.svg'
import './AnimalShow.css'

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0)

  const svgMap = {
    bird,
    cat,
    dog,
    cow,
    gator,
    horse
  }

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
      <div className='animalshow' onClick={handleClick}>
        <img className='animal' alt='animal' src={svgMap[type]}/>
        <img className='heart' alt='heart' src={heart} style={{width: 10 + 10 * clicks + 'px'}}/>
      </div>
  );
}

export default AnimalShow;
