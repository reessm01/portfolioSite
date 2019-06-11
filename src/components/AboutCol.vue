<template>
    <b-col class="col" xs="3">
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
      src: Function
  }
}
</script>
    
<style>
    #image {
      width:70px;
      height:70px;
    }

    h5 {
      margin:10px 0px 0px 0px;
    }

    .col {
      margin:20px;
    }

    #detail {
      font-size: 12px;
    }
</style>