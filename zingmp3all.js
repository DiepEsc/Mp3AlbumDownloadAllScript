_downloadAll=function(){for(e=$(".fn-128"),links="",soBai=0,i=1;i<e.length;i++)localLink=e[i].getAttribute("href").trim(),localLink.length>5&&(soBai++,links=links+(0==links.length?"":" \r\n")+"http://mp3.zing.vn"+localLink);$("#ta_downloadlinks").removeClass("none"),document.getElementById("zaa").innerHTML="Bạn có thể tải "+soBai+" bài hát.<br/><a href='javascript:;' style='color: blue;' onclick='_downloadNow();'>Tải ngay</a>.<br/><a href=\"data:text/plain;charset=utf-8,"+encodeURIComponent(links)+'" download="Zing Mp3 Link List by Điệp Esc.txt" style="color: blue;">Nhấp vào liên kết này để tải file txt</a> hoặc copy các liên kết ở ngay bên dưới',ta=document.getElementById("ta_downloadlinks"),ta.value=links},_downloadNow=function(){for(links=document.getElementById("ta_downloadlinks").value.split("\n"),i=0;i<links.length;i++)links[i].trim().length>0&&(e=document.createElement("a"),e.setAttribute("href",links[i].trim()),e.setAttribute("download","Điệp Esc"),e.click())},initUI=function(){initDownloadBox();var t,n=document.createElement("a");n.innerHTML='<i class="zicon icon-download"></i><span> Download all</span>',n.setAttribute("class","button-style-1"),n.setAttribute("href","javascript:;"),n.setAttribute("onclick","_downloadAll()"),ta=document.createElement("textarea"),ta.setAttribute("id","ta_downloadlinks"),ta.setAttribute("class","none"),ta.setAttribute("style","margin: 0px; height: 130px; width: 100%; resize: none"),(t=document.location.href.match(/https?:\/\/mp3.zing.vn\/nghe-si\//)?$(".func-tool")[0]:$(".fn-tabgroup")[0])?(t.appendChild(n),t.outerHTML=t.outerHTML+'<p id ="zaa"></p>'+ta.outerHTML):alert("Fail")},initDownloadBox=function(){for(e=$(".download > a"),i=0;i<e.length;i++)e[i].click()},initUI();
