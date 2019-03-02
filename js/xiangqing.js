$(function() {
	
		var str = "";
		var id = location.search.split("=")[1];
		var price = location.search.split("=")[2];
		console.log(price );
	var url="http://47.104.244.134:8080/goodsbyid.do"
	$.get(url,{id:id},function(res){
			 console.log(res)
									str="<img src='"+res.picurl+"'><img src='"+res.picurl+"'><img src='"+res.picurl+"'><img src='"+res.picurl+"'>"
									
									$(".l-m").append(str);
									$(".datu").append(str);
									$(".jiage").html("￥"+res.price)
									$(".R h2").html(res.name)
									var oz = document.getElementById("le");
									var ozoom = document.getElementById("zoom");
									var ozoombox = document.getElementById("zoombox");
									var omid = document.getElementById("mid");
									var cw = omid.clientWidth;
									var ch = omid.clientHeight;
									var obig = document.getElementById("big");
									var obigImg = obig.children;
									var obgImg = obig.children[0];
									var oBox = document.getElementById("box")
									var ali = oBox.children;
									console.log(ali)
									
									for (let h = 1; h <= obigImg.length; h++) {
										//ali[h - 1].onclick = function() {
											for (var j = 0; j < obigImg.length; j++) {
												obigImg[j].style.zIndex = "0";
											}
											
											obigImg[h - 1].style.zIndex = h;
											$(".l-m").mousemove(function(e) {
												var evt = e || event
												var zw = ozoom.offsetWidth;
												var zh = ozoom.offsetHeight;
												console.log(zw, zh,oz.offsetTop)
												var left = evt.pageX - oz.offsetLeft - zw / 2;
												var top = evt.pageY - oz.offsetTop - zh / 2;
												left = left <= 0 ? 0 : left > cw - zw ? cw - zw : left;
												top = top <= 0 ? 0 : top > ch - zh ? ch - zh : top;
												ozoom.style.left = left + "px";
												ozoom.style.top = top + "px";
												obigImg[h - 1].style.left = -left / cw * obgImg.offsetWidth + "px";
												obigImg[h - 1].style.top = -top / ch * obgImg.offsetHeight + "px";
											})
										//}
									}
									
			 }) 
	//右侧服务列表
	$(".serive li").each(function() {
		$(this).hover(function() {
			$(this).css({
				"background": "#008cef"
			})
			var q = $(this).index();
			//console.log(q)
			$(".serive b").eq(q).stop().animate({
				"right": "35px"
			}, 50);

		}, function() {
			var q = $(this).index();
			$(this).css({
				"background": " #51515b"
			})
			$(".serive b").eq(q).stop().animate({
				"right": "-20px"
			}, 50);
		})
	})
	
	
		//console.log(id)
		/* if(getCookie("cart")){  //判断里面是否存在cart的cookie
			var obj = JSON.parse(getCookie("cart"));
			var num = 0;
			for(var i in obj){
				num+=obj[i];
			}
			$("#num2").html(num)
			}else{
				var obj = {};
			} */
			//添加购物车

			$(".buy").click(function(){
				var $inputVal = $("#tex");
				/* if(obj[id]==undefined){
					obj[id] = 1;
				}else{
					obj[id]=$inputVal.val() ;
				} */
				//var $z=num+parseInt($inputVal.val());
				if (getCookie("lart")) {
				
					var obj = JSON.parse(getCookie("lart"));
					}
					var $z=obj[1]+parseInt($inputVal.val())
				$("#num2").html($z);
				obj[1]=$z
				/* $coun=$inputVal.val();
				obj[id]=$coun; */
				var objToStr = JSON.stringify(obj);
				setCookie("lart",objToStr,7);
			})
				/* if (getCookie("lart")) {
			
				var obj = JSON.parse(getCookie("lart"));
				}
				$("#num2").html(obj[1]) */
			/* if(obj[id]==undefined){
				obj[id] = 1;
			}else{
				obj[id]+=1 ;
			} */
			/* var num = 0;
			for(var i in obj){
				num+=obj[i];
			} */
			/* $("#num2").html(num); */ 
			/* var $inputVal = $("#tex")
			$coun=$inputVal.val();
			obj[id]=$coun;
			var objToStr = JSON.stringify(obj);
			setCookie("cart",objToStr,7); */
		//console.log("aa")
		$("#gouwu").click(function() {
		window.location.href = "cart.html"
	})
	//详情商品展示

	$(".l-m").hover(function() {
		$(".datu").css({
			"display": "block"
		})
		$(".zoom").css({
			"display": "block"
		})
	}, function() {
		$(".datu").css({
				"display": "none"
			}),
			$(".zoom").css({
				"display": "none"
			})
	})
	
	//增添商品
	$("#reduce").click(function() {
		console.log("aa")
		var $inputVal = $(this).prev('input'),
			$count = parseInt($inputVal.val()) - 1;
		if ($count <= 0) {
			$count = 0;
		}
		$inputVal.val($count)
		if (getCookie("lart")) {
		
			var obj = JSON.parse(getCookie("lart"));
			}
			$token=obj[0]
		var url2="http://47.104.244.134:8080/cartsave.do"
		 $.get(url2,{gid:id,token:$token},function(res){
			console.log(res)
		}); 
	})
	$("#plus").click(function() {
		console.log("aa")
		var $inputVal = $("#tex"),
			$count = parseInt($inputVal.val()) + 1;
		$inputVal.val($count)
		if (getCookie("lart")) {
		
			var obj = JSON.parse(getCookie("lart"));
			}
			$token=obj[0]
		var url2="http://47.104.244.134:8080/cartsave.do"
		 $.get(url2,{gid:id,token:$token},function(res){
			console.log(res)
		}); 
	})
	
	
})
