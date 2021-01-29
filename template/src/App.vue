<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, th, td {
  margin: 0;
  padding: 0;
  /*-webkit-user-select: none;*/
  /*-webkit-touch-callout: none;*/
  -webkit-text-size-adjust: none;
}

body, button, input, select, textarea {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  color: #353535
}

h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
}

address, cite, dfn, em, var {
  font-style: normal;
}

code, kbd, pre, samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 12px;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset, img {
  border: 0;
}

button, input, select, textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

#app {
  position: relative;
  width: 100vm;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;

}
</style>
