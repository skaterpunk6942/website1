if(typeof console=="undefined"){window.console={log:function(){}}}var HLLibrary={Seperator:"|",setFilter:function(n,v){var o=(v.indexOf(this.Seperator)>-1)?v.split(this.Seperator):v;this._f[n.toLowerCase()]=o},setProperty:function(n,v){this._o[n.toLowerCase()]=v},setLocation:function(v){this._l[v]=1},reset:function(n){if(n&&this._rc[n]){this._rc[n]()}this._b=[];this._f={};this._l={};this._o={};this._s=false;this._c=0;this._d=1;this._rc={}},resetCallback:function(n,c){this._rc[n]=c},hide:function(r,f){f=f||{};if(window.location.host.indexOf("target")!==-1&&r=="control"){f["PreserveCoverage"]=1}this._d=0;this._ds._cov="O";if(this._s){this._c=2;t="&rsn="+encodeURIComponent(r);for(var i=0;i<this._b.length;++i){this._antibeacon(this._b[i].src+t)}}else{this.setProperty("DisplayA",0);this.setProperty("rsn",r);var a="";for(var p in f){a+=(a.length>0?"|":"")+p}this.setProperty("abflags",a);this.submit();this._c=1}},submit:function(){try{var cid=this._o.clientid;if(this._o["clientid"]==164){if(this._o["pagetype"]=="product"){if(typeof br_data==="undefined"){setTimeout(this.submit,10)}else{if(br_data.sku){var re=/skuid=(\d+)/i;var m=re.exec(document.location.search);if(m!=null&&m.length==1&&m[0]!=br_data.sku){this.setProperty("qty","0")}var ks=br_data.sku;if(ks.length<8){ks=(new Array(8-ks.length+1)).join("0")+ks}this.setProperty("prodid",ks);var isp=/^\$(\d+.\d\d)$/;var kp=isp.exec(br_data.price);if(kp){this.setProperty("prodcp",kp[1])}var ks=isp.exec(br_data.sale_price);if(isp.exec(br_data.price)){this.setProperty("prodp",ks[1])}}else{return}}}else{if(window.jQuery&&!this._o.hasOwnProperty("pcount")){this.setProperty("pcount",$("#product-matrix li.product").length)}}}if(document.location.hostname.indexOf("sportsauthority.com")>-1&&!this._o.clientid){var tsakw=this._getUrlParam("kw");if(tsakw!==""){this.setProperty("clientid",160);this.setProperty("pageType","product");this.setProperty("prodid",tsakw);this.setProperty("qty",0)}else{return}}if(this._c!==0){return}this._pGUID=this._newGUID();this._s=true;this.setProperty("rn",this._getRandom(1,100000000000));var includeSkuData=false;if(this._o["clientid"]==92){this.setProperty("minOrganic","9");this._staplesFilterMod()}if(this._o["clientid"]==129){if(this._f.department){delete this._f.department}if(this._f.category){delete this._f.category}if(this._f.phrase){delete this._f.phrase}}var fs=this._toJSON(this._f);if(fs!="{}"){this.setProperty("filters",fs);if(this._o["clientid"]==92||this._o["clientid"]==131||this._o["clientid"]==132||this._o["clientid"]==129){includeSkuData=true}if(this._o["clientid"]==164){this.setProperty("displaya","0")}}var loc="";for(var l in this._l){loc+=(loc.length>0?this.Seperator:"")+l}if(window.location.host.indexOf("target")!==-1){if(loc===""&&this._o.hasOwnProperty("pagetype")&&this._o["pagetype"]=="category"){loc="hl_1_999"}if(this._o.hasOwnProperty("pagetype")&&this._o["pagetype"]=="category"){this.setProperty("maxAds","5")}var c=this._getCookie("s_vi");if(c){this.setProperty("abUser",c);if(this._o["clientid"]==131){this.setProperty("puserid",c)}}if(this._o.hasOwnProperty("taxonomy")&&(this._o["taxonomy"]=="726010"||this._o["taxonomy"]=="510501")){this.setProperty("displaya","0")}var tgt_re=new RegExp("N-.+Z55ick(#|/|$)|-subscription","i");if(tgt_re.test(location.href)){this.setProperty("displaya","0")}var tb=document.getElementById("categoryBanner");if(tb!==null&&typeof tb.attributes["class"]!=="undefined"&&tb.attributes["class"].value=="merchandising"&&!location.toString().match(/target\.com\/(s|c|sb|bp)\//)){this.setProperty("displaya","0")}var tgt_re=new RegExp("-dvm/|-gift-finder/","i");if(tgt_re.test(location.href)){this.setProperty("displaya","0")}if(typeof facetSelectionMap!="undefined"&&this._TH){this._TH=false;if(!this._o.hasOwnProperty("brand")&&facetSelectionMap.hasOwnProperty("brand")){this.setProperty("brand",facetSelectionMap["brand"])}if(!this._o.hasOwnProperty("maxprice")&&facetSelectionMap.hasOwnProperty("maxPrice")){this.setProperty("maxprice",facetSelectionMap["maxPrice"])}if(!this._o.hasOwnProperty("minprice")&&facetSelectionMap.hasOwnProperty("minPrice")){this.setProperty("minprice",facetSelectionMap["minPrice"])}}}this.setProperty("loc",loc);if(!this._o.puserid){var c=this._getCookie("s_vi");if(c){this.setProperty("puserid",c)}else{var gc=this._getCookie("__utma");if(gc){var cookieItems=gc.split(".");if(cookieItems.length==6){this.setProperty("puserid",cookieItems.slice(0,3).join("."))}}}}var hl_qs="&pageGUID="+this._pGUID;for(var t in this._o){if(t=="kw"){hl_qs+="&"+t+"="+encodeURIComponent(this._o[t].replace("+"," ").replace(/[^\w ]/g,"").toLowerCase())}else{if(t=="brand"&&window.location.host.indexOf("rakuten")!=-1){hl_qs+="&"+t+"-nofilter="+encodeURIComponent(this._o[t])}else{if(t=="organicskus"){if(includeSkuData){var c=this._getSkuChunks(this._o[t]);if(c.length>0){hl_qs+="&skuLookupOnly=true&skuId="+encodeURIComponent(c[0])}}}else{if(t=="maxads"){hl_qs+="&maxmes="+encodeURIComponent(this._o[t])}else{if(t=="minads"){hl_qs+="&minmes="+encodeURIComponent(this._o[t])}else{hl_qs+="&"+t+"="+encodeURIComponent(this._o[t])}}}}}}var p=window.location.protocol;var hl_src=p+"//"+this._getUrl(cid)+"?version="+this._ver+hl_qs;var InsertScript=document.createElement("script");InsertScript.type="text/javascript";InsertScript.src=hl_src;InsertScript.async=true;var headDiv=document.getElementsByTagName("head")[0];headDiv.appendChild(InsertScript);if(this._o.hasOwnProperty("organicskus")){this._skuData(this._o.organicskus)}}catch(x){}},logEvent:function(e,o){var bp;if(hl_Scrape){var a=hl_Scrape.hl_attributes;bp={action:"logevent",cid:"128",pagetype:a.pageType,pageguid:a.pageGUID,puserid:a.pUserId,prodid:a.prodID,qty:a.qty,prodp:a.prodP}}else{if(this._pGUID===""){this._pGUID=this._newGUID()}bp={action:"logevent",cid:this._o.clientid,pagetype:this._o.pagetype,pageguid:this._pGUID,puserid:(this._o.puserid?this._o.puserid:""),cuserid:(this._o.cuserid?this._o.cuserid:""),prodid:(this._o.prodid?this._o.prodid:""),qty:(this._o.qty?this._o.qty:""),prodp:(this._o.prodp?this._o.prodp:""),psku:(this._o.parentsku?this._o.parentsku:""),pgrp:(this._o.pgid?this._o.pgid:"")}}bp.ec=e;bp.ep=this._toJSON(o);if(o.hasOwnProperty("add_id")){bp.ei=o.add_id}var ep=[];for(p in bp){ep.push(p+"="+encodeURIComponent(bp[p]))}this._beacon(this._beacon_url+"/beacon?"+ep.join("&"))},logEventCallback:function(e,o,c){},_TH:true,_pGUID:"",_b:[],_loaded:false,_s:false,_c:0,_d:1,_ds:{_bc:[]},_ver:"0.9.0",_url:"www.hlserve.com/Delivery/ClientPaths/Library/Delivery.aspx",_tmgurl:"eu.hlserve.com/Delivery/ClientPaths/TMG/Delivery.aspx",_beacon_url:"//beam.hlserve.com",_o:{},_f:{},_l:{},_rc:{},_needEsc:/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_getUrl:function(c){return(c==70?this._tmgurl:this._url)},_getRandom:function(s,e){return Math.floor(Math.random()*e+s)},_htmlEscape:function(s){return s.replace(/[^\w!@#$%*();:,.?+=-]/g,function(c){return"&"+c.charCodeAt(0)+";"})},_htmlDecode:function(s){var el=document.createElement("div");el.innerHTML=s.replace("&apos;","'");s=el.innerText||el.textContent;return s},_htmlEncode:function(s){var el=document.createElement("div");el.innerText=el.textContent=s;s=el.innerHTML;return s},_maxLenAtWord:function(t,l){if(t.length>l){for(var i=l;i>0;--i){if(t.charAt(i)==" "||t.charAt(i)=="-"){while(i>0&&(t.charAt(i)==" "||t.charAt(i)=="-")){--i}return t.substr(0,i+1)+"..."}}}return t},_newGUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=="x"?r:(r&3|8);return v.toString(16)})},_logError:function(m){try{var b=this._beacon_url+"/admerror?msg="+encodeURIComponent(m.toString());this._fire(b)}catch(x){}},_getSkuChunks:function(d){d=d.replace(/ /g,"");var c=[];var m=false;while(d.length>1800){for(var i=1800;i>0;--i){if(d.charAt(i)=="|"){c.push(d.substr(0,i));d=d.slice(i+1);m=true;break}}if(m){continue}else{break}}c.push(d);return c},_skuData:function(d){var s="&pageguid="+this._pGUID+"&cid="+this._o["clientid"]+"&pagetype="+this._o["pagetype"];var c=this._getSkuChunks(d);var p=window.location.protocol;var b="";for(var i=0;i<c.length;++i){b=p+"//"+this._beacon_url+"/beacon?action=skudata&organicskus="+encodeURIComponent(c[i])+"&seq="+i+"&msgs="+c.length+"&pid="+this._pGUID+":"+i+"&puserid="+this._o["puserid"]+s;this._beacon(b)}},_onload:function(h){if(!this._loaded){if(window.addEventListener){window.addEventListener("load",h,false)}else{if(window.attachEvent){window.attachEvent("onload",h)}else{h()}}}else{h()}},_beacon:function(b){var resolveCoverage=function(){return};overrideCoverage=function(beacon){if(!HLLibrary._ds._bc.length&&beacon.indexOf("action=page")>-1&&!HLLibrary._ds._cov&&beacon.indexOf("c=A")>-1){HLLibrary._ds._cov="O"}if(HLLibrary._ds._cov==null){return beacon}else{return beacon.replace(/(&?c=)(\w)/,"$1"+HLLibrary._ds._cov)}};var t=function(d){setTimeout(function(){c()},d)};var c=function(){if(document.readyState==="complete"){resolveCoverage();b=overrideCoverage(b);HLLibrary._fire(b);if(this._c==2){this._antibeacon(b)}if(b.indexOf("action=imp")>-1){HLLibrary._ds._bc.push(b)}}else{t(20)}};t(1)},_fire:function(b){if(!b||b.length==0){return}var p=window.location.protocol;var e=document.createElement("img");if(b.slice(0,4)!="http"){b=p+b}e.src=b;this._b.push(e)},_antibeacon:function(b){if(b.indexOf("action=imp")>-1){this._onload(function(){HLLibrary._beacon(b.replace("action=imp","action=antiimp"))})}},_staplesFilterMod:function(){try{if(this._f.hasOwnProperty("price")){var pf=this._f["price"].replace(",","").match(/([0-9]*\.?[0-9]+).*?([0-9]*\.?[0-9]+)/);if(pf.length==3){this.setProperty("minPrice",pf[1]);this.setProperty("maxPrice",pf[2]);delete this._f["price"]}}if(this._f.hasOwnProperty("rating")){if(this._f["rating"].length>0){this.setProperty("minRating",this._f["rating"][0]);delete this._f["rating"]}}if(this._f.hasOwnProperty("brand")){this.setProperty("brand",this._f["brand"]);delete this._f["brand"]}}catch(e){}},_toJSON:function(o){try{switch(typeof o){case"string":return this._esc(o);case"number":return isFinite(o)?String(o):"null";case"boolean":case"null":return String(o);case"object":if(!o){return"null"}var p=[];if(Object.prototype.toString.apply(o)==="[object Array]"){for(var i=0;i<o.length;++i){p[i]=this._toJSON(o[i])||"null"}return(p.length===0?"[]":"["+p.join(",")+"]")}else{var v;for(var k in o){v=this._toJSON(o[k]);if(v){p.push(this._esc(k)+":"+v)}}return p.length===0?"{}":"{"+p.join(",")+"}"}}}catch(e){return""}},_esc:function(s){this._needEsc.lastIndex=0;if(this._needEsc.test(s)){return s.replace(this._needEsc,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}else{return'"'+s+'"'}},_numberFormat:function(p,r){var s={"c":"","t":",","d":".","p":2};r=this._merge(r,s);var c=p.toFixed(r.p).split(".");var i=c[0];var d=c.length>1?c[1]:"";var m=/(\d+)(\d{3})/;while(m.test(i)){i=i.replace(m,"$1"+r.t+"$2")}return r.c+i+(p>0?r.d+d:"")},_formatPriceUS:function(p){return this._numberFormat(p,{"c":""})},_formatCommas:function(n){return this._numberFormat(n,{"t":",","p":2})},_getCookie:function(n){var m=n+"=";var s=document.cookie.split(";");for(var i=0;i<s.length;++i){c=s[i];while(c.charAt(0)==" "){c=c.substring(1,c.length)}if(c.indexOf(m)==0){return c.substring(m.length,c.length)}}return null},_merge:function(a,b){if(typeof a==="undefined"){a=b}for(var p in b){if(!a.hasOwnProperty(p)){a[p]=b[p]}}return a},_getUrlParam:function(n){var re=new RegExp("[\\?&]"+n+"=([^&#]*)");var m=re.exec(document.location.search);return m==null?"":decodeURIComponent(m[1].replace(/\+/g," "))},_registerResult:function(g,s){if(!("hookLogicResults" in window)){window.hookLogicResults={"data":[]}}if(s){for(var i=0;i<window.hookLogicResults.data.length;++i){if(window.hookLogicResults.data[i]._id==g){window.hookLogicResults.data[i].hasResults=true;window.hookLogicResults.data[i].skus.push(s);return}}var e={"_id":g,"hasResults":true,"skus":[s]};window.hookLogicResults.data.push(e)}else{var e={"_id":g,"hasResults":false,"skus":[]};window.hookLogicResults.data.push(e)}}};try{HLLibrary._onload(function(){HLLibrary._loaded=true})}catch(e){}function hl_beacon(b){HLLibrary._beacon(b)}function ParseImage(di){var hl_protocol=(("https:"==document.location.protocol)?"https://":"http://");if(hl_protocol=="https://"){di=di.replace("http://",hl_protocol)}return di}function SetCLCookie(rplID,lt){var expiry=new Date();expiry.setDate(expiry.getDate()+10);var value=encodeURIComponent(lt.toString().replace("HTML::",""))+";expires="+expiry.toUTCString();value=value.replace(/%3Cbr%3E/gi,"");rplID=rplID.replace("=","");document.cookie=rplID+"="+value+"; path=/"}function OpenOverlay(cl,overlay){var dimensions=overlay.split("x");if(dimensions.length==2){window.open(cl,"","width="+dimensions[0]+",height="+dimensions[1]+",scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=")}}function hl_AdSlot0(pos,sid,di,cl,dim,lt,llt,llu,alt,tax,oi,win,htag,overlay,beacon){try{if(beacon!=""){HLLibrary._fire(beacon)}var div=document.getElementById("hl_"+sid+"_"+dim);if(div==null){setTimeout('hl_AdSlot0("'+pos+'", "'+sid+'", "'+di+'", "'+cl+'", "'+dim+'", "'+lt+'", "'+llt+'", "'+llu+'", "'+alt+'", "'+tax+'", "'+oi+'", "'+win+'", "'+htag+'", "'+st+'")',250);return}var nw=' target="_top"';if(win=="True"){nw=' target="_blank"'}if(win=="False"&&overlay&&overlay!=""){nw=" onclick=\"javascript:OpenOverlay('http://"+cl+"', '"+overlay+"'); return false;\""}di=ParseImage(di);var tempLT=lt;if(lt.toString().indexOf("HTML::")!=-1){lt="HTML::"}if(htag.indexOf("[hook_iframe]")!=-1){hl_createHLIFrame(htag,div,sid,"hl_iframe_"+sid);return}cl=cl.replace("hmClckThru=/","hmClckThru="+hm_Domain+"/");if(cl.indexOf("[hook_click]")==-1){cl=hl_GetFormattedClickThrough(cl,tax,dim,sid,oi,lt,llt,llu)}if(htag!=""){var dt=new Date().getTime();htag=htag.replace("[timestamp]",dt);div.innerHTML=htag.replace(/\[hook_click\]/g,"http://"+cl.replace(/\[hook_click\]/g,""))}else{div.innerHTML='<a rel="nofollow" href="http://'+cl+'"'+nw+'><img  title="'+alt+'" src="'+di+'" border="0"/></a>'}if(lt.toString().indexOf("HTML::")!=-1){var rplID=cl.substring(cl.indexOf("rplID="),cl.indexOf("&",cl.indexOf("rplID=")+1));SetCLCookie(rplID,tempLT)}hl_CustomAction(pos,sid,di,cl,dim,lt,llt,llu,alt,tax,oi,win,htag,st)}catch(er){}}function hl_createHLIFrame(htag,div,sid,iFrameId){htag=htag.replace(/\[hook_iframe\]/g,"");var hl_dimre=/\[.*?\,.*?\]/;var hl_dims=htag.match(hl_dimre);var hl_dims2=hl_dims[0].replace(/[\[\]]+/g,"");var hl_dimarr=hl_dims2.split(",");var hl_iw=hl_dimarr[0];var hl_ih=hl_dimarr[1];if(hl_iw=="728"){hl_iw="738"}if(hl_ih==600){hl_ih="620"}else{if(hl_ih=="250"){hl_ih="270"}}var hl_iframe=document.createElement("IFRAME");hl_iframe.setAttribute("id",iFrameId);hl_iframe.style.width=hl_iw+"px";hl_iframe.style.height=hl_ih+"px";hl_iframe.style.lineHeight=0;hl_iframe.marginHeight=0;hl_iframe.marginWidth=0;hl_iframe.frameBorder="0";hl_iframe.scrolling="no";hl_iframe.style.top="0px";hl_iframe.style.left="0px";hl_iframe.style.border="0px none";var hl_ibody="<body>";var hl_content="<!DOCTYPE html><head></head>"+hl_ibody+htag+"</body></html>";div.appendChild(hl_iframe);var hl_idoc=hl_iframe.contentWindow.document||hl_iframe.contentDocument;if(hl_idoc.document){hl_idoc=doc.document}hl_idoc.open("text/html","replace");hl_idoc.write(hl_content);window.setTimeout(function(){hl_idoc.close()},1000)}function hl_GetFormattedClickThrough(cl,tax,dim,sid,oi,lt,llt,llu){var toAppendParams="";if(cl.substring(cl.indexOf("hmClckThru")).toUpperCase().indexOf("%3F")==-1){toAppendParams=toAppendParams+"?"}else{toAppendParams=toAppendParams+"&"}toAppendParams=toAppendParams+hl_GetQryStrComponent("tid=HL_",tax)+hl_GetQryStrComponent("_",dim)+hl_GetQryStrComponent("_",sid)+hl_GetQryStrComponent("_",oi)+hl_GetQryStrComponent("&title=",encodeURIComponent(lt))+hl_GetQryStrComponent("&ltitle=",encodeURIComponent(llt))+hl_GetQryStrComponent("&lurl=",llu);return(cl+encodeURIComponent(toAppendParams))}function hl_GetQryStrComponent(key,value){if(value==="undefined"){return""}if(!value){return""}return(key+value)}function hl_SearchAdSlot0(pos,sid,di,cl,dim,lt,llt,llu,alt,tax,oi,win,htag,overlay,beacon){hl_AdSlot0(pos,sid,di,cl,dim,lt,llt,llu,alt,tax,oi,win,htag,overlay,beacon)};