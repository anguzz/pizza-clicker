<script context="module">
	let counter = 0;
</script>

<script>
	
	export let size=0;
	export let x=0;
	export let y=0;

	let id = `Mask${counter++}`;
</script>

<mask {id}>
	<rect width={size} height={size} fill="#fff" {x} {y} />
</mask>
<slot mask="url(#{id})" />
