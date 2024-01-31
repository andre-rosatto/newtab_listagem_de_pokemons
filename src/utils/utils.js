// export const TYPES = [
// 	{ name: 'steel', displayName: 'Aço', color: '#aaaabb' },
// 	{ name: 'water', displayName: 'Água', color: '#3399ff' },
// 	{ name: 'dragon', displayName: 'Dragão', color: '#7766ee' },
// 	{ name: 'electric', displayName: 'Elétrico', color: '#ffcc33' },
// 	{ name: 'fairy', displayName: 'Fada', color: '#ee99ee' },
// 	{ name: 'ghost', displayName: 'Fantasma', color: '#6666bb' },
// 	{ name: 'fire', displayName: 'Fogo', color: '#ff4422' },
// 	{ name: 'ice', displayName: 'Gelo', color: '#66ccff' },
// 	{ name: 'bug', displayName: 'Inseto', color: '#aabb22' },
// 	{ name: 'fighting', displayName: 'Lutador', color: '#bb5544' },
// 	{ name: 'normal', displayName: 'Normal', color: '#aaaa99' },
// 	{ name: 'rock', displayName: 'Pedra', color: '#bbaa66' },
// 	{ name: 'grass', displayName: 'Planta', color: '#77cc55' },
// 	{ name: 'psychic', displayName: 'Psíquico', color: '#ff5599' },
// 	{ name: 'dark', displayName: 'Sombrio', color: '#775544' },
// 	{ name: 'ground', displayName: 'Terrestre', color: '#ddbb55' },
// 	{ name: 'poison', displayName: 'Venenoso', color: '#aa5599' },
// 	{ name: 'flying', displayName: 'Voador', color: '#8899ff' }
// ];

export const TYPES = {
	'steel': { displayName: 'Aço', color: '#aaaabb' },
	'water': { displayName: 'Água', color: '#3399ff' },
	'dragon': { displayName: 'Dragão', color: '#7766ee' },
	'electric': { displayName: 'Elétrico', color: '#ffcc33' },
	'fairy': { displayName: 'Fada', color: '#ee99ee' },
	'ghost': { displayName: 'Fantasma', color: '#6666bb' },
	'fire': { displayName: 'Fogo', color: '#ff4422' },
	'ice': { displayName: 'Gelo', color: '#66ccff' },
	'bug': { displayName: 'Inseto', color: '#aabb22' },
	'fighting': { displayName: 'Lutador', color: '#bb5544' },
	'normal': { displayName: 'Normal', color: '#aaaa99' },
	'rock': { displayName: 'Pedra', color: '#bbaa66' },
	'grass': { displayName: 'Planta', color: '#77cc55' },
	'psychic': { displayName: 'Psíquico', color: '#ff5599' },
	'dark': { displayName: 'Sombrio', color: '#775544' },
	'ground': { displayName: 'Terrestre', color: '#ddbb55' },
	'poison': { displayName: 'Venenoso', color: '#aa5599' },
	'flying': { displayName: 'Voador', color: '#8899ff' }
};

export const API = 'https://pokeapi.co/api/v2/';

// export function getCardColor(colorName) {
// 	return TYPES[TYPES.findIndex(type => type.name === colorName)].color;
// }

// export function getCardDisplayName(colorName) {
// 	return TYPES[TYPES.findIndex(type => type.name === colorName)].displayName;
// }