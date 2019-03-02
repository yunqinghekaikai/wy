$(function(){
	//正则表达式验证
	$(".num").change(function(){
		  var myreg=/^[a-z0-9A-Z]{2,}$/;
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
	$(".pas1").on("change",function(){
		var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
;
		if(!reg.test($(".pas1").val())){
			$(".xinxi3").html("邮箱格式错误");
		}else{
			$(".xinxi3").html("");
		}
	})
	 $("input").change(function(){
		$(".sub").css({"background":"blue"})
	}) 
	//后台验证
	$(".num").on("blur",function(){
		$.get("http://47.104.244.134:8080/username.do",{username:$(this).val()},function(res){
			if(res.msg=="失败"){
				console.log("用户名可用");
			}else{
				console.log("不可用");
			}
		})
	})
	//邮箱验证
	$(".pas1").on("blur",function(){
		$.get("http://47.104.244.134:8080/useremail.do",{email:$(this).val()},function(res){
			if(res.msg=="失败"){
				console.log("邮箱可用");
			}else{
				console.log("不可用");
			}
		})
	})
	//验证
	$(".sub").on("click",function(){
		$.post("http://47.104.244.134:8080/usersave.do",{"username":$(".num").val(),"password":$(".pas").val(),"email":$(".pas1").val(),"sex":"男"},function(res){
			console.log(res);
					if(res.msg=="成功"){
						alert("注册成功")
					}
		})
	})
		
})