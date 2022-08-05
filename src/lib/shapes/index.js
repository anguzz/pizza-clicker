import Circle from './Circle.svelte';
import OppositeCircles from './OppositeCircles.svelte';
import Dots from './Dots.svelte';
import Cross from './Cross.svelte';
import QuarterCircle from './QuarterCircle.svelte';
import DiagonalSquare from './DiagonalSquare.svelte';
import HalfSquare from './HalfSquare.svelte';
import Mask from './Mask.svelte';

export const shapes = [
	Circle,
	OppositeCircles,
	Dots,
	Cross,
	QuarterCircle,
	DiagonalSquare,
	HalfSquare
];

export const bigShapes = [
	Circle,
	OppositeCircles,
	Cross,
	QuarterCircle,
	DiagonalSquare,
	HalfSquare
];

export { Mask };
