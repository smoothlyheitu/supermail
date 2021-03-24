<template>
  <div id="app">
	  <router-view></router-view>
	  <tabbar></tabbar>
  </div>
</template>

<script>
	import tabbar from 'components/tabbar/tabbar.vue'
	export default {
	  name: 'App',
	  components:{
		  tabbar,
	  }
	}
</script>

<style>
	@import url("assets/css/base.css");
	
</style>
