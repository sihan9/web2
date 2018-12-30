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
/*轮播图-封装好的函数*/
function animate(obj,json,callback) {
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var isStop=true;
		for (var attr in json) {
			if(attr=='opacity'){
				var now=parseInt(getStyle(obj,attr)*100);
			}else{
				var now=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-now)/25;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(attr=='opacity'){
				obj.style[attr]=(now+speed)/100;	
			}else{
				obj.style[attr]=now+speed+'px';	
			}		
			var current=now+speed;
			if(attr=='opacity'){
				current=(now+speed)/100;	
			}
			if(json[attr]!=current){
				isStop=false;
			}
			if (isStop) {
				clearInterval(obj.timer);
				callback&&callback();
			}
		}
	},10)
}
function getStyle(obj,style){
	if (obj.currentStyle) {
		return obj.currentStyle[style];
	} else {
		return getComputedStyle(obj)[style];
	}	
}
/*轮播图-轮播效果*/
var mid2_div=document.getElementById('mid2_div');
var index=1;
function next() {
	index++;
	animate(mid2_div,{left:-800*index},function(){
		if (index==7) {
			mid2_div.style.left='-800px';
			index=1;
		}
	});
	navChange();
}
function prev() {
	index--;
	animate(mid2_div,{left:-800*index},function(){
		if (index==0) {
			mid2_div.style.left='-4800px';
			index=6;
		}
	});
	navChange();
}
var time=setInterval(next,2000);
//鼠标划上时，停止轮播，左右箭头淡入
var mid2=document.getElementById('mid2');
var left=document.getElementById('left');
var right=document.getElementById('right');
mid2.onmouseover=function(){
	clearInterval(time);
	animate(left,{opacity:70});
	animate(right,{opacity:70});
}
//鼠标划出时，继续轮播，左右箭头淡出
mid2.onmouseout=function(){
	time=setInterval(next,2000);
	animate(left,{opacity:0});
	animate(right,{opacity:0});
}
//点击左右箭头
right.onclick=next;
left.onclick=prev;
//点击小按钮，对应图片显示在框中
var oNavlist=document.getElementById('nav').children;
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].idx=i;
	oNavlist[i].onclick=function(){
		index=this.idx+1;
		animate(mid2_div,{left:-800*index});
		navChange();
	}
}
//清除所有小圆点的背景色,当前小圆点背景色变红
function navChange(){
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className='';
	}
	if(index==7){
		oNavlist[0].className='active';
	}else if(index==0){
		oNavlist[5].className='active';
	}else{
		oNavlist[index-1].className='active';
	}	
}
/*手机充值输入*/
mid5_select.onclick=function(){
	mid5_p2.innerHTML="";
	mid5_p2.innerHTML="¥"+this.value;
}
/*公告滚动*/
var mid3_div21=document.getElementById("mid3_div21");
var mid3_indext=0;
function mid3_next() {
	mid3_indext++;
	animate(mid3_div21,{top:-41*mid3_indext},function(){
		if (mid3_indext==10) {
			mid3_div21.style.top='0px';
			mid3_indext=0;
		}
	});
}
var mid3_time=setInterval(mid3_next,335);
mid3_div21.onmouseover=function(){
	clearInterval(mid3_time);
}
mid3_div21.onmouseout=function(){
	mid3_time=setInterval(mid3_next,335);
}
/*右侧边栏*/
var sidebar1=document.getElementById("sidebar1");
var sidebar2=document.getElementById("sidebar2");
var sidebar3=document.getElementById("sidebar3");
var sidebar4=document.getElementById("sidebar4");
sidebar1.onmouseover=function(){
	animate(sidebar1,{width:120});
}
sidebar1.onmouseout=function(){
	animate(sidebar1,{width:45});
}
sidebar2.onmouseover=function(){
	animate(sidebar2,{width:120});
}
sidebar2.onmouseout=function(){
	animate(sidebar2,{width:45});
}
sidebar3.onmouseover=function(){
	animate(sidebar3,{width:120});
	sidebar3_img1.style.display='none';
	sidebar3_img2.style.display='block';
}
sidebar3.onmouseout=function(){
	animate(sidebar3,{width:45});
	sidebar3_img1.style.display='block';
	sidebar3_img2.style.display='none';
}
sidebar4.onmouseover=function(){
	animate(sidebar4,{width:120});
}
sidebar4.onmouseout=function(){
	animate(sidebar4,{width:45});
}