<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Page from "$lib/components/Page.svelte";
  import Text from "$lib/components/Text.svelte";
  import { primaryBackground } from "$lib/utils/constants";

  export let backgroundClass = primaryBackground;

	import Grid from '$lib/components/Grid.svelte';
	import { random, colors} from '$lib/deps';
	import { getBackgroundColors } from '$lib/colors';

	let counter = 0;

	let colorPalette: any[] = [];
	/** @type {Dialog} */
	let dialog;

	regenerate();

	function regenerate() {
		counter++;
		newPalette();
	}

	function shuffle() {
		counter++;
	}

	function newPalette() {
		colorPalette = random(colors);
		const background = getBackgroundColors(colorPalette);
	}

	function setSeed() {
		regenerate();
	}

</script>  <!-- -----------------------------------END SCRIPT------------------------------------->

<Page id="Pizza" title=" " {backgroundClass}>
  
  <div class="container" style:--bg-inner={"#708090"} style:--bg-outer={"#181a1b"}>
    <div class="grid">
      <div class="top">
        <div class="colors">
          {#each colorPalette as color}
            <div class="palette" style:background-color={color} />
          {/each}
        </div>
        <form class="seed" on:submit|preventDefault={setSeed}>
  
        </form>
      </div>
      {#key counter}
        <Grid {colorPalette} />
      {/key}
    </div>
  </div>

  <div class="footer">
    <button class="regenerate-button" on:click={regenerate}>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      <span>color</span>
    </button>
  
    <button class="shuffle" on:click={shuffle}> shape </button>
  </div>









</Page>
<!-- -----------------------------------END PAGE ------------------------------------->
<style>
.seed {
		position: relative;
	}

	.top {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: start;
		justify-content: space-between;
	}

	

	.footer {
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	button {
		padding: 0.5rem;
		margin: 0;
		background: #ffffffcc;
		border: 0.5px solid #555555cc;
		line-height: 1;
		cursor: pointer;
		color: #333;
	}

	.footer button {
		font-weight: 600;
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}

	.regenerate-button {
		border-top-left-radius: 12px;
		margin-left: auto;
	}

	.regenerate-button svg {
		width: 1.25rem;
		transition: 0.3s ease-in-out transform;
	}

	.regenerate-button:hover svg {
		transform: rotate(-45deg);
	}

	:is(input, button):focus,
	:is(input, button):active {
		outline: 2px solid #f06;
	}

	.regenerate-button:focus svg,
	.regenerate-button:active svg {
		transform: rotate(-90deg);
	}

	.container {
		height: 100vh;
		padding: 1rem;
		background-image: radial-gradient(var(--bg-inner) 0%, var(--bg-outer) 100%);
	}

	.grid {
		display: grid;
		grid-template-rows: 5rem auto 2rem;
		height: 100%;
	}

	.grid > :global(*):not(.top) {
		
		grid-column: 1/2;
		grid-row: 2/3;
	}

	.colors {
		display: flex;
		border: 1px solid black;
	}

	.palette {
		height: 20px;
		width: 20px;
	}

</style>