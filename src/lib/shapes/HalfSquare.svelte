<script>
	import { random } from '$lib/deps';
	
	export let size=0;
	export let foreground="";
	export let background="";
	export let x=0;
	export let y=0;

	let halfX = 2;
	let halfY = 2;
	if (random([0, 1])) {
		halfX = 1;
	} else {
		halfY = 1;
	}
</script>

<g class="half-square">
	<rect height={size} width={size} fill={background} {x} {y} />
	<rect height={size / halfX} width={size / halfY} fill={foreground} {x} {y} />
</g>
