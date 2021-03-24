<template>
	<div class="GoodsItem">
			<img :src="goodsItemInfo.show.img" alt="">
			<div class="goods-info">
				<p>{{goodsItemInfo.title}}</p>
				<div>
				<span class="price">￥{{goodsItemInfo.price}}</span>
				<span class="collect">{{goodsItemInfo.cfav}}</span>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		name:'GoodsItem',
		props:{
			goodsItemInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
	.GoodsItem{
		width: 48%;
		font-size: 12px;
		text-align: center;	
		position: relative;
		margin-bottom:10px;
		padding-bottom: 44px;
	}
	.GoodsItem p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom:5px;
	}
	.goods-info{
		bottom:0px;
		position:absolute;
		left: 0;
		right: 0;
	}
	.price{
		color: #ff5777;
	}
	.GoodsItem .collect {
	  position: relative;
	  margin-left: 15px;
	}
	
	.GoodsItem .collect::before {
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: 0;
	  width: 14px;
	  height: 14px;
	  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
