window.onload=function() {
	/*if (!document.getElementsByClassName) {
		document.getElementsByClassName=function(clsName,parent) {
			var oParent=parent||document;
			var ret=[];
			var els=oParent.getElementsByTagName('*');
			for (var i = els.length - 1; i >= 0; i--) {
				if (els[i].className===clsName
					||els[i].className.indexOf(' '+clsName)>=0
					||els[i].className.indexOf(clsName+' ')>=0
					||els[i].className.indexOf(' '+clsName+' ')>=0) {
					ret.push(els[i]);
				} 
			}
			return ret;
		}
	}*/


	var oClose=document.getElementById('ui_boxyClose'),
	 	panel=document.getElementById('loginPanel'),
	 	oTitle=document.getElementsByClassName('login_logo_webqq')[0];
	var disX=0,
		disY=0;

	var loginState=document.getElementById('loginState'),
		loginStateShow=document.getElementById('loginStateShow'),
		login_state_txt=document.getElementById('login2qq_state_txt'),
		stateList=document.getElementById('loginStatePanel'),
		lis=stateList.getElementsByTagName('li');

	oClose.onclick=function() {
		panel.style.display='none';
	}

	loginState.onclick=function(e) {
		e=e||window.event;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble=true;
		}
		stateList.style.display='block';
	}

	document.onclick=function() {
		stateList.style.display='none';
	}

	for (var i = lis.length - 1; i >= 0; i--) {
		lis[i].onmouseover=function() {
			this.style.background='#ccc';
		}
		lis[i].onmouseout=function() {
			this.style.background='#fff';
		}
		lis[i].onclick=function(e) {
			e=e||window.event;
			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble=true;
			}
			stateList.style.display='none';
			login_state_txt.innerHTML=this.getElementsByClassName('stateSelect_text')[0].innerHTML;
			loginStateShow.className='login-state-show '+this.id;
		}
	}

	oTitle.onmousedown=function(e) {
		e=e||window.event;
		disX=e.clientX-panel.offsetLeft;
		disY=e.clientY-panel.offsetTop;

		document.onmousemove=function(e) {
			e=e||window.event;
			var winW=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
				winH=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
			var l=e.clientX-disX,
				t=e.clientY-disY;
			var maxL=winW-panel.offsetWidth-10,
				maxT=winH-panel.offsetHeight;
			if (l<0) {
				l=0;
			} else if(l>maxL){
				l=maxL;
			}
			if (t<0) {
				t=10;	
			} else if(t>maxT){
				t=maxT;
			}
			panel.style.top=t+'px';
			panel.style.left=l+'px';
		}

		document.onmouseup=function() {
			this.onmousemove=null;
			this.onmouseup=null;
		}
	}		

}