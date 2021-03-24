<template>
	<div>
		<nav-bar class="nav">
			<div slot='center'>购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"
		             ></home-swiper>
		
		<recommend-view :recommendList="recommend.list"></recommend-view>
		<recommend-bg></recommend-bg>
		<tab-control :tabControlList='tabControlList' @tabClick='tabClick'></tab-control>
		<goods :goodsList="show"></goods>
	</div>
</template>

<script>
	import {getHomeMultidata,getHomeData} from 'network/homeRequest.js'
	import navBar from 'components/common/nav/navBar.vue'
	import recommendView from 'views/home/childComps/recommendView.vue'
	import recommendBg from './childComps/recommend.vue'
	import tabControl from 'components/content/tabControl/tabControl.vue'
	import HomeSwiper from './childComps/HomeSwiper'
	import goods from  './childComps/Goods.vue'
	export default{
		name:'home',
		data(){
			return {
				banners:[],
				recommend:{},
				tabControlList:['流行','新款','精选'],
				goodsList: {
				  'pop': {page: 1, list: []},
				  'new': {page: 1, list: []},
				  'sell': {page: 1, list: []}
				},
				currentType:'pop'
			}
		},
		components:{
			navBar,
			recommendView,
			tabControl,
			HomeSwiper,
			recommendBg,
			goods
		},
		computed:{
			show(){
				return this.goodsList[this.currentType].list
			}
		},
		created(){
			this.getHomeMultidata();
			this.getHomeData('pop');
			this.getHomeData('new');
			this.getHomeData('sell');
		},
		methods:{
			getHomeMultidata(){
				let that = this;
				getHomeMultidata().then(res=>{
					that.banners = res.data.banner.list;
					that.recommend = res.data.recommend;
				})
			},
			async getHomeData(type){
				let res = await getHomeData(type,this.goodsList[type].page);
				this.goodsList[type].list.push(...res.data.list);
				this.goodsList[type].page += 1;
			},
			tabClick(index){
				switch(index){
					case 0:
						this.currentType = 'pop'
						break;
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
				}
			}
		}
	}
</script>

<style>
	.nav{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 9;
		background-color: rgb(255,129,152);
	}
</style>
