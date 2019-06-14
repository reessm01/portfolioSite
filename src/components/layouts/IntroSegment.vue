<template>
	<b-container
	 fluid
	 id="home"
	 :style="cssProps"
	>
		<img
		 id="image"
		 :src="require('../../../src/assets/Data-Still.mov.gif')"
		>
		<div id="buttonCont">
			<p>Hello, I'm Scott Reese</p>
			<p>I'm a Jr Software Developer</p>
			<b-button
			 v-scroll-to="{el: '#about', offset: -100}"
			 variant="light"
			 id="button"
			>
				View my work
			</b-button>
		</div>
	</b-container>
</template>

<script>
	export default {
		name: "IntroSegment",
		data: function() {
			return {
				windowHeight: window.innerHeight
			};
		},
		mounted() {
			this.$nextTick(function() {
				window.addEventListener("resize", this.updateWindowHeight);
			});
		},
		computed: {
			cssProps() {
				return {
					"--windowHeight": this.windowHeight + "px"
				};
			}
		},
		methods: {
			updateWindowHeight() {
				this.windowHeight = window.innerHeight;
			}
		}
	};
</script>

<style scoped>
	#home {
		padding: 0px;
		height: var(--windowHeight);
	}

	#buttonCont {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		position: absolute;
		width: 100%;
		height: 170px;
		top: calc(50% - 85px);
		color: white;
		background-color: rgba(0, 0, 0, 0.75);
	}

	p {
		font-size: 20px;
		font-weight: bold;
		margin: 0px;
	}

	button {
		width: 150px;
    margin: 20px;
    text-align: center;
    padding: auto;
	}

	#image {
		height: 100%;
		width: 100%;
	}
</style>