<template>
    <b-container centered fluid id="container">
        <h2>PROJECTS</h2>
        <div id="bar"/>
        <b-card no-body class="tabContainer">
            <b-tabs pills card class="tabs">
                <b-tab title="All" active></b-tab>
                <b-tab title="React"></b-tab>
                <b-tab title="Node"></b-tab>
                <b-tab title="Python"></b-tab>
            </b-tabs>
        </b-card>
    </b-container>
</template>

<script>
    export default {
        name: "ProjectsPage",

    }
</script>

<style scoped>
    #bar {
      height: 4px;
      width: 25%;
      border-style: hidden;
      background-color:black;
      padding: auto;
      margin: auto;
      margin-bottom: 20px;
    }

    #container{
        width: 100%;
        margin: 20px 0px 0px 0px;
        font-size: 12px;
        background-color:#F0F0F0;
        padding-top: 20px;
    }
    
    .tabs {
        align-self: center;
    }

    .tabContainer {
        border-style: none;
    }
</style>