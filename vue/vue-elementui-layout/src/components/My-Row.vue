
<script>
//render jsx
export default {
  props: {
    tag: String
  },
  render(h) {
    //   return (
    //       <div class="my-el-row">
    //         <slot></slot>
    //       </div>
    //   )
    const tag = this.tag || "div";
    //标签名 组件名
    //标签上的属性  class style width
    //子节点
    // createElement === h
    return h(
      tag,
      {
        class: "my-el-row"
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped>
.my-el-row {
  width: 100%;
}
</style>