<template>
  <div>
    <template v-if="isShowMobile">
      <home-mobile />
    </template>
    <template v-else>
      <home />
    </template>
  </div>
</template>
<script>
import Home from '@/components/home/index'
import HomeMobile from '@/components/home/index_mobile'

export default {
  name: 'HomeTempl',
  components: {
    HomeMobile,
    Home
  },
  data() {
    return {
      isShowMobile: true
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>
