<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Page from "$lib/components/Page.svelte";
  import Text from "$lib/components/Text.svelte";
  import { primaryBackground } from "$lib/utils/constants";

  export let backgroundClass = primaryBackground;
	import "./pizza"

	let innerWidth = 0
	let innerHeight = 0
	$: mobile = innerWidth < 1080;

import {RedChiliSauce,
TomatoSauce,
Cheese,
Onion,
Olive,
RedChilli,
GreenChilli,
Tomato,
Mushroom,
Basil, 
RedPepper,
GreenPepper,
YellowPepper,
Broccoli,
Pineapple,
Jalepeno,
Salami,
Pepperoni, 
Bacon, 
Chicken, 
Ham, 
Sausage,
BlackPepper, 
CheeseSprinkles,
ClearCanvas, 
} from "./pizza";






</script>  <!-- -----------------------------------END SCRIPT------------------------------------->


<svelte:head>

</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight/>
<title>Content</title>
<Page id="Pizza" title=" " {backgroundClass}>
	
	

	<center>
	</center>
	
	<hr>
	<body>
	<center>
	
	<div class="paint">
	<canvas id="painter" width="700" height="700" style=
	"background-image:url(Pizza.png);	background-size:700px,700px;	background-repeat: no-repeat;	cursor:crosshair;	 background-color:#1b1b1b">
	</canvas> 
	</div>

	<br>
	<hr style="width:70%">
	<div id="pie">

	
	<div id="Sauce"><p>Sauce</p> </div>
	<button on:click={RedChiliSauce}> Chili Sauce</button>
	<button on:click={TomatoSauce}>Tomato Sauce</button>
	<button on:click={Cheese}>Cheese</button>

	<br>
	<div id="Veggies">	<p>Veggies</p> </div>
	<button on:click={Pineapple}> Pineapple</button>
	<button on:click={Jalepeno}>Jalepeno</button>
	<button on:click={Onion}> Onion</button>
	<button on:click={Olive}>Olive</button>
	<button on:click={RedChilli}> Red Chilli </button>
	<button on:click={GreenChilli}>Green Chilli</button>
	<button on:click={Tomato}>Tomato</button>
	<button on:click={Mushroom}> Mushroom</button>
	<button on:click={Basil}>Basil</button>
	<button on:click={RedPepper}>Red Bell Pepper</button>
	<button on:click={GreenPepper}>Green Bell Pepper</button>
	<button on:click={YellowPepper}>Yellow Bell Pepper</button>
	<button on:click={Broccoli}>Broccoli</button>
	
	<br>
	<div id="Meats"><p>Meat</p> </div>
	<button on:click={Pepperoni}>Pepperoni</button>
	<button on:click={Salami}>Salami</button>
	<button on:click={Bacon}>Bacon</button>
	<button on:click={Chicken}>Chicken</button>
	<button on:click={Ham}>Ham</button>
	<button on:click={Sausage}> Sausage</button>

	<br>
	<div id="Other"><p>Other</p> </div>
	<button on:click={BlackPepper}> Pepper</button>
	<button on:click={CheeseSprinkles}> Mozzarella </button>
	
	<br/>
	<div id="New"><p>Make a new Pizza!</p> </div>
	<button on:click={ClearCanvas}> New </button>
	
	









</Page>
<!-- -----------------------------------END PAGE ------------------------------------->
<style>

p {color:#1C0000;font-family: 'Fredoka One', cursive;}

button {
background:#272711;

padding:5px;
border:0px;
font-family: 'Roboto';
font-weight: 700;
font-size: 1.0rem;
color:rgb(245, 240, 240);
background-color: rgb(31, 32, 32);
border-radius: 10px;
}



</style>