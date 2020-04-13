<template>
  <div class="rating">
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
    <div class="ratingselect">
      <div class="rating-type border-1px">
        <span class=" block all">
          全部
          <span class="count">{{Array.length}}</span>
        </span>
        <span class=" block positive">
          满意
          <span class="count">18</span>
        </span>
        <span class="block negative">
          不满意
          <span class="count">6</span>
        </span>
      </div>
      <div class="switch">
        <span class="icon"></span>
        <span class="text"> 只看有评价内容</span>
      </div>
    </div>
    <div class="rating-wrapper">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="stylus">
.overview
  display flex
  padding 18px 0
  .overview-left
    flex 0 0 137px
    padding 6px 0
    border-right 1px solid rgba(7, 17, 27, 1)
    text-align center
    .score
      margin-bottom 6px
      line-height 28px
      font-size 24px
      color #f90
    .title
      margin-bottom 8px
      line-height 12px
      font-size 12px
      color #07111b
    .rank
      line-height 10px
      font-size 10px
      color #93999f
  .overview-right
    flex 1
    padding 6px 0 6px 24px
    .score-wrapper
      margin-bottom 8px
      font-size 0
      .title
        display inline-block
        line-height 18px
        vertical-align top
        font-size 12px
        color #07111b
    .delivery-wrapper
      font-size 0
      .title
        line-height 18px
        font-size 12px;
        color #07111b
      .delivery
        margin-left 12px
        font-size 12px
        color #93999f
.ratingselect
  .rating-type
    padding 18px 0
    margin 0 18px
    position relative
    font-size 0
    .block
      display inline-block
      padding 8px 12px
      margin-right 8px
      line-height 16px
      border-radius 1px
      font-size 12px
      color #4d555d
      .count
        margin-left 2px
        font-size 8px
    .all
      background rgba(0, 160, 220, .2)
    .positive
      background rgba(0, 160, 220, .2)
    .negative
      background rgba(77, 85, 93, .2)
  .switch
    padding 12px 18px
    line-height 24px
    border-bottom 1px solid rgba(7,17,27,.1)
    color #93999f
    font-size: 0
    .icon
      display inline-block
      vertical-align top
      margin-right 4px
      font-size 24px
    .text
      display inline-block
      vertical-align top
      font-size 12px
</style>