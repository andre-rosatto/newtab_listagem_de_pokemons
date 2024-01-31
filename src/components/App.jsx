import { useEffect, useState } from 'react';
import '../css/App.css';
import Card from './Card';
import Search from './Search';
import { API } from '../utils/utils';
import PageControls from './PageControls';

export default function App() {
	const [currentPage, setCurrentPage] = useState(0);
	const [pokemonNames, setPokemonNames] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		fetch(`${API}pokemon?limit=10000`)
			.then(res => res.json())
			.then(data => {
				const names = data.results.map(item => item.name);
				setPokemonNames(names);
				setSearchResults(names);
			});
	}, []);

	return (
		<div className="App">
			<section>
				<PageControls
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					resultsCount={searchResults.length}
				></PageControls>
				<div className="cards-wrapper">
					{searchResults.slice(currentPage * 10, currentPage * 10 + 10).map((item, idx) =>
						<Card
							key={idx}
							pokemonName={item}
						></Card>)
					}
				</div>
			</section>
			<Search
				pokemonNames={pokemonNames}
				setSearchResults={setSearchResults}
				setCurrentPage={setCurrentPage}
			></Search>
		</div>
	);
}