<template lang="pug">
  .jjc-vote(:class="{ 'jjc-vote--voted': voted, 'jjc-vote--center': isCenter }")
    .jjc-vote__wrapper
      .jjc-vote__number(v-if="!isCenter") {{ votes }}
      .jjc-vote__icon.material-icons thumb_up
      .jjc-vote__number(v-if="isCenter") {{ votes }}
</template>

<script>
  export default {
    name: 'jj-vote',

    props: {
      voted: {
        type: Boolean,
        default: false
      },
      votes: {
        type: Number,
        default: 0
      },
      // Accept `null` or `"center"`
      position: {
        type: String,
        default: ''
      }
    },

    computed: {
      isCenter () {
        return this.position === 'center'
      }
    }
  }
</script>

<style lang="scss">
  .jjc-vote {
    cursor: pointer;

    &--center {
      text-align: center;
    }

    &:not(.jjc-vote--center) {
      .jjc-vote {
        &__number {
          display: inline-block;
          vertical-align: super;
        }
      }
    }

    &--voted {
      color: #20a0ff;

      .jjc-vote__number {
        font-weight: 500;
      }

      .jjc-vote__icon {
        &.material-icons {
          opacity: .8;
        }
      }
    }

    &__icon {
      margin-left: 8px;
      &.material-icons {
        opacity: .4;
      }
    }
  }
</style>

