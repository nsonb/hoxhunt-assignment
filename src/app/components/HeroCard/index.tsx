// It is your job to implement this. More info in README
import * as React from 'react'
import styled from 'styled-components';
import { usePalette } from 'react-palette'
// interface for skill for hero
interface skill {
  name: string
  damage: number
  element: string
}
// interface for hero
interface IHeroCardProps {
  name: string
	imgUrl: string
  description: string
  backStory: string
  attributes: {
    strength: number
    intelligence: number
    stamina: number
    healthpoints: number
    mana: number
    agility: number
    speed: number
    resistance: string
    weakness: string
  }
  skills: skill[]
}

const Container = styled.div`
  padding: 3rem;
  font-family: 'Montserrat';
  width: 30%;
  height: 40rem;
  border-radius: 8px;
  box-sizing: border-box;
  perspective: 100rem;
    -webkit-perspective: 100rem;
    -moz-perspective: 100rem;
  position: relative;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    width: 80%;
  }

  &:hover &>* {
    width: 5% !important;
    transform: translateY(-5rem);
  }

  & .face {
    height: 40rem;
    width: 100%;
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0 , .4);
    backface-visibility: hidden;
    overflow: hidden;

    &__front {
      background-color: #1E145D;
      transition: all 0.5s;

      &--name {
        text-align: left;
        color: black;
        font-size: 1.75rem;
        padding: .5rem;
        padding-left: 1rem;
        position: absolute;
        left: 50%;
        top: .8rem;
        transform: translateX( -50%);
        width: 80%;
        z-index: 5;
        border-radius: 3px
      }

      &--desc {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        font-size: 1rem;
        z-index: 5;
        padding: .5rem;
        border-radius: 5px;
        opacity: 0;
        visibility: 0;
      }

      &--img {
        object-fit: cover;
        overflow: hidden;
        height: 100%;
        z-index: -5;
        
        & img {
          height: 100%;
          filter: sepia(0.4);
          transition: all 0.5s;

          &:hover {
            filter: none;
          }
        }
      }

      &-flipped {
        transform: rotateY(-180deg);
      }
    }

    &__back {
      transform: rotateY(180deg);
      background-color: blue;
      transition: all 0.5s;
      &-flipped {
        transform: rotateY(0);
      }
    }
  } 
`

export const HeroCard: React.FC<IHeroCardProps> = (hero: IHeroCardProps) => {
  const [flipped, setFlipped] = React.useState(false)
  const { data, loading, error } = usePalette(hero.imgUrl)
  return (
    <Container onClick={() => {setFlipped(!flipped)}}>
      <div className= {`face face__front ${flipped? 'face__front-flipped' : ''}`}>
        <h1 className="face__front--name" style={{ backgroundColor: data.darkMuted+'A6', color: data.vibrant }}>
          {hero.name}
        </h1>
        <div className='face__front--img'>
          <img src={hero.imgUrl} alt="avatar of hero"/>
        </div>
        <div className="face__front--desc" style={{ backgroundColor: data.darkVibrant+'F2',color: 'white'}}>
          <p>{hero.backStory}</p>
        </div>
        <div style={{position: 'absolute', width: '100%', bottom: 0, padding: '1rem'}}>
          <button onClick = {() => {}}></button>
        </div>
        
      </div>
      <div className={`face face__back ${flipped? 'face__back-flipped' : ''}`}>

      </div>
      
    </Container>
  )
}
