/*输入框点击事件*/
function inputBorderFirst(obj){
	obj.style.border="1px solid #3385ff"
	obj.style.borderRight="0";
};

function inputBorderLatter(obj){
	obj.style.border="1px solid #b8b8b8";
	obj.style.borderRight="0";
};

/*上传事件*/


function op(){
	var getPhoto=document.getElementById("inputSelect");
	var ipt=document.getElementById("ipt");
	getPhoto.style.display="block";
	ipt.placeholder="在此处粘贴图片网址"
	ipt.style.borderTop="1px solid #3385ff"
	ipt.style.borderLeft="1px solid #3385ff"
	ipt.style.borderBottom="1px solid #b8b8b8"
	ipt.style.fontSize="18px"
}

/*上传关闭事件*/
function bclick(){
	var getPhotoDown=document.getElementById("inputSelect");
	var iptDown=document.getElementById("ipt");
	getPhotoDown.style.display="none";
	iptDown.placeholder="normal"
	iptDown.style.borderTop="1px solid #b8b8b8"
	iptDown.style.borderLeft="1px solid ##b8b8b8"
	iptDown.style.borderBottom="1px solid #b8b8b8"
	iptDown.style.fontSize="14px"
}