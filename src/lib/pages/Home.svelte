<script lang="ts">
  import Anchor from "$lib/components/Anchor.svelte";
 
  let color = "text-grey-200";
  let hover = "sm:hover:text-primary-500";
 
</script>

<Anchor id="home" />
<div
  class="flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover page lg:bg-fixed bg-neutral-600 bg-blend-soft-light dark:bg-blend-soft-light dark:bg-neutral-700"
  id="bg"
>
  <div class="text-center">
    <h1 class="text-5xl m-6 {color} font-dark"> 🍕 Lets make some pizza! 🍕 </h1>
  </div>

</div>

<style>
  #bg {
    /* The image used background-image: url("/assets/images/background1.jpg"); */
    background-image: linear-gradient(217deg, rgb(255, 230, 0), rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, rgba(255, 0, 0, 0.8), rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, RGB(162, 122, 26), rgba(0,0,255,0) 70.71%);
    
  }

  .text-2{
  font-size: 1.8rem;  
  margin: 0rem;
  margin-top: 0rem;
  font-weight: 200;
  line-height: 3rem;
  color:rgb(215, 219, 223);
 }    
 
  .subtitle {
    font-size: 1.8rem; 
     margin: 0rem;
    font-weight: 200;
    color:rgb(215, 219, 223);
    padding-left: 3vw;
    
  }
</style>
