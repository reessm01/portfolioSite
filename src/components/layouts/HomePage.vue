<template>
	<b-container
	 class="about"
	 fluid
	>
		<div id="about" />
		<h2>ABOUT</h2>
		<div id="bar" />
		<b-row id="icons">
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
			 align-self="center"
			>
				<img
				 id="portrait"
				 :src="require('../../../src/assets/boat me.jpg')"
				>
				<h2>Who's this guy?</h2>
				<div id="detailsMe">
				<p>
					I'm passionate about learning the intricacies of systems and figuring out how to 
					iterate upon them. It is through software development that I am taking my passion 
					to the next level and am applying it in meaningful and tangible ways.
				</p>
				<p>
					If you're developing something that is solving difficult problems that makes
					a net positive difference I want to be a part of it.
				</p>
				</div>
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

	#portrait {
		width: 40%;
		height: auto;
		border-radius: 50%;
		margin: 20px 0px 20px 0px;
		align-self: center;
	}

	#aboutMe {
		word-wrap: normal;
		font-size: 12px;
		text-align: center;
		margin: auto;
	}

	p {
		margin-left: 20px;
		margin-right: 20px;
	}

	.about {
		margin-top: 30px;
		margin-bottom: 30px;
		padding: 10px;
	}

	#icons {
		padding:10px;
	}

	#detailsMe{
		display: flex;
		flex-direction: column;
		justify-items: flex-start;
		text-align: start;
	}
</style>