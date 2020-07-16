
$(function(){
	// 汉堡导航菜单
	// 离开导航复原
	$(".navbar-collapse").mouseleave(function(){
		// animate():自定义动画
		$(".navbar-collapse").animate({height:"0"},300);
		// removeClass():移除class
		setTimeout(function () { $(".navbar-collapse").removeClass("in"); }, 300);
	})
	// 汉堡导航菜单 end
	
	// 打开登录界面
	$(".sign_a,.user_sign").mousedown(function(){
		$(".sign").css("display","block");
		$(".popup-mask").css("display","block");
	})
	$(".a_close").mousedown(function(){
		$(".sign").css("display","none");
		$(".popup-mask").css("display","none");
	})
	// 打开登录界面 end
	
	// 登录跳转
	$("#usersign_but").click(function(){
		window.location.href="after-login.html";
	})
	// 登录跳转 end
	
	// palyicon悬停效果过渡
	// mv播放按钮
	$(".cont_box_big_mv").mousemove(function(){
		$("#mv_play_normal").css({"opacity":"0","transform":"translateX(70%)","transition-delay":"380ms, 0ms, 0ms"});
		$("#mv_play_hover").css({"opacity":"1","transform":"translateX(0%)","transition-delay":"0ms, 0ms, 0ms"});
		$("#mv_play").css("transform","scale(1)");
	})
	$(".cont_box_big_mv").mouseout(function(){
		$("#mv_play_normal").css({"opacity":"1","transform":"translateX(0%)","transition-delay":"0ms, 0ms, 0ms"});
		$("#mv_play_hover").css({"opacity":"0","transform":"translateX(-70%)","transition-delay":"380ms, 0ms, 0ms"});
		$("#mv_play").css("transform","scale(0.97)");
	})
	// 单曲播放按钮
	// 1
	$("#single_middle1").mousemove(function(){
		$("#single_paly_normal1").css({"opacity":"0","transform":"translateX(70%)","transition-delay":"380ms, 0ms, 0ms"});
		$("#single_paly_hover1").css({"opacity":"1","transform":"translateX(0%)","transition-delay":"0ms, 0ms, 0ms"});
		$("#album_play1").css("transform","scale(1)");
	})
	$("#single_middle1").mouseout(function(){
		$("#single_paly_normal1").css({"opacity":"1","transform":"translateX(0%)","transition-delay":"0ms, 0ms, 0ms"});
		$("#single_paly_hover1").css({"opacity":"0","transform":"translateX(-70%)","transition-delay":"380ms, 0ms, 0ms"});
		$("#album_play1").css("transform","scale(0.97)");
	})
	// 2
	$("#single_middle2").mousemove(function(){
		$("#single_paly_normal2").css({"opacity":"0","transform":"translateX(70%)","transition-delay":"380ms, 0ms, 0ms"});
		$("#single_paly_hover2").css({"opacity":"1","transform":"translateX(0%)","transition-delay":"0ms, 0ms, 0ms"});
		$("#album_play2").css("transform","scale(1)");
	})
	$("#single_middle2").mouseout(function(){
		$("#single_paly_normal2").css({"opacity":"1","transform":"translateX(0%)","transition-delay":"0ms, 0ms, 0ms"});
		$("#single_paly_hover2").css({"opacity":"0","transform":"translateX(-70%)","transition-delay":"380ms, 0ms, 0ms"});
		$("#album_play2").css("transform","scale(0.97)");
	})
	// palyicon悬停效果过渡 end
	
	// 切换过渡动画
	// 打开时动画函数
	function open(){
		$("#box-move-l").css({"animation":"leftHide .6s cubic-bezier(0.7, 0.3, 0, 1)","animation-delay":".2s"});
		$("#box-move-r").css({"animation":"rightHide .6s cubic-bezier(0.7, 0.3, 0, 1)","animation-delay":".2s"});
		$("#album-info-l").css({"animation":"leftHide .8s cubic-bezier(0.7, 0.3, 0, 1)"});
		$("#album-info-r").css({"animation":"rightHide .8s cubic-bezier(0.7, 0.3, 0, 1)"});
		$("#title-move-t").css({"animation":"topHide .8s cubic-bezier(0.7, 0.3, 0, 1)"});
	}
	// 关闭时动画函数
	function close(){
		$("#box-move-l").css({"animation":"leftShow .6s cubic-bezier(0.7, 0.3, 0, 1)"});
		$("#box-move-r").css({"animation":"rightShow .6s cubic-bezier(0.7, 0.3, 0, 1)"});
		$("#album-info-l").css({"animation":"leftShow .8s cubic-bezier(0.7, 0.3, 0, 1)"});
		$("#album-info-r").css({"animation":"rightShow .8s cubic-bezier(0.7, 0.3, 0, 1)"});
		$("#title-move-t").css({"animation":"topShow .8s cubic-bezier(0.7, 0.3, 0, 1)"});
	}
	// cyr动画函数
	// 出现
	function cyrShow(){
		$(".collection").css("display","none");
		$(".album-cyr").css("display","block");
		// $(".album-bmzw").css("display","none");
		$("#single_middle1").css({"animation":"albumShow .8s"});
		$("#cyr_left_but, #cyr_right_but").css("animation","albumShow .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#cyr-title").css("animation","topShow .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#cyr-song").css("animation","bottomShow .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$(".close-but-hover").css("display","block");
		setTimeout(function () { $(".close-but").css({"transform":"translate3d(0px, 0px, 0px)","opacity":"1"}); }, 700);
	}
	// 消失
	function cyrHide(){
		$(".close-but").css({"transform":"translate3d(0px, -100px, 0px)","opacity":"0"});
		setTimeout(function () { $(".close-but-hover").css("display","none"); }, 1000);
		$("#single_middle1").css({"animation":"albumHide .8s"});
		$("#cyr_left_but, #cyr_right_but").css("animation","albumHide .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#cyr-title").css("animation","topHide .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#cyr-song").css("animation","bottomHide .8s cubic-bezier(0.7, 0.3, 0, 1)");
		setTimeout(function () {
			$(".collection").css("display","block");
			$(".album-cyr").css("display","none");
			// $(".album-bmzw").css("display","none");
		}, 800);
	}
	// bmzw动画函数
	// 出现
	function bmzwShow(){
		$(".collection").css("display","none");
		// $(".album-cyr").css("display","none");
		$(".album-bmzw").css("display","block");
		$("#single_middle2").css({"animation":"albumShow .8s"});
		$("#bmzw_left_but, #bmzw_right_but").css("animation","albumShow .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#bmzw-title").css("animation","topShow .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#bmzw-song").css("animation","bottomShow .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$(".close-but-hover").css("display","block");
		setTimeout(function () { $(".close-but").css({"opacity":"1","transform":"translate3d(0px, 0px, 0px)"}); }, 700);
	}
	// 消失
	function bmzwHide(){
		$(".close-but").css({"transform":"translate3d(0px, -100px, 0px)","opacity":"0"});
		setTimeout(function () { $(".close-but-hover").css("display","none"); }, 1000);
		$("#single_middle2").css({"animation":"albumHide .8s"});
		$("#bmzw_left_but, #bmzw_right_but").css("animation","albumHide .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#bmzw-title").css("animation","topHide .8s cubic-bezier(0.7, 0.3, 0, 1)");
		$("#bmzw-song").css("animation","bottomHide .8s cubic-bezier(0.7, 0.3, 0, 1)");
		setTimeout(function () {
			$(".collection").css("display","block");
			// $(".album-cyr").css("display","none");
			$(".album-bmzw").css("display","none");
		}, 800);
	}
	
	// 点击打开cyr
	$("#cyr-button").click(function(){
		open();
		setTimeout(function () { cyrShow(); }, 800);
	})
	// 点击打开bmzw
	$("#bmzw-button").click(function(){
		open();
		setTimeout(function () { bmzwShow(); }, 800);
	})
	// 点击按钮关闭
	$(".close-but-hover").click(function(){
		cyrHide();
		bmzwHide();
		setTimeout(function () { close(); }, 800);
	})
})

// 1轮播
$(function(){
	// 当前图片
	var i = 0;
	var j = 7;
	var k = 1;
	
	// 左滚动
	function prevL(){
		j--;
		if(j == -1){
			j=7;
		}
		$("#prev-imgs1, #previnf1").css("transform","translateY(-"+ j +"00%)");
	}
	function nextL(){
		k--;
		if(k == -1){
			k=7;
		}
		$("#next-imgs1, #nextinf1").css("transform","translateY(-"+ k +"00%)");
	}
	function playingL(){
		i--;
		if(i == -1){
			i=7;
		}
		$("#imgs1, #single_title1, #singlename1, #singletime1").css("transform","translateY(-"+ i +"00%)");
	}
	$("#cyr_left_but").click(function(){
		playingL()
		prevL();
		nextL();
	})
	
	// 右滚动
	function prevR(){
		j++;
		if(j == 8){
			j=0;
		}
		$("#prev-imgs1, #previnf1").css("transform","translateY(-"+ j +"00%)");
	}
	function nextR(){
		k++;
		if(k == 8){
			k=0;
		}
		$("#next-imgs1, #nextinf1").css("transform","translateY(-"+ k +"00%)");
	}
	function playingR(){
		i++;
		if(i == 8){
			i=0;
		}
		$("#imgs1, #single_title1, #singlename1, #singletime1").css("transform","translateY(-"+ i +"00%)");
	}
	$("#cyr_right_but").click(function(){
		playingR()
		prevR();
		nextR();
	})
})

// 2轮播
$(function(){
	// 当前图片
	var i = 0;
	var j = 9;
	var k = 1;
	
	// 左滚动
	function prevL(){
		j--;
		if(j == -1){
			j=9;
		}
		$("#prev-imgs2, #previnf2").css("transform","translateY(-"+ j +"00%)");
	}
	function nextL(){
		k--;
		if(k == -1){
			k=9;
		}
		$("#next-imgs2, #nextinf2").css("transform","translateY(-"+ k +"00%)");
	}
	function playingL(){
		i--;
		if(i == -1){
			i=9;
		}
		$("#imgs2, #single_title2, #singlename2, #singletime2").css("transform","translateY(-"+ i +"00%)");
	}
	$("#bmzw_left_but").click(function(){
		playingL()
		prevL();
		nextL();
	})
	
	// 右滚动
	function prevR(){
		j++;
		if(j == 10){
			j=0;
		}
		$("#prev-imgs2, #previnf2").css("transform","translateY(-"+ j +"00%)");
	}
	function nextR(){
		k++;
		if(k == 10){
			k=0;
		}
		$("#next-imgs2, #nextinf2").css("transform","translateY(-"+ k +"00%)");
	}
	function playingR(){
		i++;
		if(i == 10){
			i=0;
		}
		$("#imgs2, #single_title2, #singlename2, #singletime2").css("transform","translateY(-"+ i +"00%)");
	}
	$("#bmzw_right_but").click(function(){
		playingR()
		prevR();
		nextR();
	})
})