<template>
	<div>
		<b-navbar
		 fixed="top"
		 toggleable="lg"
		 type="dark"
		 variant="dark"
		>
			<b-navbar-brand>Scott Reese</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse
			 id="nav-collapse"
			 is-nav
			>
				<b-navbar-nav>
					<b-nav-item
					 href="#"
					 v-scroll-to="{el: '#home'}"
					>Home</b-nav-item>
					<b-nav-item
					 href="#"
					 v-scroll-to="{el: '#about', offset: -100}"
					>About</b-nav-item>
					<b-nav-item
					 href="#"
					 v-scroll-to="{el: '#projects', offset: -50}"
					>Portfolio</b-nav-item>
					<b-nav-item
					 href="#"
					 v-scroll-to="{el: '#contact'}"
					>Contact</b-nav-item>
				</b-navbar-nav>
			</b-collapse>

		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
		props: {}
	};
</script>

<style scoped>
</style>