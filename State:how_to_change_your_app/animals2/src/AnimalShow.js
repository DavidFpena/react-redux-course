import { useState } from "react";
import Heart from "./components/Heart";
import dog from "./svg/dog.svg";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";


function AnimalShow({ type }) {
  const [clickNumber, setClickNumber] = useState(0)

  const svgMap = {
    dog, bird, cat, cow, gator, horse
  };

  const handleClick = () => {
    setClickNumber(clickNumber + 1)
  };

  return(
    <div onClick={handleClick}>
      <img src= {svgMap[type]}/>
      <Heart imgWidth= {clickNumber} />
    </div>

  )
}


export default AnimalShow;
