import { useState } from 'react';
import '../css/Search.css';
import { API, TYPES } from '../utils/utils';

export default function Search({ pokemonNames, setSearchResults, setCurrentPage }) {
	const [searchText, setSearchText] = useState('');
	const [selectedTypes, setSelectedTypes] = useState(Array(18).fill(null));

	const handleCheckboxChange = (idx) => {
		const newCheckboxes = [...selectedTypes];
		newCheckboxes[idx] = newCheckboxes[idx] ? null : Object.keys(TYPES)[idx];
		setSelectedTypes(newCheckboxes);
	}

	const handleSearchClick = (e) => {
		e.preventDefault();
		let nameFiltered = pokemonNames.filter(name => name.includes(searchText.trim().toLowerCase()));
		if (!selectedTypes.some(type => type)) {
			console.log(nameFiltered);
			setSearchResults(nameFiltered);
			setCurrentPage(0);
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
					});
					setSearchResults(results);
					setCurrentPage(0);
				});
		}
	}

	return (
		<div className="Search">
			<form>
				<h2>Procurar Pokémons</h2>
				<label className="heading">
					Nome:
					<input
						type="text"
						value={searchText}
						placeholder='Ex: blastoise'
						onInput={(e) => setSearchText(e.target.value)}
					/>
				</label>
				<label className="heading">Tipo:</label>
				<div className="search-types">
					{Object.keys(TYPES).map((type, idx) =>
						<label style={{ color: TYPES[type].color }} key={idx}>
							<input
								type="checkbox"
								name={type.name}
								checked={selectedTypes[idx] !== null}
								onChange={() => handleCheckboxChange(idx)}
							/>
							{TYPES[type].displayName}
						</label>)
					}
				</div>
				<button
					onClick={handleSearchClick}
				>Procurar</button>
			</form>
		</div>
	);
}