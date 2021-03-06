import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { HeroCard, IHeroCardProps } from '../../components/HeroCard';

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
`;
interface IHeroIndexProps {}
const HeroCardContainer = styled.div`
	display: flex;
	padding: 50px;
	align-self: center;
	
	max-width: 1150px;
	@media (min-width: 1400px) {
		margin-left: auto;
		margin-right: auto;
		flex-direction: row;
		justify-content: space-between
	}

	@media (max-width: 800px) {
		margin-left: auto;
		margin-right: auto;
		flex-direction: column;
		justify-content: space-between
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
		<main>
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
					console.log(hero)
					return (
						<HeroCard 
							key={hero.name} 
							hero = {hero} 
							index = {index} 
							setCurrentHover={setCurrentHover}
							dsplay = {currentHover === null? 'equal' : (index === currentHover? 'main' : 'sub')}
						/>
					)
				})}
			</HeroCardContainer>

			<Footer />
		</main>
	);
};
