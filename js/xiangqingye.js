/*顶部下滑置顶效果*/
window.onload=function () {
	var topFloat=document.getElementsByClassName('topFloat')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if (st>120) {
			topFloat.style.position='fixed';
		} else {
			topFloat.style.position='static';
		}
	}
}
/*毫升按钮动态*/
var mid2_button1=document.getElementById('mid2_button1');
var mid2_button2=document.getElementById('mid2_button2');
var mid2_p8=document.getElementById("mid2_p8");
window.onload=function(){
	mid2_button1.style.background="url(../img/duigou.png) no-repeat 48px 18px";
	mid2_button1.style.outline="1px solid #fe0d4a";
	mid2_p8.innerHTML='"150ml"';
}
mid2_button1.onfocus=function(){
	mid2_button2.style.background="";
	mid2_button2.style.outline="";
	mid2_button1.style.background="url(../img/duigou.png) no-repeat 48px 18px";
	mid2_button1.style.outline="1px solid #fe0d4a";
	mid2_p8.innerHTML='"150ml"';
}
mid2_button2.onfocus=function(){
	mid2_button1.style.background="";
	mid2_button1.style.outline="";
	mid2_button2.style.background="url(../img/duigou.png) no-repeat 48px 18px";
	mid2_button2.style.outline="1px solid #fe0d4a";
	mid2_p8.innerHTML='"200ml"';
}
/*数量件数动态效果*/
var mid2_button5=document.getElementById('mid2_button5');
var mid2_button6=document.getElementById('mid2_button6');
var mid2_input=document.getElementById('mid2_input');
mid2_button5.onclick=function(){
	var value=mid2_input.value-0;
	if(value==2){
		mid2_button5.style.cursor='not-allowed';
	}
	if(value!=1){
		mid2_input.value=value-1;
	}
	
}
mid2_button5.onmouseover=function(){
	if(mid2_input.value==1){
		mid2_button5.style.cursor='not-allowed';
	}else{
		mid2_button5.style.cursor='pointer';
	}
}
mid2_button6.onclick=function(){
	var value=mid2_input.value-0;
	if(value==4){
		mid2_button6.style.cursor='not-allowed';
	}
	if(value!=5){
		mid2_input.value=value+1;
	}
	
}
mid2_button6.onmouseover=function(){
	if(mid2_input.value==5){
		mid2_button6.style.cursor='not-allowed';
	}else{
		mid2_button6.style.cursor='pointer';
	}
}
mid2_input.onchange=function(){
	if (mid2_input.value<1) {
		mid2_input.value='1';
	}else if(mid2_input.value>5){
		mid2_input.value='5';
	}
}
/*加入购物车动态效果*/
var mid2_button4=document.getElementById('mid2_button4');
var jump=document.getElementById('jump');
var jump_button=document.getElementById('jump_button');
var jump_button2=document.getElementById('jump_button2');
mid2_button4.onclick=function(){
	jump.style.display='block';
}
jump_button.onclick=function(){
	jump.style.display='none';
}
jump_button2.onclick=function(){
	jump.style.display='none';
}
/*放大镜效果*/
/*图片选择*/
var mid2_img1=document.getElementById('mid2_img1');
var mid2_img3=document.getElementById('mid2_img3');
var mid2_img4=document.getElementById('mid2_img4');
window.onload=function(){
	mid2_img3.style.border='2px solid #ff9003';
	mid2_img1.src='../img/pp0.jpeg';
	imgBig.src='../img/pp0.jpeg';
}
mid2_img3.onmouseover=function(){
	mid2_img4.style.border='';
	mid2_img3.style.border='2px solid #ff9003';
	mid2_img1.src='../img/pp0.jpeg';
	imgBig.src='../img/pp0.jpeg';
}
mid2_img4.onmouseover=function(){
	mid2_img3.style.border='';
	mid2_img4.style.border='2px solid #ff9003';
	mid2_img1.src='../img/pp1.jpeg';
	imgBig.src='../img/pp1.jpeg';
}
/*放大镜*/
var magBigBox=document.getElementById('magBigBox');
var magArea=document.getElementById('magArea');
var imgBig=document.getElementById('imgBig');
magBox.onmouseover=function(){
	magArea.style.display='block';
	magBigBox.style.display='block';
}
magBox.onmouseout=function(){
	magArea.style.display='none';
	magBigBox.style.display='none';
}
magBox.onmousemove=function(e) {
	var oL=e.clientX-magBox.offsetLeft-magArea.offsetWidth/2;
	var oT=e.clientY-magBox.offsetTop-magArea.offsetHeight/2;
 	var oMaxLeft=magBox.offsetWidth-magArea.offsetWidth;
 	var oMaxTop=magBox.offsetHeight-magArea.offsetHeight;
 	oL=oL>oMaxLeft?oMaxLeft:(oL<0?0:oL);
 	oT=oT>oMaxTop?oMaxTop:(oT<0?0:oT);
 	magArea.style.left=oL+"px";
 	magArea.style.top=oT+"px";
 	var bigleft=-oL*4;
 	var bigtop=-oT*4;
 	imgBig.style.left=bigleft+"px";
	imgBig.style.top=bigtop+"px";
}