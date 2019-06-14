<template>
	<div id="mainArea">
		<NavBar />
		<IntroSegment />
		<HomePage />
		<ProjectsPage />
		<ContactPage />
	</div>
</template>

<script>
	import NavBar from "./components/layouts/NavBar.vue";
	import HomePage from "./components/layouts/HomePage.vue";
	import IntroSegment from "./components/layouts/IntroSegment.vue";
	import ProjectsPage from "./components/layouts/ProjectsPage.vue";
	import ContactPage from "./components/layouts/ContactPage.vue";

	export default {
		name: "app",
		components: {
			NavBar,
			HomePage,
			IntroSegment,
			ProjectsPage,
			ContactPage
		}
	};
</script>

<style lang="scss">
	#mainArea {
		display: flex;
		flex-direction: column;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0px;
		padding: 0px !important;
	}

	p {
		font-size: 16px;
	}

	#bar {
		height: 4px;
		width: 25%;
		border-style: hidden;
		background-color: black;
		padding: auto;
		margin: auto;
		margin-bottom: 50px;
	}
</style>
