<template>
  <div class="c-test">Age:{{app.userInfo.age}}
      <!-- <button @click="changApp">Change</button> -->
  </div>
</template>

<script>
export default {
  inject: ['app'],
  methods: {
    //   changApp () {
    //       app.userIfo.age = 16
    //   }
  }
}
</script>

<style>

</style>