function lib_bwcheck()
{ 
	this.ver=navigator.appVersion;
	this.agent=navigator.userAgent;
	this.dom=document.getElementById?1:0;
	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
	this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom)?1:0;
	this.ie4=(document.all && !this.dom)?1:0;
	this.ie=this.ie4||this.ie5||this.ie6;
	this.mac=this.agent.indexOf("Mac")>-1;
	this.opera5=this.agent.indexOf("Opera 5")>-1;
	this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0;
	browserVersion = parseInt(this.ver);
	this.ns4=(((navigator.appName.indexOf('Netscape') != -1) && (browserVersion == 4)) || typeof document.classes != "undefined")?1:0;

	this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5 || this.dom)
	return this
}
//---------------------------------------------------------------------------------------------------------------------------------------

var bw = new lib_bwcheck();
var n = 0;
var theframe = "DS_SEARCH";

//---------------------------------------------------------------------------------------------------------------------------------------
function chercheSurPage(chaine,theframe)
{
	//alert("mot recherche : " + chaine);
	//alert("nom du frame : " + theframe);
	var where;
        var ok;
	where = window.parent.frames[theframe]; 

        if (chaine == "") { return false; }

	//alert ("chaine recherchee : " + chaine);
        if (!bw.ie){
			// alert('LAYERS');
			where.focus();
			if (!where.find(chaine)){
			  while(where.find(chaine, false, true)){
				n++;
			  }
			}else{
			  n++;
			}
			if (n == 0){
			  alert("\"" + chaine + "\" word has not been found");
			}
        }
        if (bw.ie){
			//alert('ALL');
			var texte = where.document.body.createTextRange();
			for (var i = 0; i <= n && (ok = texte.findText(chaine)) != false; i++){
			  texte.moveStart("character", 1);
			  texte.moveEnd("textedit");
			}
			if (ok){
			  texte.moveStart("character", -1);
			  texte.findText(chaine);
			  texte.select();
			  texte.scrollIntoView();
			  n++;
			}else{
				  if (n > 0){
					n = 0;
					chercheSurPage(chaine,theframe);
				  }else{
			  		alert("\"" + chaine + "\" word has not been found");
				  }
        	}
        }
        return false;
}
//---------------------------------------------------------------------------------------------------------------------------------------
function ShowPage (page,theframe,mot)
{
	var where;
	n = 0;

	// alert ("page : " + page + ", theframe : " + theframe + ", mot : " + mot);

	if ( theframe != "new" )
	{ 
		where = window.parent.frames[theframe]; 
		//alert("chargement page");
		where.location.href = page;
		//alert("fin chargement page");
	} else {
		var loc = "CAACenMLPOpenPage.htm?page=" + page + ";mots=" + mot;
		var win = open(loc,"NEWPAGE");
		win.focus();
	}
	return;
}
//---------------------------------------------------------------------------------------------------------------------------------------
function temporisation(mot,dest)
{
	// alert("Entree temporisation : mot = " + mot + ", dest = " + dest);
	setTimeout("chercheSurPage('" + mot + "','" + dest+ "')",400);
}
//---------------------------------------------------------------------------------------------------------------------------------------
function top_location(page)
{
	top.location = page;
}
