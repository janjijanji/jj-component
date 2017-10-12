<template lang="pug">
  .jjc-statement(
    :style="backgroundStyle"
    :class="{ 'jjc-statement--full': isFull }"
  )
    .jjc-statement__wrapper.jjc-statement__wrapper--padded
      .jjc-statement__head(v-if="isFull")
        .jjc-statement__verdict {{ $getJjVerdictLabel(verdict) }}
      .jjc-statement__body(:style="fontStyle") {{ statement }}
      .jjc-statement__foot
        .jjc-statement__avatar
          jj-avatar(
            v-if="isFull"
            :src="promiseMaker.avatar_url"
          )
        .jjc-statement__full-name {{ promiseMaker.full_name }}
        .jjc-statement__position(v-if="isFull") {{ promiseMaker.position }}
</template>

<script>
  export default {
    name: 'jj-statement',

    props: {
      // Accept `moderate` & `full`
      mode: {
        type: String,
        default: 'moderate'
      },
      statement: {
        type: String,
        required: true
      },
      verdict: {
        type: String,
        required: true
      },
      // `promiseMaker` must have a member named `full_name`
      // if `mode` is `full` `promiseMaker` also must have a member named `position` & `avatar_url`
      promiseMaker: {
        type: Object,
        required: true
      }
    },

    computed: {
      fontStyle () {
        let nWord = this.statement.split(' ').length
        let baseSize = 1.0
        let delta = this.isFull ? 0.375 : 0.125
        let scale = 0

        switch (true) {
          case nWord < 10: scale = 4; break
          case nWord < 20: scale = 3; break
          case nWord < 30: scale = 2; break
          case nWord < 40: scale = 1; break
        }

        return {
          fontSize: (baseSize + scale * delta) + 'em',
          color: `rgba(0, 0, 0, ${1 - (scale / 16.0)})`
        }
      },
      backgroundStyle () {
        return {
          backgroundColor: this.$getJjVerdictColor(this.verdict, 0.1)
        }
      },
      isFull () {
        this.mode === 'full'
      }
    },

    mounted () {
      if (this.isFull) {
        return this.$el.getElementsByClassName('jjc-statement__verdict')[0].style.color = this.$getJjVerdictColor(this.verdict)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jjc-statement {
    width: 100%;
    &__wrapper {
      text-align: center;

      &--padded {
        padding: 20px;
      }
    }

    &__verdict {
      margin-bottom: 10px;
      font-weight: 500;
    }

    &__body {
      font-family: "Droid Serif", serif;
      font-weight: 400;
      font-style: italic;
    }

    &__avatar {
      margin-top: 20px;
    }

    &__full-name {
      margin-top: 10px;
    }

    &__position {
      font-size: .875em;
    }
  }
</style>
