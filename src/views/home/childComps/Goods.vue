<template>
	<div class="Goods">
		<goods-item v-for="(item,index) in goodsList" :key='index' :goodsItemInfo='item'></goods-item>
	</div>
</template>

<script>
	import goodsItem from './GoodsItem.vue'
	export default{
		name:'Goods',
		props:{
			goodsList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			goodsItem
		}
	}
</script>

<style>
	.Goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
