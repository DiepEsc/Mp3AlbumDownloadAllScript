function downloadAll(){
	links = document.body.innerHTML.match(/\/download\.php\?id=[^"]*/g );
	allLinks="";
	for(i=0;i<links.length;i++){
		allLinks=allLinks+(allLinks.length>0?' \r\n':'')+'http://nhac.vui.vn'+links[i];
	}
	document.getElementById('nctaa').innerHTML="<a href='javascript:;' style='color: blue;' onclick='_downloadNow();'>Tải ngay</a>.<br/>"
	+"<a href=\"data:text/plain;charset=utf-8,"+encodeURIComponent(allLinks)+"\" download=\"nhaccuatui Mp3 Link List by Điệp Esc.txt\" style=\"color: blue;\">Nhấp vào liên kết này để tải file txt</a> hoặc copy các liên kết ở ngay bên dưới";
	textArea = document.getElementById('ta_downloadlinks');
	textArea.setAttribute('class','');
	textArea.value=allLinks;
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
	e.setAttribute('style','display: inline;');
	e.setAttribute('class','fa fa-download');
	e.innerHTML='<a href="javascript:;" id="DiepEsc" onclick="downloadAll();"><span class="icon_download"></span>Download all</a>';
	document.getElementsByClassName('chiaseTab')[0].appendChild(e);
	e.outerHTML=e.outerHTML+"<br><br><p id =\"nctaa\"></p><textarea class='m_banner_hide' id='ta_downloadlinks' style='margin: 0px; height: 130px; width: 100%; resize: none; text-indent: 0;'></textarea>";
}
initUI();
