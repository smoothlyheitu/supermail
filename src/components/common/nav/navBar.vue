<template>
	<div class="navBar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'navBar'
	}
</script>

<style>
	.navBar{
		height: 46px;
		display: flex;
		line-height: 46px;
		text-align: center;
	}
	.left{
		width: 60px;
	}
	.right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
</style>
