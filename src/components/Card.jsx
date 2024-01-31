import { useEffect, useState } from "react";
import { API, TYPES } from "../utils/utils";
import '../css/Card.css';

export default function Card({ pokemonName }) {
	const [pokemonData, setPokemonData] = useState();

	useEffect(() => {
		fetch(`${API}pokemon/${pokemonName}`)
			.then(res => res.json())
			.then(json => setPokemonData(json));
	}, [pokemonName]);

	const types = pokemonData?.types;
	return (
		<div className="Card" style={{
			backgroundColor: types && TYPES[types[0].type.name].color,
			backgroundImage: `url('./assets/card_texture.jpg')`
		}}>
			<h2 style={{ fontSize: pokemonData?.name.length <= 20 ? 18 : 14 }}>{pokemonData?.name}</h2>
			<div className="artwork-wrapper">
				<p>#{pokemonData?.id}</p>
				<img
					src={pokemonData?.sprites.other['official-artwork'].front_default || './assets/image_placeholder.png'}
					alt={`imagem de ${pokemonData?.name}`}
				/>
			</div>
			<div className="type-wrapper">
				{types?.map(type =>
					<p
						className="type-info"
						style={{ backgroundImage: `url('./assets/icon_${type.type.name}.png')` }}
						key={type.type.name}
					>
						{TYPES[type.type.name].displayName}
					</p>)
				}
			</div>
			<div className="info-wrapper">
				<p>Peso: {`${pokemonData?.weight / 10}kg`}</p>
				<p>Vel: {pokemonData?.stats[5].base_stat}</p>
			</div>
			<div className="info-wrapper">
				<p>Atq: {pokemonData?.stats[1].base_stat}</p>
				<p>Def: {pokemonData?.stats[2].base_stat}</p>
			</div>
		</div>
	);
}