import './AnimalShow.css'

import {useState} from "react";
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

type AnimalCardAtt ={
  type: string
  key: number
}

const svgMap: {[key: string]: any} = {
  bird, cat, cow, dog, gator, heart, horse
}

function AnimalShow(props: AnimalCardAtt) {
  const [clicks, setState] = useState(0)

  const handleClick = () => {
    setState(clicks + 1)
  }

  return (
    <div onClick={handleClick} className='animal-show'>
      <img className='animal' src={svgMap[props.type]} alt="animal"/>
      <img
        className='heart'
        src={heart}
        alt='heart'
        style={{width: 10 + 10 * clicks + 'px'}}
      />
    </div>
  )
}

export default AnimalShow
