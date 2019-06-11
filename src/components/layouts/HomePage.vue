<template>
	<b-container
	 class="center"
	 fluid
	 id="container"
	>
		<h2>ABOUT</h2>
		<div id="bar" />
		<b-row>
			<AboutCol
			 v-for="detail in aboutDetails"
			 :key="detail.id"
			 v-bind:title="detail.title"
			 v-bind:detail="detail.detail"
			 v-bind:src="detail.src"
			 v-bind:id="detail.id"
			/>
		</b-row>
		<b-row>
			<b-col
			 id="aboutMe"
			 md="6"
			 align-self="center"
			>
				<img
				 id="portrait"
				 :src="require('../../../src/assets/boat me.jpg')"
				>
				<h2>Who's this guy?</h2>
				<p>As a former manufacturing engineer I bring analytical prowess to software development.
					I don't write just clean, functional code I also excel at integrating beauty into my designs. <br>
					Let's collaborate and develop something awesome.</p>
			</b-col>

			<SkillBars />
		</b-row>
	</b-container>
</template>

<script>
	import AboutCol from "../AboutCol.vue";
	import SkillBars from "./SkillBars.vue";
	export default {
		name: "HomePage",
		components: {
			AboutCol,
			SkillBars
		},
		data: function() {
			return {
				windowWidth: window.innerWidth,
				aboutDetails: [
					{
						id: 0,
						title: "Efficient",
						detail: "Strong proficiency in learning and application.",
						src: require("../../../src/assets/thinking.png")
					},
					{
						id: 1,
						title: "Responsive",
						detail: "Mobile first design philosophy.",
						src: require("../../../src/assets/display-tablet-smartphone-cogwheel.png")
					},
					{
						id: 2,
						title: "Polished",
						detail: "Excellent at functional and attractive integration.",
						src: require("../../../src/assets/stats-on-a-screen.png")
					},
					{
						id: 3,
						title: "Full Stack",
						detail: "I'm passionate about front and back end engineering.",
						src: require("../../../src/assets/database.png")
					}
				]
			};
		},
		beforeMount() {
			window.addEventListener("resize", () => {
				this.windowWidth = window.innerWidth;
			});
		}
	};
</script>

<style scoped>
	#bar {
		height: 4px;
		width: 25%;
		border-style: hidden;
		background-color: black;
		padding: auto;
		margin: auto;
		margin-bottom: 50px;
	}
	#contain {
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		justify-items: center;
	}

	#portrait {
		width: 40%;
		height: auto;
		border-radius: 50%;
		margin: 20px 0px 20px 0px;
		align-self: center;
	}

	#aboutMe {
		width: 290px;
		word-wrap: normal;
		font-size: 12px;
		text-align: center;
		margin: auto;
	}

	p {
		margin-left: 20px;
		margin-right: 20px;
	}

	#container {
		margin-top: 70px;
	}
</style>