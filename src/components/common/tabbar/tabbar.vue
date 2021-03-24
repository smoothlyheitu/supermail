<template>
	<div id='tabbar'>
	  <tabbar-item path='home'>
		  <div slot="text">首页</div>
	  </tabbar-item>
	  <tabbar-item path='card'>
	  		  <div slot="text">分类</div>
	  </tabbar-item>
	  <tabbar-item path='profile'>
	  		  <div slot="text">个人</div>
	  </tabbar-item>
	  <tabbar-item path='category'>
	  		  <div slot="text">购物车</div>
	  </tabbar-item>
	</div>
</template>

<script>
	import tabbarItem from './tabbarItem.vue'
	export default{
		name:'tabbar',
		components:{
			tabbarItem
		}
	}
</script>

<style>
	#tabbar{
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		display: flex;
		justify-content: space-around;
		height: 49px;
		background: #f6f6f6;
		/* background-color: red; */
	}
</style>
