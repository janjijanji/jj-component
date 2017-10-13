<template lang="pug">
  .jjc-share(:class="{ 'jjc-share--shared': shared }")
    .jjc-share__wrapper
      .jjc-share__icon.material-icons share
</template>

<script>
  export default {
    name: 'jj-share',

    props: {
      shared: {
        type: Boolean,
        default: false
      },
      url: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jjc-share {
    cursor: pointer;

    &--shared {
      color: #20a0ff;
      .jjc-share__icon {
        &.material-icons {
          opacity: .8;
        }
      }
    }

    &__icon {
      &.material-icons {
        opacity: .4;
      }
    }
  }
</style>

