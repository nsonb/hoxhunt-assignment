// It is your job to implement this. More info in README
import * as React from 'react'
import styled from 'styled-components';
import { usePalette } from 'react-palette';
// import component
import AttributeDsplay from './AttributeDsplay';
import HeroProfile from './HeroProfile';
import SkillDsplay from './SkillDsplay';

import { skill, IHeroCardProps} from '../../type'

const Container = styled.div`
  padding: 3rem;
  font-family: 'Montserrat';
  height: 40rem;
  border-radius: 8px;
  box-sizing: border-box;
  perspective: 100rem;
    -webkit-perspective: 100rem;
    -moz-perspective: 100rem;
  position: relative;
  cursor: pointer;
  transition: all 0.8s;
  min-width: 22rem;

  & .face {
    height: 40rem;
    width: 100%;
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0 , .4);
    backface-visibility: hidden;

    &__front {
      background-color: #1E145D;
      transition: all 0.5s;
      overflow: hidden;

      &--name {
        text-align: left;
        color: black;
        font-size: 1.75rem;
        padding: .5rem;
        padding-left: 1rem;
        position: absolute;
        left: 50%;
        top: .8rem;
        transform: translateX(-50%);
        width: 85%;
        z-index: 5;
        border-radius: 3px
      }

      &--backstory {
        position: absolute;
        bottom: .9rem;
        left: 50%;
        width: 40rem;
        font-size: 1rem;
        z-index: 5;
        padding: .8rem;
        border-radius: 5px;
        text-align: justify;
        text-justify: inter-word;
        transition: all 0.4s ease-in;
      }

      &--img {
        overflow: hidden;
        height: 100%;
        z-index: -5;
        
        & img {
          height: 100%;
          object-fit: cover;
          filter: saturate(0.6);
          transition: all 0.5s;
        }
      }

      &-flipped {
        transform: rotateY(-180deg);
      }
    }

    &__back {
      transform: rotateY(180deg);
      text-align: center;
      transition: all .8s;

      &--desc {
        display: inline-block;
        width: 82%;
        font-size: 1rem;
        z-index: 5;
        margin: .8rem;
        padding: .8rem;
        border-radius: 5px;
        text-align: justify;
        text-justify: inter-word;
        background-color: white;
      }


      &-flipped {
        transform: rotateY(0);
      }
    }
  } 
`
const AttributeBox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1rem;
  padding: 1.3rem 2rem;
  background-color: #1E145D;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: .8rem;
`
const HeroDescription = styled.div`
  color: white;
  text-align: justify; 
  padding: 1.3rem 2rem; 
  background-color: #1E145D;
  height: 5rem;
  font-size: .8rem;
  position: relative;
  margin-top: .2rem;
`

const Title = styled.div`
  position: absolute;
  top: -.8rem;
  left: 1rem;
  margin: 0;
  width: fit-content;
  text-align: left;
  padding: .3rem;
  background-color: #001147;
  color: #FC427B;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px white solid;
  font-size: 1rem;
  font-weight: bold;
`

const getWidth = (dsplay: string) => {
  switch (dsplay) {
    case 'main': return '50%' ;    
    case 'equal': return '30%';    
    case 'sub' : return '20%';    
    default: return '30%';  }
}

const getFilter = (dsplay: string) => {
  switch (dsplay) {
    case 'main': return 1 ;    
    case 'equal': return .6;    
    case 'sub' : return .1;    
    default: return .6;  }
}

export const HeroCard = (props: {
  hero: IHeroCardProps, 
  index: number, 
  dsplay: string, 
  setCurrentHover: React.Dispatch<React.SetStateAction<number | null>>
}) => {

  const [ flipped, setFlipped ] = React.useState(false)
  const { hero, index, dsplay, setCurrentHover } = props
  const { data, loading, error } = usePalette(hero.imgUrl)

  return (
    <Container onClick={() => {setFlipped(!flipped);setCurrentHover(null)}} style={{width: getWidth(dsplay)}}>
      {/* front face of the component */}
      <div 
        className= {`face face__front ${flipped? 'face__front-flipped' : ''}`}
        onMouseEnter = {() => {setCurrentHover(index)}}
        onMouseLeave = {() => {setCurrentHover(null)}}
      >
        <h1 className="face__front--name" style={{ backgroundColor: data.darkMuted+'A6', color: data.vibrant }}>
          {hero.name}
        </h1>
        <div className='face__front--img'>
          <img src={hero.imgUrl} alt="avatar of hero" style = {{filter: `saturate(${getFilter(dsplay)})`}}/>
        </div>
        <div 
          className="face__front--backstory" 
          style={{ 
            backgroundColor: data.darkVibrant+'F2', 
            color: 'white',
            opacity: dsplay === 'main' ? 1 : 0,
            visibility: dsplay === 'main' ? 'visible' : 'hidden',
            transform: dsplay === 'main' ? 'translate(-50%, 0)' : 'translate(-50%, 5rem)',
          }}
        >
          {hero.backStory}
        </div>
      </div>
      {/* back face of the component */}
      <div className={`face face__back ${flipped? 'face__back-flipped' : ''}`} style={{backgroundColor: '#001147'}}>
        <HeroProfile 
          name = {hero.name}
          avatar = {hero.imgUrl}
          hp = {hero.attributes.healthpoints}
          mp = {hero.attributes.mana}
          resist = {hero.attributes.resistance}
          weakness = {hero.attributes.weakness}
        ></HeroProfile>

        <HeroDescription>
          <Title>Description</Title>
          {hero.description}
        </HeroDescription>
          
        <AttributeBox>
          <Title>Attributes</Title>
          <AttributeDsplay name = 'Strength' value =  {hero.attributes.strength}/>
          <AttributeDsplay name = 'Agility' value =  {hero.attributes.agility}/>
          <AttributeDsplay name = 'Intelligence' value =  {hero.attributes.intelligence}/>
          <AttributeDsplay name = 'Speed' value =  {hero.attributes.speed}/>
          <AttributeDsplay name = 'Stamina' value =  {hero.attributes.stamina}/>
        </AttributeBox>

        <AttributeBox style={{paddingLeft: '.5rem', paddingRight: '.5rem'}}>
          <Title>Skills</Title>
          <div style={{}}>
            {hero.skills.map((s: skill) => {
              return <SkillDsplay skill = {s} key={s.name+s.element}/>
            })}
          </div>
          
        </AttributeBox>
      </div>
      
    </Container>
  )
}
