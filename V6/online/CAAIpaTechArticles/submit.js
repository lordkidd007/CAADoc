var NS4 = false;
var NS7 = false;
var IE  = false;

//alert(navigator.appName);
//alert(navigator.appVersion);

if (navigator.appName == "Netscape")
{
  NSVer = navigator.appVersion;
  NSVer = NSVer.substring(0,1);
  if (NSVer >= 5)
  {
    NS7 = true;
  } 
  else
  {
    NS4 = true;
  }
  doc="document";
  sty="";
  window.defaultstatus="CAA Version 5";
} else {
  IE = true;
  doc="document.all";
  sty=".style";
}

// Link withtout prereq: to be used cautiously
function CAAlinkOutOfPreqs(url)
{
	if (NS7)
	{
		//alert("Mozilla");
		try {
			xmlhttp = new XMLHttpRequest();
		} 
		catch (e) { xmlhttp=false; } 
	} else {
		//alert("Internet Explorer");
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false;
			}
		}
	}
	var urlToSearch = "../"+url;
	var urlDummy    = "";
	var url404      = "CAADocQuickRefs/CAADoc404.htm";
	var main = parent.frames["mainsm"];
	if (xmlhttp != null) {
		try {
			//alert("xmlhttp is not NULL");
			xmlhttp.open("GET", urlToSearch, true);
			xmlhttp.onreadystatechange=function() {
				//alert("xmlhttp.readyState"+xmlhttp.readyState);
				//alert("xmlhttp.status "+xmlhttp.status);
				if (xmlhttp.readyState==4) {
				//alert("xmlhttp.status "+xmlhttp.status);
					if (xmlhttp.status==200) {
						//alert("URL Exists!");
						main.frameElement.src = urlDummy;
						main.frameElement.src = url;
					}
					else if (xmlhttp.status==404) {
						//alert("URL doesn't exist!");
						main.frameElement.src = urlDummy;
						main.frameElement.src = url404;
					}
					else if (xmlhttp.status==2) {
						//alert("URL doesn't exist!");
						main.frameElement.src = urlDummy;
						main.frameElement.src = url404;
					}
					else if (xmlhttp.status==3) {
						//alert("URL doesn't exist!");
						main.frameElement.src = url404;
					}
					else if (xmlhttp.status==0) {
						//alert("URL exists! "+url);
						main.frameElement.src = urlDummy;
						main.frameElement.src = url;
					} else {
						alert("Status is "+xmlhttp.status);
					}
				}
			}
			//alert("xmlhttp.send Sending null");
			xmlhttp.send(null);
			//alert("Apres send null "+main.name);
		}
		catch (er) {
			//alert ("Exception caught");
			if (NS7) {
				main.frameElement.src = urlDummy;
				main.frameElement.src = url404;
			}
		}
	}
}

// Link to a URL
function CAAlinkUrl(iUrl)
{
  window.open(iUrl, "_blank");
}



function CAAlink(iLanguage, iFramework, iObjectType, iInterface, iMethod)
{
  var url, dir, name;
  dir = "../generated/refman/";
  if (!iFramework)
  {
    url = dir + "main.htm";
  }
  else
  {
    if (iFramework == "Deprecated")
    {
      url = "../generated/refman/Deprecated.htm";
    }
    else
    {
      if (!iObjectType && !iInterface)
      {
        url = dir + iFramework + ".htm";
      }
      else
      {
        name = iObjectType.toLowerCase() + "_" + iInterface.toLowerCase();
        if (!iMethod)
        {
          url = dir + iFramework + "/" + name + ".htm";
          //alert(url);
        }
        else
        {
          url = dir + iFramework + "/" + name + ".htm#" + iMethod;
        }
      }
    }
  }
//  window.open(url, "CAAPage");
//window.open(url, window.name);
  if (NS7)
  {
    // Mozilla
//    window.parent.frames["CAAPage"].location = url;
    //window.open(url, window.name);
    CAAlinkOutOfPreqs(url);
  }
  else
  {
    // Netscape or IE
	// alert("Netscape or IE");
    //window.open(url, "CAAPage");
    //window.open(url, window.name);
    CAAlinkOutOfPreqs(url);
  }
}

function CAAlinkJava(iPackage, iInterface, iMethod)
{
  var url, dir;
  dir = "../docs/api/com/dassault_systemes/";

  if (!iPackage)
  {
    url = "../docs/api/index.html";
  }
  else
  {
    if (iPackage == "Deprecated")
    {
      url = "../docs/api/deprecated-list.html";
    }
    else
    {
      if (!iInterface)
      {
        url = dir + iPackage + ".html";
      }
      else
      {
        if (!iMethod)
        {
          url = dir + iPackage + "/" + iInterface + ".html";
        }
        else
        {
          url = dir + iPackage + "/" + iInterface + ".html#" + iMethod;
        }
      }
    }
  }
//  window.open(url, "CAAPage");
//  window.open(url, window.name);
  if (NS7)
  {
    // Mozilla
//	alert("Mozilla");
//    window.parent.frames["CAAPage"].location = url;
    //window.open(url, window.name);
    CAAlinkOutOfPreqs(url);
  }
  else
  {
    // Netscape or IE
//	alert("Netscape or IE");
//    window.open(url, "CAAPage");
    //window.open(url, window.name);
    CAAlinkOutOfPreqs(url);
  }
}

// Link to a URL but open a new window
function CAAlinkUrlNewWin(iUrl)
{
  window.open(iUrl, "_new");
}

function insertLinkToTop()
{
	document.writeln('<table>');
	document.writeln('<tr>');
	document.writeln('<td width="100%"><hr class="top"></td>');
	document.writeln('<td><a href="#Top" class="top"><img src="butix_top.gif" alt="Top"></a></td>');
	document.writeln('</tr>');
	document.writeln('</table>');
}

function insertCopyright()
{
	document.writeln('<p class="copyright"><strong>3D</strong>EXPERIENCE R2014x &#169; 2014 Dassault Syst&#232;mes.');
	//document.writeln('Special Notices ');
	//document.writeln('<a href="../CAADocQuickRefs/CAADocSpecialNoticesCATIA.htm">CAA CATIA</a> | ');
	//document.writeln('<a href="../CAADocQuickRefs/CAADocSpecialNoticesDELMIA.htm">CAA DELMIA</a> | ');
	//document.writeln('<a href="../CAADocQuickRefs/CAADocSpecialNoticesENOVIA.htm">CAA ENOVIA</a></p>');
}


/**
 * Same function as for tree + catch
 */
function CAAloadFileContent(url, iStop)
{
	var req = null;
	if (window.XMLHttpRequest) req = new XMLHttpRequest();
	else if (window.ActiveXObject) req = new ActiveXObject("Microsoft.XMLHTTP");
	if (req == null) throw new Error("XMLHttpRequest not supported.");
	
	// --- sync mode
	req.open("GET", url, false);

	try {	
	req.send(null);
	}
	catch (err) {
		if (! iStop)  {
			return CAAloadFileContent('../CAADocJavaScript/FileNotInstalled.htm', 'Y');
			}
		else	{
			throw new Error("File Not Found");
			}
      }
	return req.responseText;
}

/** 
  * Encapsulation of Load ...
  */
function CAAsafeLinkOutOfPreqs (url) {
	//fram = window.parent.frames["Content"];
	txto= CAAloadFileContent(url);
	window.document.write(txto);
	}
