<template>
  <div id="container" :style="cssProps">
    <img id="image" :src="require('../../../src/assets/Data-Still.mov.gif')">
    <div id="buttonCont">
      <p>Hello, I'm Scott Reese</p>
      <p>I'm a jr software developer</p>
      <b-button variant="light" id="button">View my work</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroSegment",
  data: function() {
    return {
      windowHeight: window.innerHeight
    }
  },
  computed: {
    cssProps() {
      return {
        "--windowHeight": this.windowHeight + "px"
      };
    }
  }
};
</script>

<style scoped>
#container {
  position: relative;
  width: 100%;
  padding: 0px;
  margin: 0px;
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
}

#image {
  height: 100%;
  width: 100%;
}
</style>