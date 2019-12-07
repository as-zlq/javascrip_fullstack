<template>
  <div class="b-test">B{{name}}
      <div>
          <testc></testc>
      </div>
  </div>
</template>

<script>
import C from './C'
export default {
  inject: ['name'],
  mounted() {
    console.log(this.name)
  },
  components: {
      'testc': C
  }
}
</script>

<style>

</style>