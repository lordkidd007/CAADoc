// Global variables
var NS4 = false;
var NS7 = false;
var IE  = false;

//alert(navigator.appName);
//alert(navigator.appVersion);

if (navigator.appName == "Netscape")
{
	NSVer = navigator.appVersion;
	NSVer = NSVer.substring(0,1);
	if (NSVer >= 5) {
		NS7 = true; // Mozilla
	} else {
		NS4 = true; // Netscape
	}
	window.defaultstatus="CAA Version 5";
} else {
	IE = true;  // Internet Explorer
}

//function CAAlink(iLanguage, iFramework, iObjectType, iInterface, iMethod)
function CAAlink(iLanguage, iFramework, iInterface, iMethod, iObjectType)
{

/*	alert("iLanguage = "+iLanguage+
		  "\niFramework = "+iFramework+
		  "\niObjectType = "+iObjectType+
		  "\niInterface = "+iInterface+
		  "\nMethod = "+iMethod);
*/

	var url, dir;

	if (iLanguage == "CPP") {
		dir = "../../generated/refman/";
	} else if (iLanguage == "IDL") {
		if (window.top.CAAInteractiveDocContext != null) {
			dir = "../interfaces/";
		} else {
			dir = "../../generated/interfaces/";
		}
	}

	if (!iFramework) {
		url = dir + "main.htm";
	} else {
		if (iFramework == "Deprecated") { // Link to the deprecation page
			if (iLanguage == "CPP") {
				url = dir + "Deprecated.htm";
			} else if (iLanguage == "IDL") {
				url = dir + "CAADeprecatedIdx.htm";
			}
		} else if (iFramework == "HOME") {  // Link to the static home page
			url = dir + "main.htm";
		} else if (iFramework == "TREE") {  // Link to the class hierarchy page
			url = dir + "tree.htm";
		} else if (iFramework == "INDEX") { // Link to the master index page
			if (iLanguage == "CPP") {
				url = dir + "HomeIdx.htm";
			} else if (iLanguage == "IDL") {
				url = dir + "CAAHomeIdx.htm";
			}
		} else { 
			if (!iObjectType && !iInterface) {
				url = dir + iFramework + ".htm";
			} else {
				if (!iObjectType && iLanguage == "IDL") {
					iObjectType="interface";
				}
				url = dir + iFramework + ".htm";
				var xmlFileName = null;
				xmlFileName = dir + iFramework + "/CAA" + iFramework + "Toc.xml";
				//alert ("XML file = "+xmlFileName);
				var newNode = null;
				try {
					//alert ("Try XML file = "+xmlFileName);
				    var xmlNode = null;
 					if(IE) {
						// --- Internet Explorer
						//var xmlNode = new ActiveXObject("Microsoft.XMLDOM");
						var xmlNode = new ActiveXObject("Msxml2.DOMDocument");
						xmlNode.async = false;
						xmlNode.load(xmlFileName);
					} else if (NS7) {
						// --- Mozilla
						var req = new XMLHttpRequest();
						req.overrideMimeType("text/xml");
						req.open("GET", xmlFileName, false);
						req.send(null);
						xmlNode = req.responseXML;
					}
					newNode = xmlNode.getElementsByTagName('Root')[0];
					var i = 0;
					var found = "no";
					while(newNode.firstChild != null)
					{
						i++;
						var curchild = newNode.firstChild;
						newNode.removeChild(curchild);
						//if (curchild.nodeName=="ITEM") {
						//alert("i = "+i+" -- curchild.nodeType = "+curchild.nodeType+" -- curchild = "+curchild.nodeName+" -- name = "+curchild.getAttribute("name"));
						//}
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
								var motif = iObjectType+"_"+iInterface;
								motif = motif.replace(/\(/,"\\("); // To match parentheses in collections
								motif = motif.replace(/\)/,"\\)"); 
								//alert("motif = "+motif);
								//var exp=new RegExp([motif],"g");
								//alert("type = "+curchild.nodeType+" -- name = "+curchild.nodeName);
								while(curchild.firstChild != null)
								{
									//alert("Dans while - curchild.firstChild.nodeName = "+curchild.firstChild.nodeName);
									var curGrandChild = curchild.firstChild;
									//alert("i = "+i+" -- curGrandChild.nodeType = "+curGrandChild.nodeType+" -- nodeName = "+curGrandChild.nodeName+" -- name = "+curGrandChild.getAttribute("href"));
									curchild.removeChild(curGrandChild);

									//if (curGrandChild.getAttribute('href').match(exp)) {
									if (curGrandChild.nodeType == 1 && curGrandChild.getAttribute('href').search(motif)!=-1) {
									//alert("i = "+i+" -- href = "+curGrandChild.getAttribute('href'));
										url = url.replace(/\.htm/,"");
										url = url + "/" + curGrandChild.getAttribute('href') + ".htm";
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
				} catch(e) {
					// --- import XML not found
					alert ("import XML file "+xmlFileName+" not found");
				}
			}
		}
	}
	if (NS7) {
    // Mozilla
		window.parent.frames["CAAPage"].location = url;
	} else if (IE) {
		// IE
		// alert("Netscape or IE");
		//window.open(url, "CAAPage");
		window.open(url, window.name);
	}
}

// PSR function was missing
function CAAlinkHtm(iUrl)
{
  window.open(iUrl, window.name);
}

// For doc samples
function dummylink(){}
