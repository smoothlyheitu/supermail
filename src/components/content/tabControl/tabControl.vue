<template>
	<div class="tabControl">
		<div  v-for="(item,index) in tabControlList" :class="{tabControlItem:index==currentindex}" @click="tabClick(index)">
			{{item}}
		</div>
	</div>
</template>

<script>
	export default{
		name:"tabControl",
		props:{
			tabControlList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentindex:0
			}
		},
		methods:{
			tabClick(index){
				this.currentindex = index;
				this.$emit('tabClick',index);
			}
		}
	}
</script>

<style>
	.tabControl{
		display: flex;
		text-align: center;
		height: 44px;
		line-height: 44px;
		justify-content: space-around;
		margin-bottom: 15px;
		position: sticky;
		top: 46px;
		background-color: rgb(255,255,255);
		z-index: 9;
	}
	.tabControlItem{
		color: red;
		padding-bottom: 10px;
		border-bottom: 2px solid;
	}
</style>
