// It is your job to implement this. More info in README
import * as React from 'react'
interface skill {
  name: string
  damage: number
  element: string
}

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
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name }) => {
  return (
    <div>{name}</div>
  )
}
