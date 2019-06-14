<template>
	<b-col id="col">
		<img id="image" :src="src">
		<h5>{{title}}</h5>
		<div id="detail">{{detail}}</div>
	</b-col>
</template>

<script>
	export default {
		name: "AboutCol",
		props: {
			id: Number,
			title: String,
			detail: String,
			src: [String, Object]
		}
	};
</script>
    
<style>
	#image {
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	h5 {
		margin: 10px 0px 0px 0px;
	}

	#col {
		margin: 10px;
	}

	#detail {
		font-size: 12px;
  }
  
  @media only screen and (width: 500px) {
  #col {
    margin: 30px;
  }
}
</style>