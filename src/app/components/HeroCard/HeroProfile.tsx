import React from 'react';
import styled from 'styled-components';
import { usePalette } from 'react-palette';

const Box = styled.div`
    width: 100%;
    height: 8rem;
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
        height: 100%;
        width: 100%;
        padding: 0.2rem .5rem;
        box-sizing: border-box;
        border-radius: 8px;

        &__name {
            text-align: right;
            font-size: 2rem;
            font-weight: bold;
            padding: .8rem;
            border-radius: 8px;
        }

        &__points {
            margin-left: auto;
            margin-right: 1rem;
            width: 60%;
            height: 1.6rem;
            
            &--slider {
                border-sizing: border-box;
                position: relative;
                width: 100%;
                margin-top: 4px;
                height: 100%;
                border-radius: 3px;
                display: block;
                text-align: right;
                padding: .2rem;
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
                padding: 0.4rem;
                display: block;
                height: 100%;
                text-align: justify;
                color: white;
                position: absolute;
                top: 50%;
                right: .2rem;
                transform: translateY(-50%);
            }
        }
    }
`

// display hero avatar, name, hp, mp, weakness and strength 
const HeroProfile = (props: {name: string, hp: number, mp: number, weakness: string, resist: string, avatar: string}) => {
    const {name, hp, mp, weakness, resist, avatar} = props
    const { data, loading, error } = usePalette(avatar)

    return (
        <Box>
            <div className="avatar">
                <img src={avatar} alt="hero avatar"/>
            </div>
            <div className="profile">
                <div className="profile__name" style={{ backgroundColor: data.darkVibrant+'A6', color: data.vibrant }}>{name}</div>
                <div className="profile__points">
                    <div className="profile__points--slider">
                        <div className="profile__points--value" style={{width: `${hp/1000 * 100}%` , backgroundColor: '#FC427B'}}/>
                        <div className="profile__points--dsplay">{hp} hp</div>
                    </div>
                </div>
                <div className="profile__points">
                    <div className="profile__points--slider">
                        <div className="profile__points--value" style={{width: `${mp/20000 * 100}%` , backgroundColor: '#1E145D'}}/>
                        <div className="profile__points--dsplay">{mp} mp</div>
                    </div>
                </div>
            </div>
        </Box>

    )
}

export default HeroProfile;