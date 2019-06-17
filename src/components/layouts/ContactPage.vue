<template>
	<div id="contact">
		<div id="title">
			<h2>Contact</h2>
			<div id="bar" />
		</div>
		<div id="info">
		
				
					<ContactInfo />
			
		
		</div>
	</div>
</template>

<script>
	import ContactForm from "../ContactForm";
	import ContactInfo from "../ContactInfo";
	export default {
		name: "ContactPage",
		components: {
			ContactForm,
			ContactInfo
		}
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
        display: flex;
        flex-direction:column;
		align-content: center;
		width: 100%;
		background-color: #f0f0f0;
	}

	h2 {
		margin-top: 30px;
	}
	#title {
		width: 100%;
	}
	#info{
		display: flex;
		align-self: center;
		justify-content: center;
		width: 100%;
		max-width: 600px;
	}
</style>
