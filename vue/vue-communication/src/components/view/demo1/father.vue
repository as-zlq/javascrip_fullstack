<template>
  <div class="container">
    <child v-bind:send-msg="myMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
      return {
          myMsg: 'This is father msg!'
      }
  },
  components: {
    'child': child
  }
}
</script>

<style>

</style>