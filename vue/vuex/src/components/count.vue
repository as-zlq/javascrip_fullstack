<template>
  <div class="count">
    {{count}}
    <button @click="addAction(10)">+</button>
    <button @click="reduceAction">-</button>
    {{getCount}}
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
//   取数据源数据
//   mounted () {
//     this.myCount = this.$store.state.count
//   },
//   computed: {
//     myCount () {
//       return this.$store.state.count
//     }
//   },
//   computed: mapState ({
//     myCount: state => state.count
//   }),
//   computed: mapState(['count']),
computed: {
  ...mapState([
    'count'
  ]),
  ...mapGetters([
    'getCount'
  ])
},
  methods : {
    ...mapMutations([
      'add',
      'sub'
    ]),
    ...mapActions(['addAction','reduceAction'])
    // test () {
    //     this.myCount++
    // }
  }
}
</script>

<style>

</style>