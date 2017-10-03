<template lang="pug">

  .jjc-statement(:style="backgroundStyle")
    .jjc-statement__wrapper.jjc-statement__wrapper--padded
      .jjc-statement__body(:style="fontStyle") {{ statement }}
      .jjc-statement__full-name {{ promiseMaker.full_name }}

</template>

<script>
  export default {
    name: 'jj-statement',

    props: {
      statement: {
        type: String,
        default: ''
      },
      verdict: {
        type: String,
        default: ''
      },
      // `promiseMaker` must have a member named `full_name`
      promiseMaker: {
        type: Object
      }
    },

    computed: {
      fontStyle () {
        let nWord = this.statement.split(' ').length
        let baseSize = 1.0
        let delta = 0.125
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

    &__full-name {
      margin-top: 10px;
    }
  }
</style>
