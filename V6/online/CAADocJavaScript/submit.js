var isLinkToRef = false;
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
  window.defaultstatus="CAA";
} else {
  IE = true;
  doc="document.all";
  sty=".style";
}

// Event handlers: Capture various window and document events
if (IE) {
    document.onclick=getLink;
    //alert ("Click in the right page");
} else if (NS7) {
    if (window.frameElement.name=="mainsm") {
        window.onclick=getLink;
    //alert ("getLink callback set");
    }
} else {
    alert('Unsupported web browser');
}

//-------------------------------------------------------------------	
function getLink(evt) {
    if (isLinkToRef)
        return;
    var index = 0;
    var link = "";
    if (IE) {
//alert('getLink - click in the window');
        if (window.event.srcElement.href==null) // block simple click in the window
            return;
//alert('getLink '+ window.event.srcElement.href);
//alert('getLink '+ window.event.srcElement.innerHTML);

//alert('length = '+length);
//	    var link = tmp.substr(0, length);
//alert('link = '+link);
        var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
        var fullLink = window.event.srcElement.href;
        if (fullLink != null) {
            index = fullLink.lastIndexOf("/");
//alert('index = '+index);
	        if (index!=-1) {
                link = fullLink.substr(index+1, fullLink.length);
            }

//            if (window.event.srcElement.href=="DSDocDefaultToc.htm"
//                || link=="DSDocDefaultToc.htm") {
//            if (window.event.srcElement.href.endsWith(".htm")
//                || link.endsWith(".htm")) {
//alert('getLink - subtring='+fullLink.substr(fullLink.length-4, fullLink.length));
			if (  fullLink.substr(fullLink.length-7, fullLink.length) == "Toc.htm" ||
				link.substr(link.length-7, link.length) == "Toc.htm" ||
				fullLink.substr(fullLink.length-6, fullLink.length) == "00.htm" ||
				link.substr(link.length-6, link.length) == "00.htm") {
                tocTreeWin.LINK_TO_LOAD = window.event.srcElement.innerHTML;
            } else {
                tocTreeWin.LINK_TO_LOAD = null;
            }
            tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
//	    var tmp =  window.event.srcElement.href;
//	    var length = tmp.lastIndexOf("#");
//if (length!=0) {
//        window.open("DSDocDefaultToc.htm", parent.parent.frames["RightFS"].frames["mainsm"]);
//}
        }
    } else if (NS7) {
        evt = (evt ? evt : window.event);
//alert('getLink - click in the window');
        if (evt.target.href==null) // block simple click in the window
            return;
//alert('getLink 1 '+ evt.target.href);
//alert('getLink 2 '+ evt.target.innerHTML);
    var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
        var fullLink = evt.target.href;
	    if (fullLink != null) {
    	    index = fullLink.lastIndexOf("/");
            link = fullLink.substr(index+1, fullLink.length);

//            if (link=="DSDocDefaultToc.htm") {
//                tocTreeWin.LINK_TO_LOAD = evt.target.innerHTML;
//            } else {
//                tocTreeWin.LINK_TO_LOAD = null;
//            }
            if (link!="") {
                tocTreeWin.LINK_TO_LOAD = evt.target.innerHTML;
            }
            tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
        }
    } else {
        alert('Unsupported web browser\n' +
        'To browse the Encyclopedia, please use:\n' +
        '. Internet Explorer 7 with Windows\n' +
        '. FireFox 2.0 with AIX');
    }
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
	var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
    var urlLength = url.length;
	//if (url.endsWith("Toc.htm")) {
	if (url.substr(urlLength-7, urlLength) == "Toc.htm" ||
		url.substr(urlLength-6, urlLength) == "00.htm") {
		tocTreeWin.LINK_TO_LOAD = url;
		tocTreeWin.PAGE_TO_LOAD = url;
	}
	var urlToSearch = "../"+url;
    //alert("url = "+url);
    //alert("urlToSearch = "+urlToSearch);
	if (urlToSearch.indexOf('#') != -1) {
	    // Remove the anchor part of the searched URL (Required with IE only, but also applied to Mozilla)
	    //alert ("The # character is found at position "+urlToSearch.indexOf('#'));
        urlToSearch = urlToSearch.substring(0, urlToSearch.indexOf('#'));
        //alert (urlToSearch);
	} 
	var urlDummy    = "";
	var url404      = "CAADocQuickRefs/CAADoc404.htm";
	var main = parent.frames["mainsm"];
	if (xmlhttp != null) {
		try {
			//alert("xmlhttp is not NULL");
			xmlhttp.open("GET", urlToSearch, true);
			// xmlhttp.readyState==0 - not initialized
			// xmlhttp.readyState==1 - loading
			// xmlhttp.readyState==2 - loaded
			// xmlhttp.readyState==3 - interactive
			// xmlhttp.readyState==4 - complete
			xmlhttp.onreadystatechange=function() {
				//alert("xmlhttp.readyState = "+xmlhttp.readyState);
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
function CAAlinkHtm(iUrl)
{
  window.open(iUrl, window.name);
}
// Link to a URL but open a new window
function CAAlinkUrlNewWin(iUrl)
{
  window.open(iUrl, "_new");
}

function CAAlink(iLanguage, iFramework, iObjectType, iInterface, iMethod)
{
/*
   alert("iLanguage = "+iLanguage+
   "\niFramework = "+iFramework+
   "\niObjectType = "+iObjectType+
   "\niInterface = "+iInterface+
   "\nMethod = "+iMethod);
*/
  isLinkToRef = true;
  var url, dir, name;
  url = "CAADocQuickrefs/CAADoc404.htm";
  if (iLanguage == "CPP") {
    dir = "../generated/refman/";
  } else if (iLanguage == "IDL") {
    dir = "../generated/interfaces/";
  } else if (iLanguage == "JS") {
    dir = "../generated/js/";
  }

  if (iFramework == "Deprecated") {  // Display the deprecacted index
    if (iLanguage == "CPP") {
      url = dir + "_index/Deprecated.htm";
    } else { // Valid for IDL and JS
      url = dir + "_index/CAADeprecatedIdx.htm";
    }
  } else if (iFramework == "HOME") { // Display the main page
    url = dir + "_index/main.htm";
  } else if (iFramework == "TREE") { // Display the tree page
    url = dir + "_index/tree.htm";
  } else if (iFramework == "INDEX") { // Display the main index page
    url = dir + "_index/HomeIdx.htm";
  } else {
    var xmlFileName = null;
    if (!iFramework) {
      //xmlFileName = "../" + dir + "/CAAMain.xml";
      if (iLanguage == "CPP") {
        xmlFileName = "../CAACenXml/CAACenReferences.xml";
      } else if (iLanguage == "IDL") {
        xmlFileName = "../CAAScdXml/CAAScdReferences.xml";
      }
    } else if (!iObjectType && !iInterface) {
      xmlFileName = "../" + dir + iFramework + "/CAA" + iFramework + ".xml";
    } else {
      xmlFileName = "../" + dir + iFramework + "/CAA" + iFramework + "Toc.xml";
    }
    //alert ("XML file = "+xmlFileName);
    var newNode = null;
    try
    {
	if (iLanguage != "JS") { // Avoid looking for JS XML files
      //alert ("Try XML file = "+xmlFileName);
      var xmlNode = null;
      if(document.all) { // --- Internet Explorer
        //var xmlNode = new ActiveXObject("Microsoft.XMLDOM");
        //var xmlNode = new ActiveXObject("Msxml2.DOMDocument");
        //xmlNode.async = false;
        //xmlNode.load(xmlFileName);
        //return xmlNode;
        var path = parent.parent.document.URL;
        if (path.match("http://") || path.match("https://")) {
          var req = new ActiveXObject("Msxml2.XMLHTTP");
          req.open("GET", xmlFileName, false, null, null);
          req.send("");
          while (req.readyState != 4) {
          }
          xmlNode = req.responseXML;
        } else {
          xmlNode = new ActiveXObject("Msxml2.DOMDocument");
          xmlNode.async = false;
          xmlNode.load(xmlFileName);
        }
      } else { // --- Mozilla
        var req = new XMLHttpRequest();
        req.overrideMimeType("text/xml");
        req.open("GET", xmlFileName, false);
        req.send(null);
        xmlNode = req.responseXML;
        //return req.responseXML;
      }
      //alert('Après parsing XML');
      newNode = xmlNode.getElementsByTagName('Root')[0];			
      //newNode = loadXML(xmlFileName).lastChild;
	 }

      // Link to the main home page
      if (!iFramework) {
        //alert("main home page display request");
        var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
        if (iLanguage == "CPP") {
          tocTreeWin.LINK_TO_LOAD="C++ Reference";
          tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
          url = "CAACppToc/CAACppTcCPPReferenceToc.htm";
        } else if (iLanguage == "IDL") {
          tocTreeWin.LINK_TO_LOAD="Object Reference";
          tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
          url = "CAAScdBase/CAAScdTcIDLReferenceToc.htm";
        } else if (iLanguage == "JS") {
          tocTreeWin.LINK_TO_LOAD="JavaScript Reference";
          tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
          url = "CAACppToc/CAACppTcJSReferenceToc.htm";
        }
      }
      // Link to a framework page
      else if (!iObjectType && !iInterface) {
        //alert("Framework page display request");
		if (iLanguage == "CPP" || iLanguage == "IDL")
			url = dir+iFramework+".htm";
		else if (iLanguage == "JS")
 			url = dir+"_index/"+iFramework+".htm";
     }
      // Link to a class/interface/etc. page, possibly inside a page to a method
      else if (iLanguage != "JS") { // Not available for JS
        var i = 0;
        var found = "no";
        while(newNode.firstChild != null) // Scan the first level tags
        {
          i++;
          var curchild = newNode.firstChild;
          newNode.removeChild(curchild);
          //if (curchild.nodeName=="ITEM")
            //alert("i = "+i+" -- curchild.nodeType = "+curchild.nodeType+" -- curchild = "+curchild.nodeName+" -- name = "+curchild.getAttribute("name"));
          if(curchild.nodeType == 1 && curchild.nodeName != "parsererror") {
            var type = "";
            if (curchild.getAttribute("type")=="collection" ||
                curchild.getAttribute("type")=="exception" ||
                curchild.getAttribute("type")=="notification") {
              type = "class";
            } else {
              type = curchild.getAttribute("type");
            }
            if (iObjectType && iInterface && curchild.nodeName=="ITEM" && type==iObjectType) {
              //alert("Type = "+iObjectType+" -- Name = "+iInterface);
              /*
              // No need to decode the href attribute to find out the name.
              // Use the name attribute instead.
              var motif = iObjectType+"_"+iInterface+"_";
              motif = motif.replace(/\(/,"\\("); // To match parentheses in collections
              motif = motif.replace(/\)/,"\\)"); 
              //alert("motif = "+motif);
              //var exp=new RegExp([motif],"g");
              //alert("type = "+curchild.nodeType+" -- name = "+curchild.nodeName);
              */
              while(curchild.firstChild != null)
              {
                //alert("Dans while - curchild.firstChild.nodeName = "+curchild.firstChild.nodeName);
                var curGrandChild = curchild.firstChild;
                //alert("i = "+i+" -- curGrandChild.nodeType = "+curGrandChild.nodeType+" -- nodeName = "+curGrandChild.nodeName+" -- name = "+curGrandChild.getAttribute("href"));
                curchild.removeChild(curGrandChild);
                //if (curGrandChild.getAttribute('href').match(exp)) {
                /*
                // No need to distinguish function from general case
                // No need to decode the href attribute to find out the name.
                // Use the name attribute instead.
                if (curGrandChild.nodeType == 1 && curGrandChild.getAttribute('href').search(motif)!=-1) {
                  //alert("i = "+i+" -- href = "+curGrandChild.getAttribute('href'));
                  // In R207, .htm is added in the XML file
                  //url = dir + iFramework + "/" + curGrandChild.getAttribute('href') + ".htm";
                  url = dir + iFramework + "/" + curGrandChild.getAttribute('href');
                  if (iMethod) {
                    url = url + "#" + iMethod;
                  }
                  //alert ("url = "+url);
                  found = "yes";
                  break;
                } else if (curGrandChild.nodeType == 1 && curGrandChild.getAttribute('href').search("_"+iObjectType+"_"+iInterface)!=-1 && iObjectType=="function") {
                  url = dir + iFramework + "/" + curGrandChild.getAttribute('href');
                  found = "yes";
                  break;
                }
                */
                if (curGrandChild.nodeType == 1 && curGrandChild.getAttribute('name') == iInterface) {
                  url = dir + iFramework + "/" + curGrandChild.getAttribute('href');
                  if (iMethod) {
                    url = url + "#" + iMethod;
                  }
                  //alert ("url = "+url);
                  found = "yes";
                  break;
                }
              }
              if (found=="yes") { break; }
            }
            //alert ("type = "+curchild.getAttribute('type')+" -- name = "+curchild.getAttribute('name')+" -- id = "+curchild.getAttribute('id'));
            //node.insertBefore(curchild, importNode);
          }
        }
      } else { // Temporary solution for JS to link AMD modules
	    if (iLanguage == "JS") {
			if (!iMethod) {
				url = dir + iFramework + '-' + iObjectType + '/' + iInterface + '.htm';
			}
		}
	  }
    } catch(e) {
      // --- import XML not found
      //alert ("import XML file "+xmlFileName+" not found");
    }
  }
  //alert('url ='+url);
  CAAlinkOutOfPreqs(url);
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

function insertLinkToTop()
{
	document.writeln('<table>');
	document.writeln('<tr>');
	document.writeln('<td width="100%"><hr class="top"></td>');
	document.writeln('<td><a href="#Top" class="top"><img src="../CAAIcons/images/butix_top.gif" alt="Top"></a></td>');
	document.writeln('</tr>');
	document.writeln('</table>');
}

function insertCopyright()
{
	document.writeln('<p class="copyright"><strong>3D</strong>EXPERIENCE R2015x &#169; 2014 Dassault Syst&#232;mes.<br>');
	document.writeln('<a href="../CAADocQuickRefs/CAADocSpecialNotices.htm">Legal Notices</a></p>');
}

function insertRepository()
{
	document.writeln('PLM1');
	//document.writeln('EV5');
}

function insertAdoptionIntro()
{
	document.writeln('<p class="header">V6 Adoption helps you transform your V5 applications to take');
	document.writeln('advantage of V6. This section gives you information, tips, guidelines, and when');
	document.writeln('possible, interface and method mapping data to determine how your applications');
	document.writeln('built on top of V5 should change to build and run on top of V6.</p>');
	document.writeln('<p class="header">The information is classified according to V5 solutions and');
	document.writeln('modelers. The class, interface, and method mapping relies on Version 5 Release 23.</p>');
}
function insertVBAdoptionIntro()
{
	document.writeln('<p class="header">V6 Adoption helps you transform your V5 macros to take advantage');
	document.writeln('of V6. This section gives you information, tips, guidelines, and when possible,');
	document.writeln('object, property, and method mapping data to determine how your macros created');
	document.writeln('on top of V5 should change to run on top of V6.</p>');
	document.writeln('<p class="header">The information is classified according to V5 solutions');
	document.writeln('and modelers. The object, property, and method mapping relies on Version 5');
	document.writeln('Release 23.</p>');
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

// To enlarge images - Use preferably showImage
function showImg(image, width, height) {
	var W=width+40;
	var H=height+40;
	window.open(image, '_blank', 'width='+W+', height='+H+', toolbar=no, scrollbar=no, resizable=no, menubar=no');
}


function showImage(image) {
	if (!IE) {
		var newImage = null;
		newImage = new Image();
		newImage.src = image;
		newImage.onload = function() {
			var W=newImage.width + 40;
			var H=newImage.height + 40;
			window.open(newImage.src, '_blank', 'width='+W+', height='+H+', toolbar=no, scrollbar=no, resizable=no, menubar=no');
		};
	} else {
		var loaded = false;
		function loadHandler() {
			if (loaded) {
				return;
			}
			loaded = true;
		var W=newImage.width + 40;
		var H=newImage.height + 40;
		window.open(newImage.src, '_blank', 'width='+W+', height='+H+', toolbar=no, scrollbar=no, resizable=no, menubar=no');		

		}
		var newImage = null;
		newImage = new Image();
		newImage.src = image;
		newImage.onload = loadHandler;
		if (newImage.complete) {
			loadHandler();
		}
//		var W=newImage.width + 40;
//		var H=newImage.height + 40;
//		window.open(newImage.src, '_blank', 'width='+W+', height='+H+', toolbar=no, scrollbar=no, resizable=no, menubar=no');		
	}
}
