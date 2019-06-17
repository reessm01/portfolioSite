<template>
	<div id="container">
		<div class="topRow">
			<div class="col">
				<h4>Scott Reese</h4>
				<div id="cardBar" />
				<p>Software Developer</p>
			</div>
			<div>
				<img
				 class="image"
				 :src="require('../assets/logo.png')"
				>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="info">
					<font-awesome-icon
					 icon="phone"
					 size="2x"
					/>
					<a class="links" href="tel:574-400-9812">574-400-9812</a>
				</div>
				<div class="info">
					<font-awesome-icon
					 icon="paper-plane"
					 size="2x"
					/>
					<a class="links" href="mailto:scott_reese@pm.me">scott_reese@pm.me</a>
				</div>
				<div class="info">
					<font-awesome-icon
					 :icon="['fab','github']"
					 size="2x"
					/>
					<a class="links" href="https://github.com/reessm01">https://github.com/reessm01</a>
				</div>
				<div class="info">
					<font-awesome-icon
					 :icon="['fab','linkedin']"
					 size="2x"
					/>
					<a class="links" href="https://www.linkedin.com/in/scottmreese">https://www.linkedin.com/in/scottmreese</a>
				</div>
				<div class="infoAlt">
					<font-awesome-icon
					 :icon="['fab','twitter']"
					 size="2x"
					/>
					<a class="links" href="https://twitter.com/scotty_reese">https://twitter.com/scotty_reese</a>
				</div>
                <!-- <div class="infoAlt">
					<font-awesome-icon
					 icon="id-card"
					 size="2x"
					/>
					<a class="links" href="/src/assets/Scott Reese.vcf" download>Download vCard</a>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ContactInfo"
	};
</script>

<style scoped>
	#cardBar {
		height: 2px;
		width: 100px;
		border-style: hidden;
		background-color: black;
	}

	.image {
		height: 75px;
		width: 75px;
    }
    
    .QR {
        align-self: flex-end;
        height: 125px;
        width: 125px;
    }

	.topRow {
		display: flex;
		justify-content: space-around;
        margin-bottom: 30px;
        font-size: 8px;
	}

	.row {
		display: flex;
        justify-content: space-between;
        align-items: flex-end;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
	}

	.col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.info {
		display: flex;
		margin-bottom: 5px;
		align-items: center;
	}

	.infoAlt {
		display: flex;
        align-items: center;
        margin-bottom: 10px;
	}

	p {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	#container {
		display:flex;
		flex-direction: column;
		width:100%;
		padding: 20px;
		border-style: solid;
        border-width: 1px;
        border-color: rgba(0, 0, 0, 0.06);
	}
	.links {
        width: 100%;
        margin-left: 15px;
        text-align:start;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    p {
        font-size: 12px;
    }
</style>
