<template>
  <div id="app">
    <IntroSegment />
    <NavBar />
    <HomePage />
    <ProjectsPage />
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue"
import HomePage from "./components/layouts/HomePage.vue"
import IntroSegment from "./components/layouts/IntroSegment.vue"
import ProjectsPage from "./components/layouts/ProjectsPage.vue"

export default {
  name: "app",
  components: {
    NavBar,
    HomePage,
    IntroSegment,
    ProjectsPage
  }
};
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
