$(function(){
	var index=0;
	$(".zx").click(function(){
		$("#zx").show();
		$('#zr,#pl').hide();
	})
	$(".zr").click(function(){
		$("#zr").show();
		$('#zx,#pl').hide();
	})
	$(".pl").click(function(){
		$("#pl").show();
		$('#zr,#zx').hide();
	})
})
