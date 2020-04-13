<template>
  <div class="seller">
    <div class="overview">
      <h1 class="title">{{seller.name}}</h1>
      <div class="desc border-1px">
        <div class="star"></div>
        <span class="text">{{seller.ratingCount}}</span>
        <span class="text">月售{{seller.sellCount}}单</span>
      </div>
      <ul class="remark">
        <li class="block">
          <h2 class="title">起送价</h2>
          <div class="content">
            <span class="stress">{{seller.minPrice}}</span>
          </div>
        </li>
        <li class="block">
          <h2 class="title">商家配送</h2>
          <div class="content">
            <span class="stress">{{seller.deliveryPrice}}</span>
            元
          </div>
        </li>
        <li class="block">
          <h2 class="title">平均配送时间</h2>
          <div class="content">
            <span class="stress">{{seller.deliveryTime}}</span>
            分钟
          </div>
        </li>
      </ul>
      <div class="favorite">
        <span class="icon-favorite"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bulletin">
      <h1 class="title">公告与活动</h1>
      <div class="content-wrapper border-1px">
        <p class="content">{{seller.bulletin}}</p>
      </div>
      <ul class="supports">
        <li class="support-item border-1px" v-for="(item,index) in seller.supports" :key="index">
          <span class="icon" :class="classMap[item.type]"></span>
          <span class="text">{{item.description}}</span>
        </li>
      </ul>
    </div>
    <div class="pics">
      <h1 class="title">商家实景</h1>
      <div class="pic-wrapper">
        <ul class="pic-list">
          <li class="pic-item" v-for="(item,index) in seller.pics" :key="index">
            <img :src="item" width="120" height="90">
          </li>
        </ul>
      </div>
    </div>
    <div class="info">
      <h1 class="title border-1px">商家信息</h1>
      <ul>
        <li class="info-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    }
  },
}
</script>
<style lang="stylus" scoped>
.overview
  position relative
  padding 18px
  margin-bottom 10px
  .title
    margin-bottom 8px
    line-height 14px
    color #07111b
    font-size 14px
  .desc
    padding-bottom 18px
    position relative
    font-size 0
    .text
      display inline-block
      margin-right 12px
      line-height 18px
      vertical-align top
      font-size 10px
      color #4d555d
  .remark
    display flex
    padding-top 18px
    .block
      flex 1
      text-align center
      border-right 1px solid rgba(7, 17, 27, .1)
      .title
        margin-bottom 4px
        line-height 10px
        font-size 10px
        color #93999f
      .content
        line-height 24px
        font-size 10px
        color #07111b
        .stress
          font-size 24px
  .favorite
    position absolute
    width 50px
    right 11px
    top 18px
    text-align center
    .icon-favorite
      display: block
      margin-bottom 4px
      line-height 24px
      font-size 24px
      color #d4d6d9
    .text
      line-height 10px
      font-size 10px
      color #4d555d
.bulletin
  padding 18px 18px 0
  .title
    margin-bottom 8px
    line-height 14px
    color #07111b
    font-size 14px
  .content-wrapper
    padding 0 12px 16px
    position relative
    .content
      line-height 24px
      font-size 12px
      color #f01414
  .supports
    width 80%
    margin 0 auto
    .support-item
      padding 0 12px
      margin-bottom 12px
      font-size 0
      &:last-child
        margin-bottom 0
      .icon
        display inline-block
        width 16px
        height 16px
        vertical-align top
        margin-right 6px
        background-size 16px 16px
        background-repeat no-repeat
        &.decrease
          bg-image('decrease_2')
        &.discount
          bg-image('discount_2')
        &.guarantee
          bg-image('guarantee_2')
        &.invoice
          bg-image('invoice_2')
        &.special
          bg-image('special_2')
      .text
        line-height 16px
        font-size 12px
.pics
  padding 18px
  .title
    margin-bottom 12px
    line-height 14px
    color #07111b
    font-size 14px
  .pic-wrapper
    width 100%
    overflow hidden
    white-space nowrap
    .pic-list
      width 498px
      transition-timing-function cubic-bezier(0.165, 0.84, 0.44, 1)
      transition-duration 0ms
      transform translate(0px, 0px) translateZ(0px)
      .pic-item
        display inline-block
        margin-right 6px
        width 120px
        height 90px
.info
  padding 18px 18px 0
  color #07111b
  .title
    padding-bottom 12px
    line-height 14px
    position relative
    font-size 14px
</style>