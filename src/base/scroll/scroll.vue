<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'baseScroll',
  props: {
    probeType: {
      type: Number,
      defalut: 1
    },
    click: {
      type: Boolean,
      defalut: true
    },
    data: {
      type: Array,
      defalut: null
    }
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
