import {request} from "./request.js";
function getHome(){
	return request({
		url:"/home/multidata"
	})
}
export default getHome
