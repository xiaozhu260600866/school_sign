const myfun = function() {};
myfun.install = (Vue, options) => {
	Vue.prototype.cancelAfterOrder = (order,callBack)=>{
		Vue.prototype.getConfirm("是否确认取消售后？",msg=>{
			Vue.prototype.postAjax("/shop/order/cancel-after",{id:order.id}).then(msg=>{
				if(msg.data.status == 2){
					callBack(msg);
				}
			});
		})
	}
	Vue.prototype.updateHistory=()=>{
		Vue.prototype.updateUrl(["/pages/shop/index/index","/pages/shop/product/class/index","/pages/shop/user/cart/index",'/pages/user/index/index','/pages/index/main']);
	}
	Vue.prototype.shareData = (path, user_id, to_userid, title) => {
			return {
				title: title,
				path: path,
				success: res => {
					console.log('a');
					Vue.prototype.getError("1" + user_id);
					Vue.prototype.getError("1" + to_userid);
					Vue.prototype.postAjax("/user/card/create", {
						user_id: user_id,
						to_userid: to_userid,
						type: 3
					}, msg => {

					});
				},
				fail: res => {
					console.log(res);
				}
			}
		},
		Vue.prototype.toIndex = () => {

			let role_type = uni.getStorageSync('role_type');
			if (role_type == 0) {
				return Vue.prototype.goto("/pages/cardLists/index");
			}
			if (role_type == 1) {
				return Vue.prototype.goto("/pages/user/website/products/lists/index", 2);
			}
			if (role_type == 2) {

				return Vue.prototype.goto("/pages/shop/index/index", 2);
			}
			if (role_type == 3) {
				return Vue.prototype.goto("/pages/cardLists/index");
			}
			if (role_type == 4) {
				return Vue.prototype.goto("/pages/index/index", 2);
			}else{
					return Vue.prototype.goto("/pages/shop/index/index", 2);
			}


		},
		Vue.prototype.gotoProduct = (item) => {
			console.log(1)
			if(item.num > 0){
				Vue.prototype.goto(item.is_group ? '/pages/shop/group/show/index?id='+item.id :'/pages/shop/product/show/index?id='+item.id,1)
				return false
			}
		}

}

export default myfun;
