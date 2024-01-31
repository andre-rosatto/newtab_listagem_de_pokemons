import { useState } from 'react';
import '../css/Search.css';
import { API, TYPES } from '../utils/utils';

export default function Search({ pokemonNames, setSearchResults }) {
	const [searchText, setSearchText] = useState('blastoise');
	const [selectedTypes, setSelectedTypes] = useState(Array(18).fill(null));

	const handleCheckboxChange = (idx) => {
		const newCheckboxes = [...selectedTypes];
		newCheckboxes[idx] = newCheckboxes[idx] ? null : TYPES[idx].name;
		setSelectedTypes(newCheckboxes);
	}

	const handleSearchClick = (e) => {
		e.preventDefault();
		let nameFiltered = pokemonNames.filter(name => name.includes(searchText.trim().toLowerCase()));
		if (!selectedTypes.some(type => type)) {
			console.log(nameFiltered);
			setSearchResults(nameFiltered);
			return;
		}
		const results = [];
		for (let i = 0; i < selectedTypes.length; i++) {
			if (!selectedTypes[i]) continue;
			fetch(`${API}type/${selectedTypes[i]}`)
				.then(res => res.json())
				.then(data => {
					data.pokemon.forEach(pokemon => {
						if (nameFiltered.indexOf(pokemon.pokemon.name) > -1 && results.indexOf(pokemon.pokemon.data) === -1) {
							results.push(pokemon.pokemon.name);
						}
					})
					console.log(results);
					setSearchResults(results);
				});
		}
	}

	return (
		<div className="Search">
			<form>
				<h2>Procurar Pokémons</h2>
				<label className="heading">
					Nome:
					<input type="text" value={searchText} onInput={(e) => setSearchText(e.target.value)} />
				</label>
				<label className="heading">Tipo:</label>
				<div className="search-types">
					{TYPES.map((item, idx) => <label style={{ color: item.color }} key={idx}><input type="checkbox" name={item.name} checked={selectedTypes[idx] !== null} onChange={() => handleCheckboxChange(idx)}></input>{item.displayName}</label>)}
				</div>
				<button
					disabled={!searchText.trim() && !selectedTypes.some(cb => cb)}
					onClick={handleSearchClick}
				>Procurar</button>
			</form>
		</div>
	);
}