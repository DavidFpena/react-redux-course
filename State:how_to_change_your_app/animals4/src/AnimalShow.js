import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svg = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart
}



function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const clickHandle = () => {
    setClicks(clicks + 1);
  };

  return(
    <div>
      <div onClick={clickHandle}>
        <img src={svg[type]} alt='animal'/>
        <img src={heart} alt='heart' style={{ width:( 10 + 10 * clicks + 'px')}}/>
      </div>
    </div>
  )
}

export default AnimalShow;
