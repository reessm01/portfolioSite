<template>
	<!-- Note to self: find time to refactor this component -->
	<b-container
	 centered
	 fluid
	 id="projects"
	>
		<h2>PROJECTS</h2>
		<div id="bar" />
		<b-card
		 no-body
		 class="tabContainer"
		>
			<b-tabs
			 pills
			 card
			 class="tabs"
			>
				<b-tab
				 title="React"
				 active
				>
					<h2>
						Front End Capstone UI
					</h2>
					<b-img
					 :src="require('../../../src/assets/flower_power.png')"
					 id="image"
					 fluid
					 name="flowerPower"
					 v-on:click="redirect($event)"
					/>
					<h3>
						Features
					</h3>
					<p>
						Save and load layouts<br>
						Get, Post and Patch API calls<br>
						Plant selection and filtering<br>
						Grid / layout resizing<br>
						Register and Login<br>
						Drag and drop<br>
						Info modals<br>
						SemanticUI
					</p>
					<div class="buttonPair">
						<b-button
						 variant="dark"
						 name="flowerPower"
						 v-on:click="redirect($event)"
						>
							Site
						</b-button>
						<b-button
						 variant="dark"
						 name="flowerRepo"
						 v-on:click="redirect($event)"
						>
							Repo
						</b-button>
					</div>
				</b-tab>
				<b-tab title="Node">
					<h2>Front End Capstone Back End</h2>
					<img
					 :src="require('../../../src/assets/node_example.png')"
					 id="image"
					 name="nodeExample"
					 v-on:click="redirect($event)"
					/>
					<h3>
						Features
					</h3>
					<p>
						Register and Login<br>
						PostgreSQL Google Cloud Database<br>
						Get, Post and Patch API calls<br>
						Sequelize data modeling<br>
						Swagger UI
					</p>
					<div class="buttonPair">
						<b-button
						 variant="dark"
						 name="nodeExample"
						 v-on:click="redirect($event)"
						>
							Site
						</b-button>
						<b-button
						 variant="dark"
						 name="nodeRepo"
						 v-on:click="redirect($event)"
						>
							Repo
						</b-button>
					</div>
				</b-tab>
				<b-tab title="Swift">
					<h2>Bokeh, Native iOS App</h2>
					<p>Under development</p>
					<b-img
					 :src="require('../../../src/assets/sample.gif')"
					 fluid
					 name="swiftExample"
					/>
					<h3>Concept</h3>
					<p>
						Finely tuned privacy controls<br>
						Core concept is to provide a social media alternative that does not sell user data<br>
						Chronological timeline with user defined filtering options<br>
						Photo sharing app monetized by monthly subscription<br>
						Successfully funded via KickStarter
					</p>
					<div class="buttonPair">
						<b-button
						 variant="dark"
						 name="swiftExample"
						 v-on:click="redirect($event)"
						>
							Site
						</b-button>
						<b-button
						 variant="dark"
						 disabled
						>
							Private
						</b-button>
					</div>
				</b-tab>
				<b-tab title="Vue">
					<h2>This site!</h2>
					<h3>Featuring</h3>
					<p>
						Auto scroll methods<br>
						Designed mobile first and therefore responsive<br>
						Passing data to child component props<br>
						Practice with component state<br>
						Integrated event handler<br>
						BootstrapVue<br>
					</p>
					<div class="buttonPair">
						<b-button
						 variant="dark"
						 disabled
						>
							Site
						</b-button>
						<b-button
						 variant="dark"
						 name="vueRepo"
						 v-on:click="redirect($event)"
						>
							Repo
						</b-button>
					</div>
				</b-tab>
				<b-tab title="Python">
					<h2>
						Coming soon...
					</h2>
				</b-tab>
			</b-tabs>
		</b-card>
	</b-container>
</template>

<script>
	export default {
		name: "ProjectsPage",
		data: function() {
			return {
				flowerPower: "https://front-end-capstone-project.gitlab.io/frontend/",
				nodeExample: "https://protected-eyrie-19608.herokuapp.com/docs/",
				swiftExample: "https://bokeh.pics/",
				flowerRepo: "https://github.com/reessm01/front-end-capstone",
				nodeRepo: "https://github.com/reessm01/front-end-capstone-back-end",
				vueRepo: "https://github.com/reessm01/portfolioSite"
			};
		},
		methods: {
			redirect: function(e) {
				window.open(this[e.target.name], "_blank");
			}
		}
	};
</script>

<style scoped>
	#projects {
		margin: 0px 0px 0px 0px;
		background-color: #cccccc;
		padding: 20px 10px 20px 10px;
	}

	.tabs {
		align-self: center;
		width: 100%;
	}

	.tabContainer {
		border-style: none;
	}

	#image {
		width: 75%;
		height: auto;
		margin: 10px;
	}

	#image:hover {
		cursor: pointer;
	}

	button {
		width: 100px;
		margin: 5px;
	}

	.buttonPair {
		display: flex;
		justify-content: center;
	}

	h2 {
		margin-top: 20px;
	}
</style>