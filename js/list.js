// JavaScript Document
function show(){
	document.getElementById("nav-left-select").style.display="block";
	}
function hidd(){
	document.getElementById("nav-left-select").style.display="none";
	}
	
window.onload=function(){
	var nrl=document.getElementById("nrl");
	nrl.onmouseover=function(){
		document.getElementById("nav-right-list").style.display="block";
		}
	nrl.onmouseout=function(){
		document.getElementById("nav-right-list").style.display="none";
		}
	}

$(function() {
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
	/*热卖商品*/
	$(".main-bottom ul li").hover(function() {
		$(this).find('.shangping-buy').css({"display":"block"});
	},function(){
		$(this).find('.shangping-buy').css({"display":"none"});
	});
});