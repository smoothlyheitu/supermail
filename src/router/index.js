import Vue from "vue";
import VueRouter from 'vue-router';

const home = ()=>import('views/home/home');
const card = ()=>import('views/card/card');
const category = ()=>import('views/category/category');
const profile =()=>import('views/profile/profile')
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
let routes = [
	{
		path:"",
		redirect:'/home'
	},
	{
		path:"/home",
		component:home
	},
	{
		path:"/profile",
		component:profile
	},
	{
		path:"/category",
		component:category
	},
	{
		path:"/card",
		component:card
	}
];
const router = new VueRouter({
	routes,
	mode:'history'
})
export default router