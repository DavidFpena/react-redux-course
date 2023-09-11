import heart from '../svg/heart.svg'

function Heart({ imgWidth }) {

  return (
    <div>
      <img src={heart} style= {{width: 10 + 10 * imgWidth + 'px'}}/>
    </div>
  )
}

export default Heart;
