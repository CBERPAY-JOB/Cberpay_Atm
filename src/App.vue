<template lang="pug">
  #app
    router-view
</template>

<script>
import { saveCoinList } from 'utils/localStorage'
export default {
  mounted () {
    const params = {
      userId: '1cacf2bb-78eb-46c5-b356-f9df64e4f62e',
      timestamp: +new Date()
    }
    this.$post('/serve/fund/getCurrencyList', params).then(res => {
      saveCoinList(res.data)
    })
  }
}
</script>

<style lang="scss">
#app {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
