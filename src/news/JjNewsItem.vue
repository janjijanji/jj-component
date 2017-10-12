<template lang="pug">
  .jjc-news-item
    a.jjc-news-item__wrapper(
      :href="url"
    )
      .jjc-news-item--sided
        .jjc-news-item__side-left
          img.pure-img(v-jj-img="urlToImage")
        .jjc-news-item__side-right
          h3.jjc-news-item__title {{ title }}
          a.jjc-news-item__author(href="#") {{ author }}
          .jjc-news-item__tags
            span.jjc-news-item__tag(v-for="tag in tags")
              a(href="#") {{ tag }}
          .jjc-news-item__published-at {{ publishedAt }}
          .jjc-news-item__excerpt {{ excerpt }}
        .clearfix
</template>

<script>
  export default {
    name: 'jj-news-item',

    props: {
      title: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      publishedAt: {
        type: String,
        required: true
      },
      excerpt: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        required: true
      },
      urlToImage: {
        type: String,
        default: ''
      },
      tags: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  $jjc-sided-left-width: 180px;
  $jjc-sided-gutter: 20px;
  $jjc-sided-margin: $jjc-sided-left-width + $jjc-sided-gutter;

  .jjc-news-item {
    &__wrapper {
      color: inherit;
      text-decoration: inherit;
    }

    &--sided {
      margin-left: $jjc-sided-margin;
    }

    &__side-left {
      float: left;
      margin-left: -$jjc-sided-margin;
      width: $jjc-sided-left-width;
      overflow: hidden;
    }

    &__title {
      margin: 0;
    }

    .jjc-news-item__tag + .jjc-news-item__tag:before {
      content: ' | '
    }
  }

  .clearfix {
      &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
</style>
