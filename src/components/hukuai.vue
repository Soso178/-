<template>
  <div class="infinite-list a" v-infinite-scroll="load" style="overflow:auto">
    <div v-for="i in count" class=" b" :key='i'>{{ i }}</div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
        console.log(this.count);
      }
    }
  }
</script>
<style scoped>
.a{
  height: 1425px;
}
  .b{
    height:1600px;
    width: 100px;
    background-color: greenyellow;
  }
</style>