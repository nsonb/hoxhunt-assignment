import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    height: 5rem;
    position: relative;
    border-radius: 8px;
    padding: .8rem;

    & .avatar {
        position: absolute;
        top: -4rem;
        left: -1rem;
        & img {
            width: 20rem;
            clip-path: circle(32.2% at 32% 50%);
            transform: translateX(-1rem);
        }
    }

    & .profile {
        margin-left: auto;
        background-color: beige;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 8px;

        &__name {
            text-align: right;
            font-size: 1.5rem;
            weight: 800;
        }
    }
`

// display hero avatar, name, hp, mp, weakness and strength 
const HeroProfile = (props: {name: string, hp: number, mp: number, weakness: string, resist: string, avatar: string}) => {
    const {name, hp, mp, weakness, resist, avatar} = props
    return (
        <Box>
            <div className="avatar">
                <img src={avatar} alt="hero avatar"/>
            </div>
            <div className="profile">
                <div className="profile__name">{name}</div>
                <div className="profile__hp">

                </div>
            </div>
        </Box>

    )
}

export default HeroProfile;