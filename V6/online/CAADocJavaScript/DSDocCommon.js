// =======================================================================
// === Common Functions
// === Copyright © Dassault Systemes / Pierre SMEYERS (Jan 30 2006)
// =======================================================================
// === This Javascript Library contains general functions for the online
// === doc runtime infrastructure.
// =======================================================================
var NS4 = false;
var NS7 = false;
var IE  = false;
var IE7  = false;
var Nav  = "";

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
  var exp=new RegExp("Chrome","g"); // To differentiate Chrome with Firefox
  if (navigator.appVersion.match(exp)) {
    Nav = "Chrome";
  }
  //window.defaultstatus="CAA Version 5";
} else {
  NSVer = navigator.appVersion;
  NSVer = NSVer.substring(22,23);
  // To make the difference between IE6 and IE7
  //4.0 (compatible; MSIE 6.0
  //4.0 (compatible; MSIE 7.0
//alert('NSVer = '+NSVer);
  IE = true;
  if (NSVer=7)
    IE7 = true;
  doc="document.all";
  sty=".style";
}
/**
 * The name of the main navigation frame (that displays the documentation pages)
 */
var MAIN_FRAMENAME = "mainsm";

// =======================================================================
/**
 * Message for debugging purpose.
 */
function DebugMessage(msg)
{
//	alert(msg);
//	window.status = "[DBG]:"+msg;
}

// =======================================================================
/**
 * Enrich String class with trim() method
 */
String.prototype.trim = function()
{
	var i1=0;
	while(i1 < this.length && this.chartAt(i1) == ' ')
		i1++;
	var i2=this.length-1;
	while(i2 > i1 && this.chartAt(i2) == ' ')
		i2--;
	if(i1 == i2)
		return "";
	if(i1 == 0 && i2 == this.length-1)
		return this;
	return this.substr(i1, (i2-i1));
}

// =======================================================================
/**
 * Enrich String class with ensWith() method
 */
String.prototype.endsWith = function(s)
{
	if (typeof s != 'string')
		throw('IllegalArgumentException: String.endsWith() is expecting a string argument.');
	var start = this.length - s.length;
	if(start < 0) return false;
	return this.substr(start) == s;
}

// =======================================================================
/**
 * Enrich String class with startsWith() method
 */
String.prototype.startsWith = function(s)
{
	if (typeof s != 'string')
		throw('IllegalArgumentException: String.startsWith() is expecting a string argument.');
	if(this.length < s.length) return false;
	return this.substr(0, s.length) == s;
}

// =======================================================================
/**
 * Extracts arguments from the given location object.
 * Arguments are passed in a URL with the grammar:
 * http://server/the/path/to/the/file?arg1=val1&arg2=val2&...
 */
function extractParamsFromLocation(locationObj)
{
	var args = new Array();
	var varAndVals = locationObj.search.substr(1).split("&");
	for(var i=0; i<varAndVals.length; i++)
	{
		var v = varAndVals[i].split("=");
		args[unescape(v[0])] = unescape(v[1]);
	}
	// V2E : IR-225631V6R2014 & IR-2256306R2014 
	// added one more parameter for element ID to directly show the scrolled page.
	if(locationObj.hash){
		
		args["ElemID"] = locationObj.hash;
	}
	
	return args;
}

// =======================================================================
/**
 * Returns the first father node with given tag name.
 * This function pops the DOM hirearchy and returns the parent node with the given tag name.
 */
function getFatherNode(nodeType, node)
{
	var obj = node;
	while(obj != null && (obj.nodeName == null || obj.nodeName != nodeType))
			obj = obj.parentNode;
	return obj;
}

// =======================================================================
/**
 * Returns the first father node with the given tag name and a non-null ID.
 */
function getFatherNodeWithId(nodeType, node)
{
	var obj = node;
	while(obj != null)
	{
		if(obj.nodeName && obj.nodeName == nodeType && obj.id != null && obj.id != "")
			return obj;
		obj = obj.parentNode;
	}
	return obj;
}

// =======================================================================
/**
 * Loads a file and returns its content.
 */
function loadFile(url, type)
{
	var req = null;
	if (window.XMLHttpRequest) req = new XMLHttpRequest();
	else if (window.ActiveXObject) req = new ActiveXObject("Microsoft.XMLHTTP");
	if (req == null) throw new Error("XMLHttpRequest not supported.");
	
	/*
	if(req.overrideMimeType)
	{
		if(type == "xml")
			req.overrideMimeType("text/xml");
		else if(type == "html")
			req.overrideMimeType("text/html");
		else
		{
			type = "txt";
			req.overrideMimeType("text/plain");
		}
	}
	*/
	
	/*
	// --- async mode
	req.open("GET", url, true);
	req.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
//			setTimeout(this.responseText, 0);
			alert();
		}
	};
	*/
	// --- sync mode
	req.open("GET", url, false);
	
	req.send(null);
	// --- treat errors
//	if (req.readyState != 4 || req.status != 200)
//		alert("Warning: Http Request readystate="+req.readyState+", status="+req.status+" ("+req.statusText+")");
	
	if(type == "txt")
		return req.responseText;
	return req.responseXML;
}

// =======================================================================
/**
 * This function loads the given xml file and returns its root node.
 */
