$(function() {
	/*横向导航*/
	$(".nav-right ul li").hover(function() {
		$("#nav-right-list").stop().slideToggle();
	});
	/*搜索框*/
	$(".search-input").focus(function(event) {
		$(this).siblings('.search-text').hide();
	}).blur(function(event) {
		$(this).siblings('.search-text').show();
	});
	$(".search-right").mousemove(function(event) {
		$("#carshoplist").fadeIn(1000);
	}).mouseleave(function(event) {
		$(this).children('#carshoplist').fadeOut(1000);
	});
	/*左侧导航*/
	$("#shangp-list").hover(function() {
		$("#honglajiao").stop().toggle("slow");
	});
	$("#shangp-listx").hover(function() {
		$("#xiaolajiao").stop().toggle("slow");
	});
	
	/*banner轮播图*/
	var $key=0;/*设置播放下一张*/
	var speed=800;
	/*右侧点击*/
	$("#right").click(function(event) {		
		autoplay();
	});
	/*左侧点击*/
	$("#left").click(function(event) {
		$("#ban ul li").eq($key).fadeOut(speed);
		$key--;
		$key=$key%($("#ban ul li").length);		
		$("#ban ul li").eq($key).fadeIn(speed);
		$("#ban ol li").eq($key).addClass('current').siblings().removeClass('current');
	});
	var timer=setInterval(autoplay, 2000);
	function autoplay(){
		$("#ban ul li").eq($key).fadeOut(speed);
		$key++;
		$key=$key%($("#ban ul li").length);		
		$("#ban ul li").eq($key).fadeIn(speed);
		$("#ban ol li").eq($key).addClass('current').siblings().removeClass('current');
	}
	/*整个盒子滑过*/
	$("#ban").hover(function() {
		$("#left,#right").show();
		clearInterval(timer);
		timer=null;
	}, function() {
		$("#left,#right").hide();
		clearInterval(timer);
		timer=setInterval(autoplay, 2000);
	});
	/*轮播点点击*/
	$("#ban ol li").click(function(event) {
		$("#ban ul li").eq($key).fadeOut(speed);
		$key=$(this).index();
		$("#ban ul li").eq($key).fadeIn(speed);
		$(this).addClass('current').siblings().removeClass('current');
	});

	/*热卖商品*/
	$(".product ul li:not(':last(li)')").mousemove(function() {
		$(this).children('.li-in').fadeOut('slow');
		$(this).children('#product-list').fadeIn();
	}).mouseleave(function(event) {
		$(this).children('.li-in').fadeIn();
		$(this).children('#product-list').fadeOut('slow');
	});;
	
	/*精选配件*/
	$(".machine-bd-l-short").hover(function() {
		$(this).children('#machine-pinglun').stop().slideToggle('slow');
	});
});