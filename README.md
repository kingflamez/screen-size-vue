# screen-size-vue

> This is A Vue Package helps you write conditional code based on screen size, or get the screen size value

## Install

Install the npm package:

```bash
npm install --save screen-size-vue
#OR
yarn add screen-size-vue
```

Add the Vue plugin in your main.js:

```js
import Vue from 'vue'
import ScreenSize from 'screen-size-vue'

Vue.use(ScreenSize)
```

## Example

> This shows a quick example of displaying your screen width, screen height and current breakpoint

```vue
<template>
  <div id="app">
    <h1>{{ $data.$screenSize.width }}px / {{ $data.$screenSize.height }}px</h1>
    <h1>{{ $data.$screenSize.breakPoint }}</h1>
  </div>
</template>
```

## Getters

1. `$data.$screenSize.breakPoint` is used to get the quick current breakpoint of the screen

| Name        | Size    | property |
| ----------- | ------- | -------- |
| Extra small | <576px  | xs       |
| Small       | ≥576px  | s        |
| Medium      | ≥768px  | m        |
| Large       | ≥992px  | l        |
| Large       | ≥1200px | xl       |

2. `$data.$screenSize.width` its is used to get the width of the screen in pixels

3. `$data.$screenSize.height` its is used to get the height of the screen in pixels

## Methods

1. `$VHToPX()` - This is helpful for iOS devices, that overlaps when using VH, this can be replaced with this

eg

```vue
<template>
  <div :style="`height: ${$VHToPX(100)}`">
    <h1>{{ $data.$screenSize.width }}px / {{ $data.$screenSize.height }}px</h1>
    <h1>{{ $data.$screenSize.breakPoint }}</h1>
  </div>
</template>

```

> This shows an advanced example of running conditional actions based on the screen size

```vue
<template>
  <div id="app">
    <h1>{{ $data.$screenSize.width }}px / {{ $data.$screenSize.height }}px</h1>
    <h1 :style="{color}">{{ $data.$screenSize.breakPoint.toUpperCase() }} - {{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    color () {
      if (this.$data.$screenSize.breakPoint == this.$data.$breakPoint.xs) {
        return 'red'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.s) {
        return 'blue'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.m) {
        return 'orange'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.l) {
        return 'yellowgreen'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.xl) {
        return 'darkmagenta'
      }
      return 'darkmagenta'
    },
    text () {
      if (this.$data.$screenSize.breakPoint == this.$data.$breakPoint.xs) {
        return 'Extra Small Screen eg Mobile Phones(Portrait Mode)'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.s) {
        return 'Small Screen eg Mobile Phones(Landscape Mode)'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.m) {
        return 'Medium Screen eg Tablet'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.l) {
        return 'Large Screen eg Laptop, PC'
      } else if (this.$data.$screenSize.breakPoint === this.$data.$breakPoint.xl) {
        return 'Extra Large Screen eg Laptop, PC'
      }
      return 'Extra Large Screen eg Laptop, PC'
    }
  }
}
</script>
```

Follow on Twitter [@mrflamez\_](https://twitter.com/mrflamez_)

## License

MIT © [kingflamez](https://github.com/kingflamez)