function loadXML(xmlUrl)
{
//alert('xmlUrl = '+xmlUrl);
//	return loadFile(xmlUrl, "xml");
/*
  if (window.top.ActivateIMode!=1) {
    var exp=new RegExp("^Pr[io]","g");
    if (xmlUrl.match(exp)) return '';
  }
*/
  var ref = new RegExp("\/generated","g");
  if (parent.parent.CAAScope=="External" && !(xmlUrl.match(ref))) {
  //if (parent.parent.CAAScope=="External") {
    var exp=new RegExp("^Pr[io]","g");
    if (xmlUrl.match(exp)) return '';
    exp = null;
    exp=new RegExp("\/Pr[io]","g");
    if (xmlUrl.match(exp)) return '';
    exp = null;
	exp=new RegExp("CAA3XDMLISO","g");
    if (xmlUrl.match(exp)) return '';
  }
  else if (parent.parent.CAAScope=="Internal") {
    var exp=new RegExp("CAACenPLMIDE","g");
    if (xmlUrl.match(exp)) return '';
  }
/*
  if (parent.parent.CAAScope=="External") {
    var exp=new RegExp("CAA3XDMLISO","g");
    if (xmlUrl.match(exp)) return '';
  }
*/
 	if(document.all)
	{
		// --- Internet Explorer
//		var xmlNode = new ActiveXObject("Microsoft.XMLDOM");
//		var xmlNode = new ActiveXObject("Msxml2.DOMDocument");
//		xmlNode.async = false;
//		xmlNode.load(xmlUrl);

    var path = parent.parent.document.URL;
    var xmlNode = null;
    if (path.match("http://") || path.match("https://")) {
  		var req = new ActiveXObject("Msxml2.XMLHTTP");
      req.open("GET", xmlUrl, false, null, null);
      req.send("");
      while (req.readyState != 4) {
      }
      xmlNode = req.responseXML;
    } else {
   		xmlNode = new ActiveXObject("Msxml2.DOMDocument");
      xmlNode.async = false;
    	xmlNode.load(xmlUrl);
    }

		return xmlNode;
	}
	else
	{
		// --- Mozilla
        //if (LINK_TO_LOAD!=null) { // The XML file load request comes from a click in a page
        //    xmlUrl = "../"+xmlUrl;
        //}
		var req = new XMLHttpRequest();
		req.overrideMimeType("text/xml");
		req.open("GET", xmlUrl, false);
		req.send(null);
		return req.responseXML;
	}
}

// =======================================================================
/**
 * Returns the postion of obj relatively to the given parent (optional).
 */
function getAbsPos(obj, relativeToObj)
{
	var topOffset = 0;
	var leftOffset = 0;
	if(relativeToObj == null) relativeToObj = document.body;
	// --- IE, Netscape>=7, mozilla, ...
	while(true)
	{
		topOffset += obj.offsetTop;
		leftOffset += obj.offsetLeft;
		obj = obj.offsetParent;
		if(!obj) break;
		if(relativeToObj && relativeToObj == obj) break;
		topOffset -= obj.scrollTop;
		leftOffset -= obj.scrollLeft;
	}
	return [leftOffset, topOffset];
}

// =======================================================================
/**
 * Searches the root node for nodes with given arguments.
 */
function searchNodesWithCriterias(rootNode, tagName)
{
	if(rootNode == null)
		return null;
	var results = new Array();
	var nodes = rootNode.getElementsByTagName(tagName);
	for(var i=0; i<products.length; i++)
	{
		var matches = true;
		for(var j=2; j<arguments.length; j+=2)
		{
			var value = nodes[i].getAttribute(arguments[i]);
			if(value != arguments[i+1])
			{
				matches = false;
				break;
			}
		}
		if(matches)
			results.push(nodes[i]);
	}
	return results;
}

// =======================================================================
/**
 * Determines whether if the given window is loaded or not (if it has a body).
 */
function isWindowLoaded(winObj)
{
	try
	{
		return winObj != null && winObj.document != null && winObj.document.body != null;
	}
	catch(e)
	{
		return false;
	}
}

// =======================================================================
// HFJ for Checkvisibility
function loadFile_mod(url, type)
{
	var xmlhttp; 
  try 
  {  
    xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');   
  }
  catch (e) 
  {
    try 
    {   
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');    
    }
    catch (e2) 
    {
      try 
      {  
        xmlhttp = new XMLHttpRequest();  
      }
      catch (e3)
      {
        xmlhttp = false;
      }
    }
  }

	if (xmlhttp == null) throw new Error("XMLHttpRequest not supported.");
	
	xmlhttp.open("GET", url, false);
	xmlhttp.send(null);
	
	if(type == "txt")
		return xmlhttp.responseText;
	return xmlhttp.responseXML;
}

// =======================================================================
// CHECK RUNTIME VISIBILITY
// JFS+V2E 2012 Feb 16
// =======================================================================
var CRTV_array_loaded = 0;
var CRTV_array = new Array();

function mycheckVisibility(stringToFind) {
  if (CRTV_array_loaded == 0) {
    //alert(" load CRTV_array");
    CRTV_array = loadFile_mod("InstalledList.txt", "txt");
    CRTV_array = CRTV_array.toLowerCase();
    CRTV_array_loaded = 1;
    //alert(" CRTV_array loaded");
  }
  if (CRTV_array.match("^" + stringToFind.toLowerCase()))
    return true;
  if (CRTV_array.match("\n" + stringToFind.toLowerCase()))
    return true;
  //alert(stringToFind + " not found");
  return false;
}

function checkRTVisibility() {
  var arguments = checkRTVisibility.arguments;
  testVar = document.getElementsByTagName("div");
  for (var i = 0; i < arguments.length; i++) {
    if (mycheckVisibility(arguments[i])) {
      //alert(arguments[i] + " is visible");
      for (j = 0; j < testVar.length; j++) {
        if (testVar[j].className == arguments[i]) {
          testVar[j].style.visibility = 'inherit';
        }
      }
    }
    else {
      //alert(arguments[i] + " is NOT visible");
      for (j = 0; j < testVar.length; j++) {
        if (testVar[j].className == arguments[i]) {
          testVar[j].style.display = 'none';
        }
      }
    }
  }
}
