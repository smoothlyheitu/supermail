<template>
	<div class="tabbarItem" @click="jump">
		<div :class="{isActive:isActive}">
			<slot name='text'></slot>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'tabbarItem',
		data(){
			return{
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1;
			}
		},
		props:{
			path:String
		},
		methods:{
			jump(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.isActive{
		color: red;
	}
</style>
