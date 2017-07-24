_downloadAll=function(){
	e= $('.fn-128');
	links="";
	soBai=0;
	for(i=1;i<e.length;i++){
		localLink=e[i].getAttribute('href').trim();
		if(localLink.length>5){
			soBai++;
			links=links+(links.length==0?'':' \r\n')+'http://mp3.zing.vn'+localLink;
		}
	}
	$('#ta_downloadlinks').removeClass('none');
	document.getElementById('zaa').innerHTML="Bạn có thể tải "+soBai+" bài hát.<br/>"
	+"<a href='javascript:;' style='color: blue;' onclick='_downloadNow();'>Tải ngay</a>.<br/>"
	+"<a href=\"data:text/plain;charset=utf-8,"+encodeURIComponent(links)+"\" download=\"Zing Mp3 Link List by Điệp Esc.txt\" style=\"color: blue;\">Nhấp vào liên kết này để tải file txt</a> hoặc copy các liên kết ở ngay bên dưới";
	ta=document.getElementById('ta_downloadlinks');
	ta.value=links;
}

_downloadNow=function(){
	links=document.getElementById('ta_downloadlinks').value.split('\n');
	for(i=0;i<links.length;i++){
		if(links[i].trim().length>0){
			e=document.createElement('a');
			e.setAttribute('href',links[i].trim());
			e.setAttribute('download','Điệp Esc');
			e.click();
		}
	}
	
}

initUI=function(){
    initDownloadBox();
	var zt_button=document.createElement('a');
    zt_button.innerHTML='<i class="zicon icon-download"></i><span> Download all</span>';
    zt_button.setAttribute('class', 'button-style-1');
    zt_button.setAttribute('href', 'javascript:;');
    zt_button.setAttribute('onclick', '_downloadAll()');
	ta=document.createElement('textarea');
	ta.setAttribute('id','ta_downloadlinks');
	ta.setAttribute('class','none');
	ta.setAttribute('style','margin: 0px; height: 130px; width: 100%; resize: none');
	var player;
	if(window.location.href.startsWith("http://mp3.zing.vn/nghe-si/")){
		player=document.getElementsByClassName('all-view')[0];
	}
	else{
		player=document.getElementsByClassName('fn-tabgroup')[0];
	}
    if(player){
        player.appendChild(zt_button);
		player.outerHTML=player.outerHTML+"<p id =\"zaa\"></p>"+ta.outerHTML;
    }
    else{
        alert('Fail');
    }
}
initDownloadBox=function(){
	e=$('.download');
	for(i=0;i<e.length;i++){
		e[i].childNodes[0].click();
	}
}
initUI();