import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { HeroCard } from '../../components/HeroCard';
import { IHeroCardProps } from '../../type'

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgUrl
			description
			backStory
			attributes {
				strength
				intelligence
				stamina
				healthpoints
				mana
				agility
				speed
				resistance
				weakness
			}
			skills {
				name
				damage
				element
			}
		}
	}
`

interface IHeroIndexProps {}
// styling for the box that contains the hero card.
const HeroCardContainer = styled.div`
	display: flex;
	padding: 2rem 3rem;
	align-self: center;
	box-sizing: border-box;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 1172px) {
		padding: 2rem 1rem;
		max-width: 68rem;
	}

	@media (max-width: 1028px) {
		padding: 2rem .2rem;
		flex-direction: column;
	}
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
	const { data, error, loading } = useQuery(HEROES_QUERY);

	const [ currentHover, setCurrentHover ] = React.useState<number | null >(null)
	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}

	return (
		<main style={{backgroundColor: '#FBFBFB', overflow: 'hidden'}}>
			<TopBar />
			<Hero />
			<Section
				heading={'Hunter Index'}
				paragraph={`
					Professor Hoax gave us this Hunter Index -tool 
					so we can see how our heroes manage against evildoers. 
					These are the brave and powerful heroes who have come
					to our aid.
				`}
			/>
			{/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
			<HeroCardContainer>
				{data.heroes.map((hero: IHeroCardProps, index: number) => {
					return (
						<HeroCard 
							key={hero.name} 
							hero = {hero} 
							index = {index} 
							setCurrentHover={setCurrentHover}
							dsplay = {
								/* check for screen width to decide whether the hero card will flip */
								window.screen.width > 1028 ?
									(currentHover === null? 'equal' : 
										(index === currentHover? 'main' : 'sub')) :
									'full'
							}
						/>
					)
				})}
			</HeroCardContainer>
			<Footer />
		</main>
	);
};
