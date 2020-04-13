<template>
  <div class="container">
      <h2>父组件</h2>
      <!-- <child1 :title="oTitle"></child1> -->
      <!-- <child2 @test="getTitle"></child2> -->
      <child1></child1>
      <child2></child2>
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'
export default {
    components:{
        child1,
        child2
    },
    data(){
        return {
            oTitle:''
        }
    },
    methods:{
        getTitle(e) {
            console.log(e)
            this.oTitle = e
        }
    }

}
</script>

<style>

</style>