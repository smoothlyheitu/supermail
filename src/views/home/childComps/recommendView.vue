<template>
	<div class="recommend">
		<div v-for="item in recommendList">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'recommend',
		props:{
			recommendList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		padding-bottom: 20px;
		border-bottom: 10px solid;
	}
	a{
		text-decoration: none;
	}
	img{
		width: 100%;
	}
</style>
