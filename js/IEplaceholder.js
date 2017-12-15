/*
 * placeholder for IE
 * by CSS
 *
 * */
$(function(){
	window.IEplaceholder=function(){
		if(IEVersion()<10){
			$("input[placeholder]").each(function(){
				var _val=$(this).val();
				$(this).siblings(".asPlaceholder").remove();
				if($.trim(_val)==""){
					$(this).parent().css({position:'relative'});
					var words=$(this).attr("placeholder");
					var pos=$(this).position();
					var wid=$(this).outerWidth();
					var hei=$(this).outerHeight();
					var $placeH=$('<div>',{'class':"asPlaceholder",text:words}).css({top:pos.top+"px",left:pos.left+"px",width:wid,height:hei,'line-height':hei+'px'});
					$(this).css({'z-index':2,position:'relative',background:"none"}).after($placeH);
					$placeH.mousedown(function(){
						$(this).prev('input').focus();
						$(this).hide();
					});
				}
					
			});
			$("input[placeholder]").focus(function(){
				$(this).siblings(".asPlaceholder").hide();
			});
			$("input[placeholder]").blur(function(){
				if($.trim($(this).val())==''){
					$(this).css({background:"none"}).siblings(".asPlaceholder").show();
				}else{
					$(this).css({background:""});
				}
			});
		}
	};
	IEplaceholder();
});
function IEVersion(){
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
	if (isIE) {
		var IE5 = IE55 = IE6 = IE7 = IE8 = false;
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var IEVersion = parseFloat(RegExp["$1"]);
		return IEVersion;
	}
}
