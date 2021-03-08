// interface for skill for hero
export interface skill {
    name: string
    damage: number
    element: string
}
  // interface for hero
export interface IHeroCardProps {
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