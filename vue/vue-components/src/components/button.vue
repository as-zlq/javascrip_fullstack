<template>
  <button :class="'i-button-size'+size">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
export default {
  props: {
    size: {
      // type: String,
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default"
    }
  },
  data() {
    return {
      message: "子组件的内容"
    };
  },
  methods: {
    handleClick() {
      console.log(123);
    },
    sureClick() {
      this.$emit("sendMsg", this.message);
    }
  }
};
</script>

<style scoped>
button {
  border: 1px solid orange;
  background-color: yellow;
  color: black;
  border-radius: 5px;
}
.i-button-sizelarge {
  padding: 10px 16px;
}
.i-button-sizedefault {
  padding: 8px 14px;
}
.i-button-sizesmall {
  padding: 6px 10px;
}
</style>