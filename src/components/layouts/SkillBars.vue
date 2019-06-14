<template>
	<b-col
	 md
	 align-self="center"
	 class="content"
	>
		<div
		 v-for="skill in skills"
		 :key="skill.tech"
		 class="skillWrapper"
		>
			<div class="label">
				{{skill.tech}}
			</div>
			<div
			 class="level"
			 v-bind:style="calculateBarWidth(skill.level)"
			 v-if="skill.tech !== 'Python' && skill.tech !== 'Swift'"
			/>
			<b-progress
			 v-else
			 height="24px"
			 :value="100"
			 :max="100"
			 class="rounded-0 width"
			 animated
			 striped
			>
			</b-progress>
		</div>
	</b-col>
</template>

<script>
	export default {
		name: "SkillBars",
		data: function() {
			return {
				skills: [
					{
						tech: "HTML",
						level: 0.95
					},
					{
						tech: "CSS",
						level: 0.95
					},
					{
						tech: "Javascript",
						level: 0.8
					},
					{
						tech: "React",
						level: 0.7
					},
					{
						tech: "Vue",
						level: 0.7
					},
					{
						tech: "Node",
						level: 0.6
					},
					{
						tech: "Express",
						level: 0.6
					},
					{
						tech: "Python",
						level: 0.25
					},
					{
						tech: "Swift",
						level: 0.2
					},
					{
						tech: "Java",
						level: 0.33
					}
				],
				counter: 45,
				max: 100
			};
		},
		methods: {
			calculateBarWidth: function(factor) {
				return {
					width: 60 * factor + "%"
				};
			}
		}
	};
</script>

<style scoped>
	.skillWrapper {
		display: flex;
		flex-wrap: nowrap;
		margin: 15px 20px 15px 20px;
		height: 24px;
	}

	.label {
		display: flex;
		border-style: hidden;
		background-color: #001dbf;
		height: auto;
		width: 40%;
		color: white;
		line-height: 2em;
		align-items: center;
		justify-content: center;
	}

	.level {
		display: block;
		border-style: hidden;
		background-color: #50a2ff;
	}

	.update {
		background-color: #42c6ff;
	}

	.content {
		font-size: 12px;
	}

	.width {
		width: 20%;
	}
</style>