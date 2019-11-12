<template>
  <div class="overview">
      <div class="overview-left">
          <h1 class="score">4.2</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家69.2%</div>
      </div>
      <div class="overview-right">
          <div class="score-wrapper">
              <span class="title">服务态度</span>
          </div>
          <div class="score-wrapper">
              <span class="title">商品评分</span>
          </div>
          <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">38分钟</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.overview-left
  flex 0 0 137px
  padding 6px 0
  width 137px
  border-right 1px solid rgba(7, 17, 27, 1)
  text-align center
.overview-right
  flex 1
  padding 6px 0 6px 24px
</style>