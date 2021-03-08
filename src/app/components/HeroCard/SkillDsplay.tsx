import React from 'react'
import styled from 'styled-components'
import { skill } from '../../type'


const Box = styled.div`
    width: 10rem;
    background-color: pink;
    height: 5rem;
    display: block;
    margin: .5rem;
    border-radius: 8px;

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
    height: 2.5rem;
`

const Dmg = styled.div`
    text-transform: uppercase;
`

const getImg = (element: string) => {
    switch(element) {
        case 'Fire': 
            return "http://localhost:8080/public/img/fire.svg"
        case 'Psychic': 
            return "http://localhost:8080/public/img/psychic.svg"
        case 'Physical':
            return "http://localhost:8080/public/img/fist.svg"
        case 'Plasma':
            return "http://localhost:8080/public/img/plasma.svg"
    }
}

const SkillDsplay = (props: {skill: skill}) => {
    const {skill} = props

    return (
        <Box>
            <Name>{skill.name}</Name>
            <Dmg>{skill.damage} dmg</Dmg>
            <img src= {getImg(skill.element)}/>
            <div>{skill.element}</div>
                
        
        </Box>
    )
}

export default SkillDsplay