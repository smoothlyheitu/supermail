<template>
	<div>
		<nav-bar class="nav">
			<div slot='center'>购物街</div>
		</nav-bar>
		<recommend-view :recommendList="recommend.list"></recommend-view>
		<tab-control :tabControlList='tabControlList'></tab-control>
	</div>
</template>

<script>
	import getHome from 'network/homeRequest.js'
	import navBar from 'components/common/nav/navBar.vue'
	import recommendView from 'views/home/childComps/recommendView.vue'
	import tabControl from 'components/content/tabControl/tabControl.vue'
	export default{
		name:'home',
		data(){
			return {
				banner:{},
				recommend:{},
				tabControlList:['流行','新款','精选']
			}
		},
		components:{
			navBar,
			recommendView,
			tabControl
		},
		created(){
			let that = this;
			getHome().then(res=>{
				console.log(res)
				that.banner = res.data.banner;
				that.recommend = res.data.recommend;
			})
		}
	}
</script>

<style>
	.nav{
		background-color: red;
	}
</style>
