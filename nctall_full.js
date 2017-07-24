function downloadAll(){
	e=$('.playing_absolute')[0];
	uxml=e.innerHTML.match('http\://www\.nhaccuatui\.com/flash/xml\?[^\"]*')[0];
	request = new XMLHttpRequest();
	request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200){
			xml=request.responseText;
			links='';
			matchers=xml.match(/http:\/\/[^\]]*\.mp3/gm);
			for(i=0;i<matchers.length;i++){
				links=links+(links.length>0?' \r\n':'')+matchers[i];
			}
			document.getElementById('nctaa').innerHTML="<a href='javascript:;' style='color: blue;' onclick='_downloadNow();'>Tải ngay</a>.<br/>"
			+"<a href=\"data:text/plain;charset=utf-8,"+encodeURIComponent(links)+"\" download=\"nhaccuatui Mp3 Link List by Điệp Esc.txt\" style=\"color: blue;\">Nhấp vào liên kết này để tải file txt</a> hoặc copy các liên kết ở ngay bên dưới";
			$('#ta_downloadlinks').removeClass('hide');
			$('#ta_downloadlinks')[0].value=links;
		}
	}
	request.open("GET",uxml,true);
	request.send();
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

function initUI(){
	e=document.createElement('li');
	e.innerHTML='<a href="javascript:;" id="DiepEsc" onclick="downloadAll();"><span class="icon_download"></span>Download all</a>';
	$('.box_menu_player')[0].childNodes[1].appendChild(e);
	$('.box_menu_player')[0].childNodes[1].childNodes[2].setAttribute('class','hide');
	$('#btnDownloadPlaylist').addClass('hide');
	e.outerHTML=e.outerHTML+"<br><br><p id =\"nctaa\"></p><textarea class='hide' id='ta_downloadlinks' style='margin: 0px; height: 130px; width: 100%; resize: none; text-indent: 0;'></textarea>";
}
initUI();