<template>
  <div class="singer" ref="singer">
    歌手页面
  </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        if (ERR_OK === res.code) {
          this.singers = res.data.list
          console.log(this.singers)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
