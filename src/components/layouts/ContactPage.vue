<template>
	<b-container
	 fluid
	 id="contact"
	>
		<h2>Contact</h2>
		<div id="bar" />
		<p>
			<a href="mailto:scott_reese@pm.me">Email</a><br>
			<a href="tel:574-400-9812">574-400-9812</a><br>
            <a href="https://github.com/reessm01">Github</a><br>
			<a href="https://www.linkedin.com/in/scottmreese">LinkedIn</a><br>
			<a href="https://twitter.com/scotty_reese">Twitter</a><br>
		</p>
	</b-container>
</template>

<script>
	export default {
		name: "ContactPage"
	};
</script>

<style scoped>
	#bar {
		height: 4px;
		width: 25%;
		background-color: black;
		margin-bottom: 50px;
	}

	#contact {
		background-color: #f0f0f0;
		padding: 20px;
	}

	h2 {
		margin-top: 30px;
	}
</style>
