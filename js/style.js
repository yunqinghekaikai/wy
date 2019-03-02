var count = 0;
var i = 0;
var k = 0;
var l=0;
var timer3,timer2,timer;
$(function() {

	//大轮播图
	function show() {
		timer = setInterval(function() {
			//console.log($(".lb"))
			$(".lb").stop().animate({
				"left": "-" + (count) * 800 + "px"
			});
			$(".xiaoqiu").children().eq(count).addClass("active").siblings().removeClass("active");
			count++;
			if (count == 6) {
				count = 0
			}



		}, 3000)
	}
	show();
	//下一个上一个按钮点击
	 $(".next").click(function() {
		console.log(count);
		count=count+1
		$(".lb").stop().animate({
			"left": "-" + (count) * 800 + "px"
		});
		$(".xiaoqiu").children().eq(count).addClass("active").siblings().removeClass("active");
		if (count == 6) {
			count = 0
			$(".lb").stop().animate({
				"left": "-" + (count) * 800 + "px"
			});
			$(".xiaoqiu").children().eq(count).addClass("active").siblings().removeClass("active");
		}
	}) 
	$(".prev").click(function() {
		console.log(count);
		count=count-1
		$(".lb").stop().animate({
			"left": "-" + (count) * 800 + "px"
		});
		$(".xiaoqiu").children().eq(count).addClass("active").siblings().removeClass("active");
		if (count <0) {
			count = 5
			$(".lb").stop().animate({
				"left": "-" + (count) * 800 + "px"
			});
		}
	}) 
	
	
	
	
	
	$(".xiaoqiu").children().hover(function() {
		count = $(this).index();
		//console.log(count);
		$(".xiaoqiu").children().eq(count).addClass("active").siblings().removeClass("active");
		$(".xiaoqiu").children().css({
				"left": "0px"
			}),
			$(".lb").stop().animate({
				"left": "-" + (count) * 800 + "px"
			});
			
		clearInterval(timer);
	}, function() {
		show()

	})
	$(".img").mouseover(function() {
		clearInterval(timer)
		$(".next").css({
			"background": "#303030"
		})
		$(".prev").css({
				"background": "#303030"
			})
			//console.log("aa")
			/* $(".next").click(function() {
				console.log(count);
			}) */

	})
	$(".img").mouseout(function() {
		show()
		$(".next").css({
			"background": ""
		})
		$(".prev").css({
			"background": ""
		})
	})

	//小轮播图
	function show2() {
		clearInterval(timer2);
		timer2 = setInterval(function() {
			//console.log($(".lb"))
			$(".l-b").stop().animate({
				"left": "-" + (k) * 558 + "px"
			});
			$(".xiaoqiu2").children().eq(k).addClass("active2").siblings().removeClass("active2");
			k++;
			if (k == 3) {
				k = 0
			}



		}, 2000)
	}
	show2();
	$(".xiaoqiu2").children().hover(function() {
		clearInterval(timer2);
		k = $(this).index();

		$(".xiaoqiu2").children().eq(k).addClass("active2").siblings().removeClass("active2");
		$(".xiaoqiu2").children().css({
				"left": "0px"
			}),
			$(".l-b").stop().animate({
				"left": "-" + (k) * 558 + "px"
			});

	}, function() {
		show2()

	})
	$(".X-L").mouseover(function() {
		clearInterval(timer2);
	})
	$(".X-L").mouseout(function() {
		show2()

	})

	//第三个轮播图
	function show3() {
		clearInterval(timer3);
		timer3 = setInterval(function() {
			//console.log($(".lb"))
			//console.log("aa")
			$(".jie ul").stop().animate({
				"left": "-" + (l) * 558 + "px"
			});
			$(".t").children().eq(l).addClass("active3").siblings().removeClass("active3");
			l++;
			if (l== 3) {
				l = 0
			}



		}, 2000)
	}
	show3();
	 $(".t").children().hover(function() {
		clearInterval(timer2);
		p = $(this).index();

		$(".t").children().eq(p).addClass("active3").siblings().removeClass("active3");
		$(".t").children().css({
				"left": "0px"
			}),
			$(".jie ul").stop().animate({
				"left": "-" + (p) * 558 + "px"
			});

	}, function() {
		show3()

	})
	$(".jie").mouseover(function() {
		clearInterval(timer3);
	})
	$(".jie").mouseout(function() {
		show3()

	}) 
	//导航条高度的检测
	window.onscroll = function() {
		function huhu(e) {
			var evt = e || event;
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop >= $(window).height()) {
				$(".fix").slideDown("fast");
				$(".list").css({
					"display": "block"
				});
				//console.log($(".list").children())
				$(".list ul").children().eq(Math.floor(scrollTop / $(window).height() - 0.6)).addClass("styl").siblings().removeClass(
					"styl");
				$(".te8").click(function() {
					document.documentElement.scrollTop = 0;
					document.body.scrollTop = 0;
				})

				//点击事件的获取
				$(".list ul").children().each(function() {
					$(this).click(function() {
						console.log($(this).index())
						var l = $(this).index() + 1;
						if (l == 8) {
							l = 0;
						}
						document.documentElement.scrollTop = l * $(window).height();
						document.body.scrollTop = l * $(window).height();
					})
				})
			} else {
				$(".list").css({
					"display": "none"
				});
				$(".fix").slideUp("fast");
			}
		}
		huhu();
	}

	//data的获取
	$(".L-f").children().mouseover(function(e) {
		
		e.stopPropagation();
		$(".data").css({
			"display": "block"
		})
		$(".data").mouseover(function(){
			$(".data").css({
				"display": "block"
			})
		})
	/* 	$(".nav2").mouseover(function(e) {
			e.stopPropagation();
			$(".data").css({
				"display": "block"
			})
		}) */
	})
	$(".L-f").children().mouseout(function() {
		$(".data").css({
			"display": "none"
		})
		$(".data").mouseout(function(){
			$(".data").css({
				"display": "none"
			})
		})
		/* $(".nav2").mouseout(function(e) {
			//e.stopPropagation();
			e.stopPropagation();
			$(".data").css({
				"display": "none"
			})
		}) */
	})

	//数据调取

	var url = "http://47.104.244.134:8080/goodsbytid.do"
	$.get(url, {
		tid: 13,
		page: 1,
		limit: 16
	}, function(res) {
		var arr = [];
		for (i = 0; i < res.data.length; i++) {
			arr.push(res.data[i].name);

		}
		$(".L-f").children().each(function() {
            
			$(this).hover(function() {
				$(".data ul").children().remove();
				var j = $(this).index();
				var $li = $('<li></li>');
				$li.append(arr[j]);
				$(".data ul").append($li);
				$li.click(function() {
					console.log("aa")
					window.location.href = "lieniao.html"
				})
			}, function() {

			})
		})
	})
	
	//右侧服务的监听
	$(".serive li").each(function() {
		$(this).hover(function() {
			$(this).css({
				"background": "#008cef"
			})
			var q = $(this).index();
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

    //搜索接口的使用
	var url="http://47.104.244.134:8080/goodsbytid.do"
	 $.get(url,{tid:13,page:1,limit:622},function(res){
			 console.log(res.data)
			 $(".tex")[0].oninput=function(){
				 var $val=$(".tex").val();
				 var $xinxi=res.data[$val].name
				 $(".zs").css({"display":"block"})
				 $(".zs").html($xinxi);
				 }
				  $(".tex").change(function(){
					    $(".zs").css({"display":"none"})
				  })
				
			 })
		//图片特效的使用	 
		  $(".express").find("img").hover(function(){
			  $(this).stop().animate({"top":"-5px"},500)
		  },function(){
			  $(this).stop().animate({"top":"0px"},500)
			  })
		  $(".express2").find("img").hover(function(){
		  			  $(this).stop().animate({"top":"-5px"},500)
		  },function(){
		  			  $(this).stop().animate({"top":"0px"},500)
		  			  })	  
	   //跳转页面
	    $(".express").find("img").each(function(){
			$(this).click(function(){
				window.location.href="lieniao.html"
			})
			
		})
		$(".l-r").find("img").each(function(){
			$(this).click(function(){
				window.location.href="lieniao.html"
			})
			
		})
		
			$("#gouwu").click(function(){
				window.location.href="cart.html"
			})
		
		$(".express2").find("img").each(function(){
			$(this).click(function(){
				window.location.href="lieniao.html"
			})
			
		})
})
