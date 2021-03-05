// It is your job to implement this. More info in README
import * as React from 'react'
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

export const HeroCard: React.FC<IHeroCardProps> = (hero: IHeroCardProps) => {
  return (
    <div>
      {hero.name}
    </div>
  )
}
