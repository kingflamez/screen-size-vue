const VueScreenSize = {
  data() {
    return {
      $screenSize: null,
      $breakPoint: {
        xs: 'xs',
        s: 's',
        m: 'm',
        l: 'l',
        xl: 'xl'
      }
    }
  },

  methods: {
    handleResize() {
      const isClient = typeof window === 'object'
      const width = isClient ? window.innerWidth : 0
      const height = isClient ? window.innerHeight : 0
      const breakPoint = this.getScreenMode(width)
      this.$data.$screenSize = {
        width,
        height,
        breakPoint
      }
    },
    getScreenMode(width) {
      if (width < 576) {
        return this.$data.$breakPoint.xs
      } else if (width >= 576 && width < 768) {
        return this.$data.$breakPoint.s
      } else if (width >= 768 && width < 992) {
        return this.$data.$breakPoint.m
      } else if (width >= 992 && width < 1200) {
        return this.$data.$breakPoint.l
      } else {
        return this.$data.$breakPoint.xl
      }
    },
    $VHToPX(vhHeight) {
      return `${(vhHeight / 100) * this.$data.$screenSize.height}px`
    }
  },

  created() {
    const isClient = typeof window === 'object'
    if (!isClient) return
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}

const VueScreenSizePackage = {
  install(Vue) {
    Vue.mixin(VueScreenSize)
  }
}

export default VueScreenSizePackage
