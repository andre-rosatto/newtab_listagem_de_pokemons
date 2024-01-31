import { useEffect, useState } from 'react';
import '../css/App.css';
import Card from './Card';
import Search from './Search';
import { API } from '../utils/utils';

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
			<Search
				pokemonNames={pokemonNames}
				setSearchResults={setSearchResults}
			></Search>
			<section>
				{searchResults.slice(currentPage * 10, currentPage * 10 + 10).map((item, idx) =>
					<Card key={idx} pokemonName={item}></Card>)
				}
			</section>
		</div>
	);
}