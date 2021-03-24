<template>
  <div id="app">
	  <router-view></router-view>
	  <tabbar></tabbar>
  </div>
</template>

<script>
	import tabbar from 'components/common/tabbar/tabbar.vue'
	export default {
	  name: 'App',
	  components:{
		  tabbar,
	  }
	}
</script>

<style>
	@import url("assets/css/base.css");
	@import url("assets/css/normalize.css");
</style>
