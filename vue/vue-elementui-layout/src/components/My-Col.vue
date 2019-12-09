
<script>
export default {
    props: {
        span: Number
    },
  render(h) {
      const tag = this.tag ||'div'
      const classCol = `my-el-col-${this.span}`
      // 1 ~ 6 
    //    <h1 v-if= "level===1">
    //    <h1 else-if= "level===2">
    //    <h1 else-if= "level===3">
       
      return h(tag, {
          class:[classCol]
      }, this.$slots.default)
  }
}
</script>

<style scoped lang = "scss">
@for $i from 0 through 24 {
    .my-el-col-#{$i} {
        width: (1 / 24 * $i * 100 ) * 1%;
    }
}
</style>