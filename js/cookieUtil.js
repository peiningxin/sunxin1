
//保存cookie
//参数：
// cookie名，
// cookie的值
// 有效时长：（单位：天）

function saveCookie(cookieName,cookieValue,cookieDates){
	var d = new Date();
	var t = d.getDate()+cookieDates;
	d.setDate(t);
	document.cookie=cookieName+"="+escape(cookieValue)+";expires="+d.toGMTString();
	//document.cookie=cookieName+"="+cookieValue+";expires="+d.toGMTString();
}



//读取cookie
//参数：
//cookie名

//返回值：
//cookie值

function getCookie(cookieName){
	//alert(document.cookie);
	var cookieStr = unescape(document.cookie);
	
	//var cookieStr = document.cookie;
	//1、分割成数组
	var arr = cookieStr.split("; ");
	
	//2、遍历数组查找
	var value="";
	for(var i in arr){
		if(arr[i].indexOf(cookieName+"=")==0){
			value=arr[i].substring((cookieName+"=").length);
			break;
		}
	}
	
	return value;
}

//删除cookie
//参数：
//cookie名；

function removeCookie(cookieName){
	saveCookie(cookiename,"",-1);
}