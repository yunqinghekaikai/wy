var count=0;
$(function(){
	//右侧服务的监听
	$(".serive li").each(function(){
		$(this).hover(function(){
			$(this).css({"background":"#008cef"})
			var q=$(this).index();
			$(".serive b").eq(q).stop().animate({"right":"35px"},50);
			
		},function(){
			var q=$(this).index();
			$(this).css({"background":" #51515b"})
			$(".serive b").eq(q).stop().animate({"right":"-20px"},50);
		})
	})
	$("#gouwu").click(function(){
		console.log("aa")
		window.location.href="cart.html"
	})
	//
	 var oList = document.getElementById("prodList");
	 var oLink = document.getElementById("num2");
	 var str = "";
	 var url="http://47.104.244.134:8080/goodsbytid.do"
	 $.get(url,{tid:13,page:1,limit:13},function(res){
	 		 console.log(res)
	 	// console.log(res.data[0].name)
	 		for(var i = 1; i < res.data.length; i++){
	 			//利用拼接的形式(字符串格式拼接)
	 			str += "<li><a href='xiangqing.html?id="+res.data[i].id+"&price="+res.data[i].price+"'><img src='"+res.data[i].picurl+"'><p>"+res.data[i].info+"</p><p>"+res.data[i].price+"</p></a><input type='button' class='addBtn' data-id='"+res.data[i].id+"' value='添加购物车'></li>";   
	 		}
	 		oList.innerHTML = str;
			var aBtns = document.querySelectorAll(".addBtn");
			console.log(aBtns);
			/* if(getCookie("cart")){  //判断里面是否存在cart的cookie
				var obj = JSON.parse(getCookie("cart"));
				var num = 0;
				for(var i in obj){
					num+=obj[i];
				}
				oLink.innerHTML = num;
					
			}else{
				var obj = {};
			} */
			 /* if (getCookie("lart")) {
			
				var obj = JSON.parse(getCookie("lart"));
				}
				var count=obj[1];
			oLink.innerHTML = count; */
			
			 for(var i = 0; i < aBtns.length; i++){
				aBtns[i].onclick = function(){
					if (getCookie("lart")) {
					
						var obj = JSON.parse(getCookie("lart"));
						}
						if(obj==undefined){
							window.location.href="logo.html"
							}else{
								var $token=obj[0];
								
							}
					count++;
					console.log("aa")
					var id = this.getAttribute("data-id");
					/* if(obj[id]==undefined){
						obj[id] = 1;
					}else{
						obj[id]+=1 ;
					} */
					
						
						var url2="http://47.104.244.134:8080/cartsave.do"
					 $.get(url2,{gid:id,token:$token},function(res){
						console.log(res)
					}); 
					oLink.innerHTML = count
					obj[1]=count;
					/* var url3="http://47.104.244.134:8080/cartlist.do"
					$.get(url3,{token:5347},function(res){
						console.log(res)
					}) */
					/* var num = 0;
					for(var i in obj){
						num+=obj[i];
					}
					oLink.innerHTML = num; */
					
					//JSON.stringfiy() 将对象转换成json格式的字符串
					//JSON.parse() 将json格式的字符串转成js对象
				   var objToStr = JSON.stringify(obj);
					setCookie("lart",objToStr); 
				}
			} 
			if (getCookie("lart")) {
			
				var obj = JSON.parse(getCookie("lart"));
				}
				var count=obj[1];
			oLink.innerHTML = count;
	 		})
})