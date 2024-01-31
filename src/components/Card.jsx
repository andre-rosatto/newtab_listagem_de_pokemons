import { useEffect, useState } from "react";
import { API, getCardColor, getCardDisplayName } from "../utils/utils";
import '../css/Card.css';

export default function Card({ pokemonName }) {
	const [pokemonData, setPokemonData] = useState();

	useEffect(() => {
		fetch(`${API}pokemon/${pokemonName}`)
			.then(res => res.json())
			.then(json => setPokemonData(json));
	}, [pokemonName]);

	return (
		<div className="Card" style={{
			backgroundColor: pokemonData && getCardColor(pokemonData.types[0].type.name),
			backgroundImage: `url('./assets/card_texture.jpg')`
		}}>
			<h2>{pokemonData && pokemonData.name}</h2>
			<img
				className="artwork"
				src={pokemonData && pokemonData.sprites.other['official-artwork'].front_default}
				alt={`imagem de ${pokemonData && pokemonData.name}`}
			/>
			<div className="info-wrapper">
				<p className="type-info" style={{
					backgroundImage: pokemonData && `url('./assets/icon_${pokemonData.types[0].type.name}.png')`
				}}>
					{pokemonData && getCardDisplayName(pokemonData.types[0].type.name)}
				</p>
				<p>{pokemonData && pokemonData.stats[0].base_stat}HP</p>
			</div>
			<div className="info-wrapper">
				<p>Peso: {pokemonData && `${pokemonData.weight / 10}kg`}</p>
				<p>Vel: {pokemonData && pokemonData.stats[5].base_stat}</p>
			</div>
			<div className="info-wrapper">
				<p>Atq: {pokemonData && pokemonData.stats[1].base_stat}</p>
				<p>Def: {pokemonData && pokemonData.stats[2].base_stat}</p>
			</div>
		</div>
	);
}