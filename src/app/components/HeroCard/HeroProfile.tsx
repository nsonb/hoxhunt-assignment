import React from 'react';
import styled from 'styled-components';
import { usePalette } from 'react-palette';

const Box = styled.div`
    width: 95%;
    height: 6rem;
    position: relative;
    border-radius: 8px;
    padding: .8rem .4rem;
    
    & .avatar {
        position: absolute;
        top: -5rem;
        left: -1rem;
        & img {
            width: 18rem;
            clip-path: circle(32.2% at 32% 50%);
            transform: translateX(-1rem);
        }
    }

    & .profile {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;

        &__name {
            text-align: right;
            font-size: 1.5rem;
            font-weight: bold;
            padding: .8rem;
            border-radius: 8px;
            margin-bottom: .2rem;
            width: 100%;
            
            @media (max-width: 1017px) {
                font-size: 1.2rem;
                width: 92%;
                padding-right: 3rem;
                border: 1px solid white;
            }
        }

        &__points {
            margin-left: auto;
            margin-right: 0;
            margin-bottom: .2rem;
            width: 60%;
            height: 1.2rem;

            &--slider {
                box-sizing: border-box;
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 8px;
                display: block;
                text-align: right;
            }

            &--value {
                height: 100%;
                text-align: right;
                border-radius: 8px;
                display: inline-block;
                text-align: right;
            }

            &--dsplay {
                box-sizing: border-box;
                display: block;
                text-align: justify;
                color: white;
                position: absolute;
                top: 50%;
                right: .2rem;
                transform: translateY(-50%);
                font-size: .6rem;
                text-transform: uppercase;
            }
        }
    }
`

// display hero avatar, name, hp, mp and strength; resist is taken but is not used yet.
// the slider is similar to AttributeDsplay slider.
const HeroProfile = (props: {name: string, hp: number, mp: number, weakness: string, resist: string, avatar: string}) => {
    const {name, hp, mp, weakness, resist, avatar} = props
    const { data, loading, error } = usePalette(avatar)

    return (
        <Box>
            <div className="avatar">
                <img src={avatar} alt="hero avatar"/>
            </div>
            <div className="profile">
                <div className="profile__name" style={{ backgroundColor: 'black', color: data.vibrant}}>{name}</div>
                <div className="profile__points">
                    <div className="profile__points--slider">
                        <div className="profile__points--value" style={{width: `${hp/1000 * 100}%` , backgroundColor: '#FC427B'}}/>
                        <div className="profile__points--dsplay">{hp} hp</div>
                    </div>
                </div>
                <div className="profile__points">
                    <div className="profile__points--slider">
                        <div className="profile__points--value" style={{width: `${mp/20000 * 100}%` , backgroundColor: '#E32FFF'}}/>
                        <div className="profile__points--dsplay">{mp} mp</div>
                    </div>
                </div>
            </div>
        </Box>

    )
}

export default HeroProfile;