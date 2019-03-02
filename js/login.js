$(function(){
	 $(".num").change(function(){
		  var myreg= /^[a-z0-9A-Z]{2,}$/;
		if (!myreg.test($(".num").val())) {
			//alert("请输入以1为开头的数字且为11位有效数字")
			$("#xinxi").html("格式错误")
		    return false;
		} else {
			$("#xinxi").html("")
		    return true;
		}
	}) 
	$(".pas").change(function(){
		var reg=/(?=.*[u4E00-\u9FA5a-zA-Z])(?=.*[u4E00-\u9FA50-9])[u4E00-\u9FA5a-zA-Z0-9]{2,15}/;
		if (!reg.test($(".pas").val())) {
	     $("#xinxi2").html("用户名不能仅为字母和数字")
		    return false;
		} else {
			//console.log("aa")
			 $("#xinxi2").html("")
		    return true;
		}
		
	}) 
	$("input").change(function(){
		$(".sub").css({"background":"blue"})
	})
	//后台验证
	$(".sub").on("click",function(){
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":$(".num").val(),"password":$(".pas").val()},
		function(res){
			console.log(res);
			if(res.msg=="OK"){
				//window.location.href="index.html";
				var obj={};
				var $token=res.data.token;
				obj[0]=$token;
				obj[1]=0;
				var objToStr = JSON.stringify(obj);
				setCookie("lart",objToStr);
				
			}else{
				alert("登录失败");
			}
		})
	})
		
})