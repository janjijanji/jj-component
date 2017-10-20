<template lang="pug">
  .jjc-article-body
    .jjc-article-body__wrapper
      article(v-html="body")
</template>

<script>
  export default {
    name: 'jj-article-body',

    props: {
      body: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
// These styles is based-on https://github.com/edwardtufte/tufte-css
// Copyright (c) 2014 Dave Liepmann, License (MIT)

$remScale: 0.625;

.jjc-article-body {
  h1 { font-weight: 400;
       margin-top: (4 * $remScale) + rem;
       margin-bottom: (1.5 * $remScale) + rem;
       font-size: (3.2 * $remScale) + rem;
       line-height: 1; }

  h2 { font-style: italic;
       font-weight: 400;
       margin-top: (2.1 * $remScale) + rem;
       margin-bottom: 0;
       font-size: (2.2 * $remScale) + rem;
       line-height: 1; }

  h3 { font-style: italic;
       font-weight: 400;
       font-size: (1.7 * $remScale) + rem;
       margin-top: (2 * $remScale) + rem;
       margin-bottom: 0;
       line-height: 1; }

  hr { display: block;
       height: 1px;
       width: 55%;
       border: 0;
       border-top: 1px solid #ccc;
       margin: 1em 0;
       padding: 0; }

  p.subtitle { font-style: italic;
               margin-top: (1 * $remScale) + rem;
               margin-bottom: (1 * $remScale) + rem;
               font-size: (1.8 * $remScale) + rem;
               display: block;
               line-height: 1; }

  .numeral {
    font-family: et-book-roman-old-style;
  }

  .danger { color: red; }

  article { position: relative;
            padding: (2 * $remScale) + rem (0 * $remScale) + rem; }

  section { padding-top: (1 * $remScale) + rem;
            padding-bottom: (1 * $remScale) + rem; }

  p, ol, ul { font-size: (1.4 * $remScale) + rem; }

  p { line-height: (2 * $remScale) + rem;
      margin-top: (1.4 * $remScale) + rem;
      margin-bottom: (1.4 * $remScale) + rem;
      padding-right: 0;
      vertical-align: baseline; }

  /* Chapter Epigraphs */
  div.epigraph { margin: 5em 0; }

  div.epigraph > blockquote { margin-top: 3em;
                              margin-bottom: 3em; }

  div.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }

  div.epigraph > blockquote > footer { font-style: normal; }

  div.epigraph > blockquote > footer > cite { font-style: italic; }
  /* end chapter epigraphs styles */

  blockquote { font-size: (1.4 * $remScale) + rem; }

  blockquote p { width: 55%;
                 margin-right: 40px; }

  blockquote footer { width: 55%;
                      font-size: (1.1 * $remScale) + rem;
                      text-align: right; }

  section>ol, section>ul { width: 45%;
                           -webkit-padding-start: 5%;
                           -webkit-padding-end: 5%; }

  li { padding: (0.5 * $remScale) + rem 0; }

  figure { padding: 0;
           border: 0;
           font-size: 100%;
           font: inherit;
           vertical-align: baseline;
           max-width: 55%;
           -webkit-margin-start: 0;
           -webkit-margin-end: 0;
           margin: 0 0 3em 0; }

  figcaption { float: right;
               clear: right;
               margin-top: 0;
               margin-bottom: 0;
               font-size: (1.1 * $remScale) + rem;
               line-height: 1.6;
               vertical-align: baseline;
               position: relative;
               max-width: 40%; }

  figure.fullwidth figcaption { margin-right: 24%; }

  /* Links: replicate underline that clears descenders */
  a:link, a:visited { color: inherit; }

  a:link { text-decoration: none;
           background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);
           background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);
           -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
           -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
           background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
           background-repeat: no-repeat, no-repeat, repeat-x;
           text-shadow: 0.03em 0 #fffff8, -0.03em 0 #fffff8, 0 0.03em #fffff8, 0 -0.03em #fffff8, 0.06em 0 #fffff8, -0.06em 0 #fffff8, 0.09em 0 #fffff8, -0.09em 0 #fffff8, 0.12em 0 #fffff8, -0.12em 0 #fffff8, 0.15em 0 #fffff8, -0.15em 0 #fffff8;
           background-position: 0% 93%, 100% 93%, 0% 93%; }

  @media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 87%, 87%, 87%; } }

  a:link::selection { text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;
                      background: #b4d5fe; }

  a:link::-moz-selection { text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;
                           background: #b4d5fe; }

  /* Sidenotes, margin notes, figures, captions */
  img { max-width: 100%; }

  .sidenote, .marginnote { float: right;
                           clear: right;
                           margin-right: -60%;
                           width: 50%;
                           margin-top: 0;
                           margin-bottom: 0;
                           font-size: (1.1 * $remScale) + rem;
                           line-height: 1.3;
                           vertical-align: baseline;
                           position: relative; }

  .sidenote-number { counter-increment: sidenote-counter; }

  .sidenote-number:after, .sidenote:before {
    content: counter(sidenote-counter) " ";
    font-family: et-book-roman-old-style;
    position: relative;
    vertical-align: baseline;
  }

  .sidenote-number:after { content: counter(sidenote-counter);
                           font-size: (1 * $remScale) + rem;
                           top: (-0.5 * $remScale) + rem;
                           left: (0.1 * $remScale) + rem; }

  .sidenote:before { content: counter(sidenote-counter) " ";
                     top: (-0.5 * $remScale) + rem; }

  blockquote .sidenote, blockquote .marginnote { margin-right: -82%;
                                                 min-width: 59%;
                                                 text-align: left; }

  p, footer, table { width: 55%; }

  div.fullwidth, table.fullwidth { width: 100%; }

  div.table-wrapper {
    overflow-x: auto;
    // font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif;
    font-family: inherit;
  }

  .sans {
    // font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
    font-family: inherit;
    letter-spacing: .03em;
  }

  code {
    font-family: Consolas, Courier, monospace;
    font-size: (1.0 * $remScale) + rem;
    line-height: 1.42;
  }

  .sans > code { font-size: (1.2 * $remScale) + rem; }

  h1 > code, h2 > code, h3 > code { font-size: 0.80em; }

  .marginnote > code, .sidenote > code { font-size: (1 * $remScale) + rem; }

  pre.code { font-size: (0.9 * $remScale) + rem;
             width: 52.5%;
             margin-left: 2.5%;
             overflow-x: auto; }

  pre.code.fullwidth { width: 90%; }

  .fullwidth { max-width: 90%;
               clear:both; }

  span.newthought { font-variant: small-caps;
                    font-size: 1.2em; }

  input.margin-toggle { display: none; }

  label.sidenote-number { display: inline; }

  label.margin-toggle:not(.sidenote-number) { display: none; }

  .iframe-wrapper { position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    padding-top: 25px;
                    height: 0; }

  .iframe-wrapper iframe { position: absolute;
                           top: 0;
                           left: 0;
                           width: 100%;
                           height: 100%; }

  @media (max-width: 760px) { body { width: 84%;
                                     padding-left: 8%;
                                     padding-right: 8%; }
                              p, footer { width: 100%; }
                              pre.code { width: 97%; }
                              section > ol { width: 90%; }
                              section > ul { width: 90%; }
                              figure { max-width: 90%; }
                              figcaption, figure.fullwidth figcaption { margin-right: 0%;
                                                                        max-width: none; }
                              blockquote { margin-left: 1.5em;
                                           margin-right: 0em; }
                              blockquote p, blockquote footer { width: 100%; }
                              label.margin-toggle:not(.sidenote-number) { display: inline; }
                              .sidenote, .marginnote { display: none; }
                              .margin-toggle:checked + .sidenote,
                              .margin-toggle:checked + .marginnote { display: block;
                                                                     float: left;
                                                                     left: (1 * $remScale) + rem;
                                                                     clear: both;
                                                                     width: 95%;
                                                                     margin: (1 * $remScale) + rem 2.5%;
                                                                     vertical-align: baseline;
                                                                     position: relative; }
                              label { cursor: pointer; }
                              div.table-wrapper, table { width: 85%; }
                              img { width: 100%; } }

}
</style>
