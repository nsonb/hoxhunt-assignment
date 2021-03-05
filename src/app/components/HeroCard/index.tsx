// It is your job to implement this. More info in README
import * as React from 'react'
import styled from 'styled-components';
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
  height: 40rem;
  width: 30%;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  perspective: 100rem;
    -webkit-perspective: 100rem;
    -moz-perspective: 100rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0 , .4);
  transition: all 0.4s;
  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0 , .8);
  }
  
  & .face {
    height: 40rem;
    width: 100%;
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    &__front {
      background-color: #1E145D;
      &--name{
        text-align: center;
        color: #E7305A;
        padding: .5rem;
      }
    }

    &__back {
      transform: rotateY(180deg);
      background-color: blue;
    }

    
  } 
`

export const HeroCard: React.FC<IHeroCardProps> = (hero: IHeroCardProps) => {
  return (
    <Container>
      <div className="face face__front">
        <h1 className="face__front--name">
          {hero.name}
        </h1> 
      </div>
      <div className="face face__back">

      </div>
      
    </Container>
  )
}
