<template>
  <div class="home_mobile">
    移动端
    <nuxt-link :to="{name:'home-type',params:{type: 233}}">
    <!-- <a href="http://localhost:3000/home-type"> -->
      跳转页面
    <!-- </a> -->
	</nuxt-link>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'HomeMobile'
}
</script>
<style scoped lang='stylus'>

</style>
