<template>
	<div class="tabControl">
		<div  v-for="(item,index) in tabControlList" :class="{tabControlItem:index==indexs}" @click="tabClick(index)">
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
				indexs:0
			}
		},
		methods:{
			tabClick(index){
				this.indexs = index;
				console.log(index)
			}
		}
	}
</script>

<style>
	.tabControl{
		display: flex;
		text-align: center;
		justify-content: space-around;
	}
	.tabControlItem{
		color: red;
		padding-bottom: 10px;
		border-bottom: 10px solid;
	}
</style>
