$(function() {
	var $oCartList = $(".lebiao")
	//$ul=$('<ul class="box"></ul>')
	/* if (getCookie("cart")) {

		var obj = JSON.parse(getCookie("cart"));
		console.log(obj)
		var str = "";
	} */
	/* for(var id in obj){
		for(var j = 0; j < data.length; j++){
			if(id == data[j].id){
				str += "<li><span>"+data[j].title+"</span><span>"+obj[id]+"</span></li>"
			}
		}
	} */
	if (getCookie("lart")) {

		var obj = JSON.parse(getCookie("lart"));
	}
	if (obj == undefined) {
		window.location.href = "logo.html"
	} else {
		var $token = obj[0];
	}
	var str = "";
	var url = "http://47.104.244.134:8080/cartlist.do"
	$.get(url, {
		token: $token
	}, function(res) {
		console.log(res)
		//for (var id in obj) {
		for (var i = 0; i < res.length; i++) {
			//if (id == res.data[i].id) {
			//str += "<li><span>"+res.data[i].info+"</span><span>"+obj[id]+"</span></li>"
			str += "<ul class='box'><li><input type='checkbox'  class='whole_check'><b>" + res[i].id +
				"</b><span class='gid'>" + res[i].gid + "</span></li><li>" + res[i].goods.name + "</li><li class='Price'>" +
				res[i].goods.price + "</li><li>" + 0.00 +
				"</li><li><a class='reduce'>-</a><input type='text' value='" + res[i].count +
				"' class='sum'><a class='plus'>+</a></li><li class='sum-z'>" + res[i].goods.price * res[i].count +
				"</li><li class='delete'>收藏移除</li></ul>"
			//}
		}

		//}
		$oCartList.append(str);
		//修改购物车
		/* var url2 = "http://47.104.244.134:8080/cartupdate.do"
		$.get(url2,{id:}) */
		//判断是否勾选
		//console.log( $(".whole_check"))
		//console.log($("#all"))
		$("#all").click(function() {

			if ($(this).is(':checked')) {
				$(".whole_check").prop("checked", true);
			} else {
				$(".whole_check").prop("checked", false);
			}
			totalMoney();
		})
		$(".whole").click(function() {

			if ($(this).is(':checked')) {
				$(".whole_check").prop("checked", true);
			} else {
				$(".whole_check").prop("checked", false);
			}
			totalMoney();
		})
		//判断子商品是否选中
		$(".whole_check").each(function() {
			$(this).click(function() {
				if ($(this).is(':checked')) {
					//判断：所有单个商品是否勾选
					var len = $(".whole_check").length;
					var num = 0;
					$(".whole_check").each(function() {
						if ($(this).is(':checked')) {
							num++;
						}
					});
					if (num == len) {
						$("#all").prop("checked", true)
					}
				} else {
					//单个商品取消勾选，全局全选取消勾选
					$("#all").prop("checked", false)
				}
				totalMoney()
			})

		})

		//获取添加按钮
		$(".reduce").click(function() {
			var $inputVal = $(this).next('input'),
				$count = parseInt($inputVal.val()) - 1;
			if ($count <= 0) {
				$count = 0;
			}
			$inputVal.val($count);
			//console.log($(this).parents(".box").find("b").html())
			var Id = $(this).parents(".box").find("b").html()
			var gid = $(this).parents(".box").find("span").html()
			var $pr = $(this).parents(".box").find(".Price").html()
			var $sumz = $(this).parents(".box").find(".sum-z")
			//var $sum = $(this).parents(".box").find(".sum")
			console.log($pr)
			//obj[Id] = $count;


			//console.log($count)
			//var $sumzz=$pr*($count);
			//console.log($sumzz)
			$sumz.html($pr * ($count));
			if (getCookie("lart")) {

				var obj = JSON.parse(getCookie("lart"));
			}
			var url2 = "http://47.104.244.134:8080/cartupdate.do"
			$.get(url2, {
				id: Id,
				gid: gid,
				num: -1,
				token: obj[0]
			}, function(res) {
				console.log(res)
			})
			/* var objToStr = JSON.stringify(obj);
			setCookie("cart", objToStr, 7); */
            totalMoney()
		})
		$(".plus").click(function() {
			var $inputVal = $(this).prev('input'),
				$count = parseInt($inputVal.val()) + 1;
			if ($count <= 0) {
				$count = 0;
			}
			$inputVal.val($count);
			var gid = $(this).parents(".box").find("span").html()
			var Id = $(this).parents(".box").find("b").html()
			var $pr = $(this).parents(".box").find(".Price").html()
			var $sumz = $(this).parents(".box").find(".sum-z")

			$sumz.html($pr * ($count))
			var url2 = "http://47.104.244.134:8080/cartupdate.do"
			$.get(url2, {
				id: Id,
				gid: gid,
				num: 1,
				token: 5347
			}, function(res) {
				console.log(res)
			})
			totalMoney()
			/* var objToStr = JSON.stringify(obj);
			setCookie("cart", objToStr, 7); */
		})
		//删除商品
		$(".delete").click(function() {
			$(this).parent().remove()
			var gid = $(this).parents(".box").find("span").html()
			var Id = $(this).parents(".box").find("b").html()
			var numberz = $(this).parents(".box").find(".sum").val()
			var url2 = "http://47.104.244.134:8080/cartupdate.do"
			$.get(url2, {
				id: Id,
				gid: gid,
				num: 0,
				token: 5347
			}, function(res) {
				console.log(res)
			})
			if (getCookie("lart")) {

				var obj = JSON.parse(getCookie("lart"));
			}
			var count = obj[1]
			obj[1]=count-numberz
			var objToStr = JSON.stringify(obj);
			setCookie("lart", objToStr); 
			console.log(obj[1])
		})
		//计算价格
		function totalMoney() {
			var money = 0
			var k = 0
			$(".whole_check").each(function() {
				if ($(this).is(':checked')) {
					var i = parseInt($(this).parents(".box").find(".sum").val());

					k += i
					var goods = parseInt($(this).parents(".box").find(".sum-z").html())

					money += goods
					console.log(money)
				}
				$(".price").html('￥' + money)

			})


		}

	})



})
