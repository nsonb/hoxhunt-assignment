import React from 'react'
import styled from 'styled-components'
import { skill } from '../../type'

const Box = styled.div`
    width: 5.4rem;
    background-color: pink;
    height: 6rem;
    display: inline-block;
    margin: .5rem;
    border-radius: 8px;
    position: relative;
    & img {
        width: 2rem;
    }
    
`
const Name = styled.div`
    padding: .3rem;
    background-color: #FC427B;
    color:  #001147;
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px white solid;
    font-size: .8rem;
    font-weight: bold;
    width: 100%;
    height: 3.5rem;
    padding-top: 1rem;
`
const Dmg = styled.div`
    text-transform: uppercase;
    padding: .4rem;
    font-size: 1rem;
`
const Element = styled.div`
    border-radius: 4px;
    padding: .2rem;
    color: white;
    border: 1px white solid;
    width: 3.2rem;
    font-weight: bold;
    font-size: .6rem;
    position: absolute;
    bottom: -.5rem;
    left: 50%;
    transform: translateX(-50%)
`
const ElementDmg = styled.div`
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: white; 
    width: 1.6rem;
    height: 1.6rem;
    padding: .1rem;
    clip-path: circle(.8rem);
    display: flex;
    justify-content: center;
`
// decide which image to fetch based on the type of damage of the skill
const getImg = (element: string) => {
    switch(element) {
        case 'Fire': 
            return "public/img/fire.svg"
        case 'Psychic': 
            return "public/img/psychic.svg"
        case 'Physical':
            return "public/img/fist.svg"
        case 'Plasma':
            return "public/img/plasma.svg"
    }
}

// decide which color to use based on the type of damage of the skill
const getElementColor = (element: string) => {
    switch(element) {
        case 'Fire': 
            return "red"
        case 'Psychic': 
            return "purple"
        case 'Physical':
            return "grey"
        case 'Plasma':
            return "orange"
    }
}

// display the hero skill
const SkillDsplay = (props: {skill: skill}) => {
    const {skill} = props

    return (
        <Box>
            <ElementDmg style={{}}>
                <img src= {getImg(skill.element)} style={{display: 'block', width: '80%'}}/>
            </ElementDmg>
            <Name>{skill.name}</Name>
            <Dmg>{skill.damage}dmg</Dmg>
            <Element style={{backgroundColor: getElementColor(skill.element)}}>{skill.element}</Element>
        </Box>
    )
}

export default SkillDsplay