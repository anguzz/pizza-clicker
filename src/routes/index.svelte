<script lang="ts" context="module">
 
</script>

<script lang="ts">
  import SEO from "svelte-seo";
  import Home from "$lib/pages/Home.svelte";
  import Content from "$lib/pages/Content.svelte";
import Footer from "$lib/pages/Footer.svelte";

/* basic colors at  https://tailwindcss.com/docs/customizing-colors   more at  https://hypercolor.dev/   */ 
  let primaryBackground = "bg-gradient-to-r from-yellow-500 to-neutral-500";
  let neutralBackground = "bg-neutral-300 dark:bg-neutral-900";
</script>

<SEO
  title="Pizza Generator "
  description="Make some pizzas"
  canonical="site link"
/>

<Home />

<Content backgroundClass={primaryBackground} />

<Footer backgroundClass={neutralBackground} />

