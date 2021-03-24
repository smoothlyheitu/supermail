<template>
	<div class="recommend">
		<div v-for="item in recommendList">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'recommend',
		props:{
			recommendList:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		padding-top: 10px;
		border-bottom: 10px solid rgb(238,238,238);
		text-align: center;
	}
	a img{
		width: 85%;
	}
</style>
