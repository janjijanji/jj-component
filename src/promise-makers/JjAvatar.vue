<template lang="pug">
  .jjc-avatar
    .jjc-avatar__wrapper
      img.pure-img(:src="src")
</template>

<script>
  export default {
    name: 'jj-avatar',

    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jjc-avatar {
    &__wrapper {
      border-radius: 50%;
      width: 48px;
      overflow: hidden;
      margin: auto;
    }
  }
</style>
