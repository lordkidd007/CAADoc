// =======================================================================
// === TocTree Functions
// === Copyright © Dassault Systemes / Pierre SMEYERS (Jan 30 2006)
// =======================================================================
// === This Javascript Library contains functions used by the TocTree
// === frame of the doc portal.
// === This frame displays the TOC (Table Of Content) as a tree, and
// === maintains a synchronization between the tree view and the main doc
// === frame.
// === Basically, this library contains functions to:
// ===  - build and update the TOC tree,
// ===  - expand and select a node in the TOC tree.
// =======================================================================
// 2006 jul 13 jfs
// 2007 jul 13 jfs replace collapseLeftSide(1) by collapseLeftSide(0)
// =======================================================================
/*
function buildRelativeLink(locationObj, relativeToLocObj)
ok function resolveImports(node)
function getDItemFromDir(dir)
ok function getNavNodeInfo(node)
ok function getTOCItemFromURL(locationObj)
ok function initTOC()
ok function makeTOCItem(tbodyObj, node)
ok function makeTOCChildItems(containerObj, node)
ok function loadChildrenIfNeeded(rowObj, asynch)
tempo function rebuildSiteMapStructure(doc, parentElt)
ok function onClickTocAnchor(evt)
ok function onClickTocItem(evt)
ok function unselectTocItem()
ok function isCurrentFileSelected()
ok function selectCurrentFile()
*/
// =======================================================================
/**
* Global Variables:
*  - TOC_DATA: contains the TOC XML structure
*  - TOC_SELECTED_ITEM_ROW: the current selected node in the TOC tree 
*/
var TOC_DATA = null;
var TOC_SELECTED_ITEM_ROW = null;
var http = getHTTPObject();
// HFJ for HITEM
var modifiedDisplayAttributeArray = "";
// HFJ for Reference Node
var referencenodeArray = "";
var globalTOCrowObj = null;
var eventTocItem = false;
var count = 0;
// HFJ for Child Node
var lastDomObj = null;
// HFJ
var globalLastDomObj = null;
var retNode = null;

var LINK_TO_LOAD = null;
var BREADCRUMBLINK_TO_LOAD = null;
var PAGE_TO_LOAD = null;

// -----------------------------------------------------------------------
/**
* Rebuilds the relative link from the current location
*/
function buildRelativeLink(locationObj, relativeToLocObj) {
  var loc_tokens = null;
  if (relativeToLocObj == null)
    relativeToLocObj = window.location;
  var curRootURL = relativeToLocObj.pathname;
  curRootURL = curRootURL.replace(/\\/g, "/");
  loc_tokens = curRootURL.split("/");
  // --- remove last token (the file)
  loc_tokens.splice(loc_tokens.length - 1, 1);
  // --- remove blank tokens
  while (loc_tokens.length > 0 && loc_tokens[0].length == 0)
    loc_tokens.splice(0, 1);

  // --- retrieve link href
  var link = locationObj.pathname;
  link = link.replace(/\\/g, "/");
  var linkTokens = link.split("/");
  // --- remove blank tokens
  while (linkTokens.length > 0 && linkTokens[0].length == 0)
    linkTokens.splice(0, 1);

  // --- compute relative link
  var idx = 0;
  while (loc_tokens[idx] == linkTokens[idx])
    idx++;
  // --- rebuild relative link
  var relLink = null;
  for (var j = idx; j < loc_tokens.length; j++)
    relLink = relLink == null ? ".." : relLink + "/..";
  for (var j = idx; j < linkTokens.length; j++)
    relLink = relLink == null ? linkTokens[j] : relLink + "/" + linkTokens[j];

  //DebugMessage("link: '"+link+"': "+linkTokens+" ("+linkTokens.length+" items) --> rel link: '"+relLink+"' (unmatch at "+idx+": '"+linkTokens[idx]+"'!='"+loc_tokens[idx]+"')");
  return relLink;
}

// =======================================================================
// === Navigation Structure Functions
// =======================================================================
// -----------------------------------------------------------------------
/**
* Resolves recursively all <IMPORT> tags in the given XMLToc node
*/
function resolveImports(node) {
  var path = parent.parent.document.URL;
  var filestring = "";
  var filestring1 = "";
  var tempArray;
  var destdir = "";
  if (path.match("//") && (!path.match("///"))) {
    path = path.replace(/\/\//, "///");
    path = path.replace(/\\/g, "/");
    relpath = path.substring(8, path.lastIndexOf('/') + 1);
    //relpath = "examples/SCM/jfsPRJ201DOC_Dev/ICONS/frame.doc/src/";
  }
  if (path.match("http:///")) {
    path = path.replace(/http:\/\/\//, "http://");
    relpath = path.substring(7, path.lastIndexOf('/') + 1);
  }

  var i = 0;
  while (i < node.childNodes.length) {
    if (node.childNodes[i].nodeType != 1) // nodeType = 1 : Element
    {
      i++;
      continue;
    }

    if (node.childNodes[i].nodeName == "IMPORT") {
      var importNode = node.childNodes[i];
      try {
        var newNode = loadXML(importNode.getAttribute("href")).getElementsByTagName('Root')[0];
        // --- add all children
        while (newNode.firstChild != null) {
          var curchild = newNode.firstChild;
          newNode.removeChild(curchild);
          if (curchild.nodeType == 1 && curchild.nodeName != "parsererror")
            node.insertBefore(curchild, importNode);
        }
      }
      catch (e) {
        // --- import XML not found
      }
      // --- now remove the IMPORT node
      node.removeChild(importNode);
    }

    // Dimport for file system
    // HFJ 27 july 2007 changed to else if after a mail request. 
    else if (node.childNodes[i].nodeName == "DIMPORT") {
      var xmlHttpRequest;
      try {
        var importNode = node.childNodes[i];
        destdir = node.childNodes[i].getAttribute("dir");
        var destdir1 = destdir;

        try {
          destdir = relpath + "" + destdir;
          var Fo = new ActiveXObject("Scripting.FileSystemObject");
          var direct = Fo.GetFolder(destdir);
          var FSo = new Enumerator(direct.Files);
          for (i = 0; !FSo.atEnd(); FSo.moveNext()) {
            if (FSo.item().type == "XML Document")
              var file = FSo.item().name;
            var fullfilename = destdir + "\\" + file;
            try {
              var newNode = loadXML(fullfilename).getElementsByTagName('Root')[0];
              while (newNode.firstChild != null) {
                var curchild = newNode.firstChild;
                newNode.removeChild(curchild);
                if (curchild.nodeType == 1 && curchild.nodeName != "parsererror")
                  node.insertBefore(curchild, importNode);
              }
            }
            catch (e) {
              // --- import XML not found
            }
          }
        }
        catch (exp) {
          //Dimport for webserver
          // indexfile.xml is a file present in the server which will have the list of XML files
          //present in CAA-partners directory
          try {
            destdir = node.childNodes[i].getAttribute("dir");
            var contentsfile = destdir + "\\indexfile.xml";
            var filenode = null;
            filenode = loadXML(contentsfile).getElementsByTagName("title");
            var fullfilename1;
            for (var k = 0; k < filenode.length; k++) {
              try {
                fullfilename1 = destdir + "\\" + filenode[k].childNodes[0].nodeValue;
                var newNode = loadXML(fullfilename1).getElementsByTagName('Root')[0];
                while (newNode.firstChild != null) {
                  var curchild = newNode.firstChild;
                  newNode.removeChild(curchild);
                  if (curchild.nodeType == 1 && curchild.nodeName != "parsererror")
                    node.insertBefore(curchild, importNode);
                }
              }
              catch (e) {
                // --- import XML not found
              }
            }
          }
          catch (exep) {
            //
          }
        }
        // at last remove
        // --- now remove the IMPORT node
      }
      catch (ex) {
        //
      }
      node.removeChild(importNode);
    }
    else {
      // --- non import node: recursivity
      resolveImports(node.childNodes[i]);
      i++;
    }
  }
}

// -----------------------------------------------------------------------
/**
* Returns the DOM object associated to the DITEM with given directory
*/
function getDItemFromDir(dir) {
  var lookForName = "DIR@" + dir;
  var rows = document.getElementsByTagName("TR");
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].name != null && rows[i].name == lookForName)
      return rows[i];
  }
  return null;
}

// -----------------------------------------------------------------------
/**
* Returns navigation node information.
* Returns an object with fields:
*  - id: the node id (unique)
*  - name or title (for cnfxml files): the display name
*  - icon: the associated icon (if any)
*  - link: the associated link
*  - isNode: tells whether if the node has children (true) or not (false)
*/
function getNavNodeInfo(node) {
  var ret = new Object();
  ret.id = null;
  ret.name = null;
  ret.link = null;
  ret.icon = null;
  ret.type = null;
  ret.isNode = true;
  //	ret.isChildrenLoaded = true;
  //  HFJ reference Node
  ret.referenceNode = null;

  if (node.nodeName == "DITEM") {
    // --- dynamic item
    ret.isNode = true;
    //		ret.isChildrenLoaded = false;
  }
  else {
    // --- static item
    ret.isNode = node.hasChildNodes();
    //		ret.isChildrenLoaded = true;
  }

  // --- href
  var href = node.getAttribute("href");

  // HFJ --- reference node
  ret.referenceNode = node.getAttribute("referencenode");

  // --- name or title
  ret.name = node.getAttribute("name");
  if (ret.name == null) {
    ret.name = node.getAttribute("title");
    if (ret.name == null) {
      if (href == null) {
        ret.name = "???";
      }
      else {
        // --- filename without extension
        var idx1 = href.lastIndexOf('/');
        var idx2 = href.lastIndexOf('.');
        if (idx2 < 0) idx2 = href.length;
        ret.name = href.substring(idx1 + 1, idx2);
      }
    }
  }

  // --- icon
  ret.icon = node.getAttribute("icon");
  // --- type
  ret.type = node.getAttribute("type");

  // --- compute link: it may be relative to parent DITEM directory
  // --- get DITEM parent node
  var ditemFather = getFatherNode("DITEM", node.parentNode);
  if (ditemFather == null) {
    // This case will disappear
    if (href != null && href.startsWith("../../generated"))
    {
      ret.link = href.substr(3);
    }
    // This case will remain
    else if(href != null && href.startsWith("../generated"))
    {
      ret.link = href;
    }
    else if(href != null && href.startsWith("../docs"))
    {
      ret.link = href;
    }
    // This case will disappear
    else if(href != null && href.startsWith("../"))
    {
      // --- this TOC item points to another directory
      // --- log in the URL the source directory
//			ret.link = href.substr(3)+"?dir="+dir;
      ret.link = href.substr(3);
    }
    else {
      ret.link = href;
    }
  }
  else {
  var dir = ditemFather.getAttribute("dir");
	if(dir == null) {
      // This case will disappear
      if(href != null && href.startsWith("../../generated"))
      {
        ret.link = href.substr(3);
      }
      // This case will remain
      else if(href != null && href.startsWith("../generated"))
      {
        ret.link = href;
      }
      else if(href != null && href.startsWith("../docs"))
      {
        ret.link = href;
      }
      // This case will disappear
      else if(href != null && href.startsWith("../"))
      {
        // --- this TOC item points to another directory
        // --- log in the URL the source directory
//			    ret.link = href.substr(3)+"?dir="+dir;
        ret.link = href.substr(3);
      }
      // This case will remain
      else
      {
        ret.link = href;
      }
    }
    else
    {
      // This case will disappear
      if(href != null && href.startsWith("../../generated"))
      {
        ret.link = href.substr(3);
      }
      // This case will disappear
      else if(href != null && href.startsWith("../generated"))
      {
        ret.link = href;
      }
      else if(href != null && href.startsWith("../docs"))
      {
        ret.link = href;
      }
      // This case will disappear
      else if(href != null && href.startsWith("../"))
      {
        // --- this TOC item points to another directory
        // --- log in the URL the source directory
//			    ret.link = href.substr(3)+"?dir="+dir;
        ret.link = href.substr(3);
      }
	  else if (href != null && href.startsWith("http"))
	  {
		// Case of javascript samples pointed using http links
		ret.link = href;
	  }
      // This case will remain
      else
      {
        ret.link = dir+"/"+href;
      }
    }
  }

  // --- id: it contains the link
  if (ret.link != null)
    ret.id = "HREF@" + ret.link;

   return ret;
}

// -----------------------------------------------------------------------
/**
* Returns the DOM object in the TOC tree displaying the given string.
*/
function getTOCItemFromName(itemName) {
//alert('getTOCItemFromName itemName = '+itemName);
//    var items = document.getElementsByName(itemName);
//    var item = document.getElementById(itemName);
    var items = document.getElementsByTagName("A");
// alert('items.length = '+items.length);
   	var i=0;
   	var found = "false";
   	var domObj = null;
   	while(i<items.length)
   	{
        //alert('i = '+i+'\nitems[i] = -'+items[i].innerHTML+'-\nitemName   -'+itemName+'-');
        if (items[i].innerHTML==itemName) {
        //alert('i = '+i+'\nitems[i] = -'+items[i].innerHTML+'-\nitemName   -'+itemName+'- FOUND');
            found = "true";
            domObj = items[i];
            break;
        }
        i++;
        continue;
   	}
    if (found=="true") {
        //alert('domObj.innerHTML Found= '+domObj.innerHTML);
        return domObj;
    }
    else
        return null;
}
/**
 * Returns the DOM object in the TOC tree associated to the given url.
 */
function getTOCItemFromURL(locationObj)
{
//alert("getTOCItemFromURL: '"+locationObj+"'");	
  // --- compute relative document path
  var url = buildRelativeLink(locationObj, parent.parent.location);
  //	DebugMessage("getTOCItemFromURL: '"+url+"'");
  // Added PSR to update the breadcrumb with reference files after home page move
  if (url.startsWith("online")) {
    var i = url.indexOf("/");
    // Pb with Mozilla which extract the i+1th characters
    //url = url.substr(i+1, url.lentgh);
    url = url.substring(i+1);
  }
  else if (url.startsWith("generated") || url.startsWith("docs"))
    url = "../"+url;

//alert("getTOCItemFromURL: '"+url+"'");	
  // --- 1: compute TOC item id and directory
  var objId = "HREF@" + url;
  var directory = null;
  var args = extractParamsFromLocation(locationObj);
  if (args["dir"] != null) {
    // --- dir passed as an argument in the URL
    directory = args["dir"];
    // --- the TOC item id contains the directory
    objId = objId + "?dir=" + directory;
  }
  else {
    // --- extract dir from the url
    var idx = url.lastIndexOf("/");
    if (idx >= 0) {
      directory = url.substr(0, idx);
      idx = directory.lastIndexOf("/");
      if (idx >= 0)
        directory = directory.substr(idx + 1);
    }
  }

  // --- 2: try to retrieve the associated DOM object by ID
  var domObj = document.getElementById(objId);

  // HFJ for HITEM
//alert('getTOCItemFromURL\nobjId: "'+objId+'"'+	
// '\ndirectory : "'+directory+'"'+
// '\ndomObj :"'+domObj+'"');

  if (domObj != null) {
    // HFJ for Reference Node
    //---------------------------------
    if (lastDomObj != null)// for child Node processing
    {
      if (eventTocItem) {
        lastDomObj = globalTOCrowObj;
        //eventTocItem = false; // hfj
        //count = 1;
//alert('getTOCItemFromURL return 1');
        return globalTOCrowObj;
      }

      /* if(count == 1)
      {
      lastDomObj = globalTOCrowObj;
      //eventTocItem = false;
      count = 0;
      //count = 2;
      //alert("eventTocItem "+eventTocItem);
      return globalTOCrowObj;
      }*/


      var childModdomObj;
      if (document.getElementsByTagName) {
        if (lastDomObj.nextSibling != null) {
          var el = lastDomObj.nextSibling.getElementsByTagName("tr");

          for (var j = 0; j < el.length; j++) {
            if (el[j] != null) {
              //alert(objId+"aaa...\n"+el[j].id);
              if (objId.match(el[j].id) != null) {
                childModdomObj = el[j];
                //lastDomObj = childModdomObj; // hfj coment opened for multiple bug highlight.

                if (el[j].id == "") // hfj for later multiple highlight bug .
                {
                  // This bug is after using HITEM which is not match with ODT sent. 

                  lastDomObj = domObj;
//alert('getTOCItemFromURL return 2');
                  return domObj;

                }

                lastDomObj = childModdomObj; // hfj coment opened for multiple bug highlight.
//alert('getTOCItemFromURL return 3');
                return childModdomObj;
              }
            }
          }
        }
      }
    }
    else {
      lastDomObj = domObj;
//alert('getTOCItemFromURL return 4');
      return domObj;
    }
    // ---- end 
    // HFJ for reference node 
    if (referencenodeArray != null)// for reference Node processing
    {
      var splitReferencenodeArray = referencenodeArray.split("+");

      var moddomObj;
      editedobjIdidx = objId.indexOf("@");
      var editedobjId = objId.substr(editedobjIdidx + 1);

      for (i = 0; i < splitReferencenodeArray.length; i++) {
        arrayHITEMidx = splitReferencenodeArray[i].indexOf("#");

        var arrVal = splitReferencenodeArray[i].substr(arrayHITEMidx + 1);
        arrVal = arrVal.replace(" ", "")
        if (document.getElementsByTagName) {
          var el = document.getElementsByTagName("tr");
          for (var j = 0; j < el.length; j++) {
            var vPar = el[j].parent;

            if (vPar != null) {
              if ((splitReferencenodeArray[i].match(vPar)) && (el[j].referencenode != null) && (arrVal.match(editedobjId))) {
                moddomObj = el[j];
                lastDomObj = moddomObj;
                //alert(moddomObj.parent+"\n...\n"+moddomObj.innerHTML);
 //alert('getTOCItemFromURL return 5');
                return moddomObj;
              }
            }
          }
        }
      }
      //hfj for begining multiple node highlight when catia page is first shown.
      //lastDomObj = domObj;
//alert('getTOCItemFromURL return 6');
      return domObj;
    }
    else {
      lastDomObj = domObj;
//alert('getTOCItemFromURL return 7');
      return domObj;
    }
    // ---- end
    lastDomObj = domObj;
//alert('getTOCItemFromURL return 8');
    return domObj;
  }
  else {
    editedobjIdidx = objId.indexOf("@");
    var editedobjId = objId.substr(editedobjIdidx + 1);
//alert('getTOCItemFromURL editedobjId= '+editedobjId);

    var splitModifiedDisplayAttributeArray = modifiedDisplayAttributeArray.split("+");

    for (i = 0; i < splitModifiedDisplayAttributeArray.length; i++) {
      arrayHITEMidx = splitModifiedDisplayAttributeArray[i].indexOf("#");

      var arrVal = splitModifiedDisplayAttributeArray[i].substr(arrayHITEMidx + 1);
      arrVal = arrVal.replace(" ", "")
        
//alert('getTOCItemFromURL arrVal= '+arrVal+
//'\neditedobjId.match(arrVal) = '+editedobjId.match(arrVal));
      if (editedobjId.match(arrVal) != null) {
        var parentDisplayAttributeArray = splitModifiedDisplayAttributeArray[i].substr(0, arrayHITEMidx);

        parentDisplayAttributeArray = parentDisplayAttributeArray.replace(" ", "");
        var newobjId = "HREF@" + parentDisplayAttributeArray;
//alert('getTOCItemFromURL newobjId= '+newobjId);
        var newdomObj = document.getElementById(newobjId);
        if (newdomObj != null) {
          // Attempt to retrieve the DITEM directory from modifiedDisplayAttributeArray
          // This directory should normally be also the DITEM dir attribute
          // Example: CAABtlMkmk/CAABtlToc.htm#ProBtlMkmk+
          directory = modifiedDisplayAttributeArray.substring(0,modifiedDisplayAttributeArray.lastIndexOf('/'));

          // Attempt to retrieve the DITEM directory from newobjId
          // This directory should normally be also the DITEM dir attribute
          // Example: HREF@CCAABtlMkmk/CAABtlToc.htm
          directory = newobjId.substring(newobjId.indexOf('@')+1, newobjId.length);
          directory = directory.substring(0, directory.indexOf('/'));
          //alert ("directory = "+directory);
          if (directory == "") { // If not found, just select the node
            lastDomObj = newdomObj;
//alert('getTOCItemFromURL return 9\n'+
//      'lastDomObj.innerHTML Found= '+lastDomObj.innerHTML);
            return newdomObj;
          }
          else // Added PSR to exit loop when directory is found
            break;
        }
      }
    }
  }
  //
  //PSR Reset eventTocItem to false to avoid exiting in above cases even if this is not appropriate
  if (eventTocItem)
    eventTocItem = false;
  // --- object not found: it must not be loaded yet (child of a ditem?)
  if (directory == null) {
    // --- no dir
    DebugMessage("Could not find DocNode from url '" + url + "': no directory.");
//alert('getTOCItemFromURL return 10');
    return null;
  }
  
  // --- find the ditem DOM object by ID
  //	var productRow = document.getElementById("PRD@"+directory);
  //	var ditemRow = document.getElementById("HREF@"+getProductHREF(directory));
  var ditemRow = getDItemFromDir(directory);
  if (ditemRow == null) {
    // TODO
    DebugMessage("Could not find DITEM DOM obj with dir: " + directory);
//alert('getTOCItemFromURL return 11');
    return null;
  }
  // --- load children if need be
  if (!loadChildrenIfNeeded(ditemRow, false)) {
//alert('getTOCItemFromURL return 12');
    return null;
   } else {
//alert('getTOCItemFromURL ditemRow = '+ditemRow.innerHTML)
   }
  
  // --- now the associated DOM object should be here
  var domObj = document.getElementById(objId);
  if (domObj == null) {
    DebugMessage("Could not find DocNode from url '" + url + "'.");
//alert('getTOCItemFromURL return 13');
    return null;
  }
  //lastDomObj = domObj;
//alert('getTOCItemFromURL return 14');
  return domObj;

}

// =======================================================================
// === TOC Tree Functions
// =======================================================================
// -----------------------------------------------------------------------
/**
* Initializes the toc tree with the XML 'XMLToc' argument
* Expands and selects the path of the document passed with the URL 'doc' argument
*/
function initTOC() {
  DebugMessage("initTOC");
  //alert("initTOC");
  if (TOC_DATA != null)
  // --- already loaded: skip
    return;

  // --- extract the xml TOC description file from top parent url arguments
  var args = extractParamsFromLocation(parent.parent.location);
  var xmlTocFile = args["XMLToc"];
  if (xmlTocFile == null) {
    //alert("xmlTocFile = null");
    // --- extract the xml TOC description file from parent url arguments
    var args2 = extractParamsFromLocation(parent.location);
    xmlTocFile = args2["XMLToc"];
    if (xmlTocFile == null) {
      //alert("xmlTocFile2 = null");
      xmlTocFile = "TOC.xml";
    }
  }
  // collapse
  var collapsereq = args["collapse"];
  if (collapsereq == null) {
    var args2 = extractParamsFromLocation(parent.location);
    collapsereq = args2["collapse"];
//    show = args2["show"];
  }

  // --- 1: Load XML TOC info
  var tocData = null;
  try {
    //alert("load " + xmlTocFile);
    tocData = loadXML(xmlTocFile).lastChild;
    resolveImports(tocData);
  }
  catch (e) {
    DebugMessage("Warning: couldn't load common navigation links.");
  }

  // --- 2: empty page DOM
  while (document.body.firstChild != null)
    document.body.removeChild(document.body.firstChild);

  // --- 3: build TOC
  makeTOCChildItems(document.body, tocData);

  /*
  // --- tests
  var prdFile = "CATIA_INDEXFile.DSidx";
  DebugMessage("load '"+prdFile+"': '"+loadFile(prdFile, "txt")+"'");
  
  var ssmFile = "asmug_C2/asmugssm.htm";
  DebugMessage("load '"+ssmFile+"' as text: '"+loadFile(ssmFile, "txt")+"'");
  DebugMessage("load '"+ssmFile+"' as html: '"+loadFile(ssmFile, "html")+"'");
  */

  TOC_DATA = tocData;
  //////////////////////////////////////////////////////////////////////////////
  // Added PSR - When loading the Encyclopedia to a given home page, building
  // the home page contents is skipped in createToc2 (DSDocDynLinks.js) until
  // the tree from which the home page extracts its contents be loaded.
  // When TOC_DATA is non NULL, the tree is loaded. The home page is then
  // re-loaded and its contents created from the tree. 
  //////////////////////////////////////////////////////////////////////////////
  var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
  if (!IE7 && Nav!="Chrome") {
    // Test removed. Should apply to any files with Firefox and the show option
    // to correctly create the breadcrumb, because with Firefox, the tree is
    // updated with the opened file (selectFile) after the breadcrumb is created.
    if (mainWin.document.location.pathname.endsWith("00.htm") ||
        mainWin.document.location.pathname.endsWith("Toc.htm")) {
	  //Replace file reload with softer breadcrumb update
      mainWin.open(mainWin.document.location.pathname, "_self");
    }
  //{
  //  var breadcrumbWin = parent.parent.frames["RightFS"].frames["Breadcrumb"];
  //  if(isWindowLoaded(breadcrumbWin) && breadcrumbWin.updateBreadcrumb)
  //    breadcrumbWin.updateBreadcrumb(mainWin);
  }
	//////////////////////////////////////////////////////////////////////////////
  // --- 3: then select current opened file in the TOC
  selectCurrentFile();
  //LQA 19-02-07 task:Collapse on request
  if (collapsereq=="true")
    (top.frames["LeftFS"].frames["TocBar"]).collapseLeftSide(0);
}

// -----------------------------------------------------------------------
/**
* Creates the TOC children items in the TOC tree.
* This function creates the required DOM objects to represent a children items in the TOC tree.
*/
function makeTOCChildItems(containerObj, node) {
//alert('makeTOCChildItems node = '+getNavNodeInfo(node).name);	
  var childrenTable = document.createElement("TABLE");containerObj.appendChild(childrenTable);
  childrenTable.className = "Toc";
  var childrenTBody = document.createElement("TBODY");childrenTable.appendChild(childrenTBody);
  var added = 0;
  // Added PSR to record nodes to remove
  var nodesToRemove = new Array;
  var nodesToRemove2 = new Array;
  var j=0;  
  for (var i = 0; i < node.childNodes.length; i++) {
    if(node.childNodes[i].nodeType != 1) {
      nodesToRemove[i] = "comment"; // Record XML comments that appear as nodes
      continue;
    }
    // HFJ for HITEM
    if (node.childNodes[i].nodeName == "HITEM") {
      //modifiedDisplayAttributeArray += node.getAttribute("href")+"#"+node.childNodes[i].getAttribute("dir")+"+";
    } else if (node.childNodes[i].nodeName == "PITEM" && node.childNodes[i].getAttribute("type") != "startup") { // Do not display PITEM in the tree
	}
    else {
      //hfj for reference node.
      var nodeDisplay = node.childNodes[i];
        
      if((nodeDisplay.getAttribute("referencenode")) == "yes")
      {
        var nodeInfo = getNavNodeInfo(node);
        var childnodeInfo = getNavNodeInfo(nodeDisplay);

        referencenodeArray += nodeInfo.link+"#"+childnodeInfo.link+"+";					
      }
      ////
      // Removed PSR - To hide empty nodes
      //makeTOCItem(childrenTBody, node.childNodes[i]);
      //added++;
      // Added PSR - To hide empty nodes
      nodesToRemove[i] = true;
      var retCode = true; // true means the node is not empty
      retCode = makeTOCItem(childrenTBody, node.childNodes[i]);
      if (retCode == true) {
        added++;
        nodesToRemove[i] = false;
      }
      // End Added PSR		
    }
    
    //makeTOCItem(childrenTBody, node.childNodes[i]);
    //added++;
  }
  // Removed PSR - To hide empty nodes
  //if(added == 0)
  //  DebugMessage("Added 0 child in node "+node);
  // Added PSR - To hide empty nodes
  // Nothing is added below the created node. All imports have failed
  // Remove the node from the XML structure and from the DOM
  if(added == 0) {  // The node is empty. Do not display it
    //if (getNavNodeInfo(node).name == "CATIA") { // Remove this test as soon as each node will be imported with a formal Toc
      //alert('Added 0 child in node '+getNavNodeInfo(node).name);
      //DebugMessage("Added 0 child in node "+node);
      // Removed PSR - Delay the node removal
      // Remove the node from the XML structure
      //var parNode = node.parentNode;
      //alert('parent node '+getNavNodeInfo(parNode).name+'  '+getNavNodeInfo(parNode).isNode+'  '+getNavNodeInfo(parNode).id);
      //parNode.removeChild(node);
      // Remove the node from the DOM - Both nodes have the same id
      var trToRemove = document.getElementById(getNavNodeInfo(node).id);
      //alert('Id of node to remove '+trToRemove);
      //trToRemove.removeNode(true); // IE only
      var DOMparNode = trToRemove.parentNode;
      DOMparNode.removeChild(trToRemove);      
    //}
/* PSR Comment out previous node removal using nodesToRemove  
  } else { // The node contains empty nodes. They are not in the DOM by returning false in makeTOCItem
           // before their creation. They must nbe now removed from the XML structure.
    for(var i=0; i<nodesToRemove.length; i++) {
      if (nodesToRemove[i] == true) {
        //alert('Removing node '+getNavNodeInfo(node.childNodes[i]).name);
        node.removeChild(node.childNodes[i]);
      }
    }
*/
  }

// Added PSR
  if (added<node.childNodes.length) {
    for(var i=0; i<nodesToRemove.length; i++) {
      if (nodesToRemove[i]== true) {
        nodesToRemove2[j] = i;
        j++;
      }
    }
    for(var i=0; i<nodesToRemove2.length; i++) {
      node.removeChild(node.childNodes[nodesToRemove2[i]-i]);
    }
  }
  if (added==0) { return false; }
  else { return true; }
  // End Added PSR		
}

// -----------------------------------------------------------------------
/**
* Creates a TOC item in the TOC tree.
* This function creates the required DOM objects to represent a node in the TOC tree.
*/
function makeTOCItem(tbodyObj, node) {
  // --- 1: get name, link and icon
  var nodeInfo = getNavNodeInfo(node);

// Added PSR - Check that a node has children - Otherwise, do not display it
// With Mozilla
  if (NS7) {
    if (node.getAttribute("href") != null) { // Check that the node has a href, otherwise endsWith below will throw an exception
      // With Mozilla, nodeInfo.isNode returns true even if the element is not a node
      // Spaces,tabs, or carriage returns in the XML file are enough to make the element a node
      // If the current element is an ITEM and has a href ending with Toc.htm
      if(node.nodeName == "ITEM" && (node.getAttribute("href").endsWith("Toc.htm") || node.getAttribute("href").endsWith("00.htm"))) {
        //alert('makeTOCItem node = '+getNavNodeInfo(node).name+
        //' node = '+!nodeInfo.isNode+' name '+ node.nodeName+' href = '+ node.getAttribute("href").endsWith("Toc.htm"));
        var ret = false;
        // Scan its child nodes, if any
        for(var i=0; i<node.childNodes.length; i++)
        {
          //alert('node.childNodes[i].nodeType = '+node.childNodes[i].nodeType+
          //'\nnode.childNodes[i].nodeName = '+node.childNodes[i].nodeName+
          //'\nnode.childNodes[i].nodeValue = "'+node.childNodes[i].nodeValue+'"');
        
          // If one of the found nodes is an element (ITEM or DITEM), set ret to true to go on makint TOC items
          if (node.childNodes[i].nodeType =="1" && (node.childNodes[i].nodeName == "ITEM" || node.childNodes[i].nodeName == "DITEM")) {
            //var childNodeInfo = getNavNodeInfo(node.childNodes[i]);
            //alert('makeTOCChildItems nodeType = '+childNodeInfo.nodeType+
            //'\ nodeName = '+childNodeInfo.nodeName+
            //'\ nodehref = '+childNodeInfo.link);
            ret = true;
          }
        }
        // If nothing is found below this element, its a TOC node withour content. Do no display it
        // returns false to tell this to calling function makeTOCChildItems
        if (ret == false) return ret;
      }
    }
  }
// With Internet Explorer
  else if (IE) {
     if (node.getAttribute("href") != null) { // Check that the node has a href, otherwise endsWith below will throw an exception
      //alert('makeTOCItem node = '+getNavNodeInfo(node).name+
      //'node = '+!nodeInfo.isNode+' name '+ node.nodeName+' href = '+ node.getAttribute("href").endsWith("Toc.htm"));

      // If the current element is a NOT a node in the loaded XML structure, is an ITEM, and has a href ending with Toc.htm
      // it has nos children (all the IMPORT below are unsolved, and no other ITEM exists below it). It must not be displayed  
      if(!nodeInfo.isNode && node.nodeName == "ITEM" && (node.getAttribute("href").endsWith("Toc.htm") || node.getAttribute("href").endsWith("00.htm")))
      {
        //alert('makeTOCItem node = '+getNavNodeInfo(node).name+' is a Toc without contents');	    // --- this is a leaf (no child)
        // If nothing is found below this element, its a TOC node withour content. Do no display it
        // returns false to tell this to calling function makeTOCChildItems
        return false;
      }
    }
/*
    if(!nodeInfo.isNode && node.nodeName == "ITEM") {
      if (node.getAttribute("href") != null) {
        if (node.getAttribute("href").endsWith("Toc.htm")) {
          return false;
        }
      } else if (node.getAttribute("href") == null) {
      alert('makeTOCItem node = '+getNavNodeInfo(node).name);
          return false;
      }
    }
*/
  }
// End PSR

//alert('makeTOCItem nodeInfo = '+nodeInfo.name);	
  //HFJ for reference attribute
  var parNode = node.parentNode;
  var parNodeInfo = getNavNodeInfo(parNode);

  // --- 2: build DOM elements
  //	DebugMessage("building node '"+nodeName+"'...");
  //IE only	var nodeRow = tbodyObj.insertRow();
  var nodeRow = document.createElement("TR");tbodyObj.appendChild(nodeRow);
  nodeRow.className = "TocItem";
  nodeRow.id = nodeInfo.id;
  ////
  nodeRow.parent = parNodeInfo.link + "#" + nodeInfo.link; //HFJ for reference node
  nodeRow.referencenode = nodeInfo.referenceNode;
  if (node.nodeName == "DITEM" && node.getAttribute("dir") != null)
    nodeRow.name = "DIR@" + node.getAttribute("dir");

  nodeRow.TOC_NODE = node;
  //IE only	var anchorCell = nodeRow.insertCell();
  var anchorCell = document.createElement("TD");nodeRow.appendChild(anchorCell);
  anchorCell.className = "TocAnchor";
  var anchorImg = document.createElement("IMG");anchorCell.appendChild(anchorImg);
  //IE only	var itemCell = nodeRow.insertCell();
  var itemCell = document.createElement("TD");nodeRow.appendChild(itemCell);
  itemCell.noWrap = true;
  if (nodeInfo.icon != null) {
    var itemIcon = document.createElement("IMG");itemCell.appendChild(itemIcon);
    itemIcon.className = "TocIcon";
    itemIcon.src = nodeInfo.icon;
    itemIcon.align = "absmiddle";
  }

  var itemLink = document.createElement("A");itemCell.appendChild(itemLink);
  itemLink.className = "TocLink";
  var tmpTitle = nodeInfo.name.replace(/\\/g, "");
  var tmpHtml = tmpTitle.replace(/ /g, "&nbsp;");
  itemLink.innerHTML = tmpHtml;
  itemLink.title = tmpTitle;
//----itemLink.innerHTML = nodeInfo.name.replace(/ /g, "&nbsp;");
//alert('itemLink.innerHTML '+itemLink.innerHTML);
//----itemLink.title = nodeInfo.name;
// Added PSR to look for the tag using its name
//	itemLink.id = nodeInfo.name.replace(/ /g, "");
//alert('itemLink.id '+itemLink.id);
  itemLink.onclick = onClickTocItem;

  if (nodeInfo.link != null) {
    itemLink.target = MAIN_FRAMENAME;
    itemLink.href = nodeInfo.link;
//    alert('itemLink.href '+itemLink.href);

    // by LQA 12-09-06
    //for SITEM to display the corresponding link in top window
    if (node.nodeName == "SITEM")
      itemLink.target = "_top";
  }
  else {
    // TODO?
    itemLink.target = MAIN_FRAMENAME;
    itemLink.href = "CAADocQuickRefs/DSDocDefaultToc.htm";
  }

  // --- manage leaf or node item
  if (!nodeInfo.isNode) {
    // --- this is a leaf (no child)
    anchorImg.src = "CAADocQuickRefs/images/DSDocIcon_tocFile.gif";
    // Removed PSR - Check for empty nodes
    //return;
    // Added PSR - Check for empty nodes
    return true;
  }

  // --- this is a node (has children)
  anchorImg.src = "CAADocQuickRefs/images/DSDocIcon_tocPlus.gif";
  anchorImg.onclick = onClickTocAnchor;
  
  // --- now create the children row
  //IE only	var childrenRow = tbodyObj.insertRow();
  var childrenRow = document.createElement("TR");tbodyObj.appendChild(childrenRow);
  childrenRow.className = "TocCollapsed";
  //IE only	var vCell = childrenRow.insertCell();
  var vCell = document.createElement("TD");childrenRow.appendChild(vCell);
  vCell.className = "TocV";
  var blankImg = document.createElement("IMG");vCell.appendChild(blankImg);
  blankImg.src = "CAADocQuickRefs/images/DSDocIcon_tocBlank.gif";
  //IE only	var childrenCell = childrenRow.insertCell();
  var childrenCell = document.createElement("TD");childrenRow.appendChild(childrenCell);
  childrenCell.className = "TocChildren";

  //HFJ for HITEM
  if(node.nodeName == "DITEM")
  {
    for (i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].nodeName == "HITEM") {
        modifiedDisplayAttributeArray += node.getAttribute("href") + "#" + node.childNodes[i].getAttribute("dir") + "+";
      }
    }
    // Removed PSR - Check for empty nodes
    //return;
    // Added PSR - Check for empty nodes
    return true;
  }

  // --- go further
  // Added PSR - makeTOCChildItems returns true of false to manage node removal
  var rc = makeTOCChildItems(childrenCell, node);
  // Added PSR - Check for empty nodes
  //return true;
  if (rc == false) { return false; }
  else { return true; }
}

// -----------------------------------------------------------------------
/**
* Loads DITEM children if not done yet.
* This function also creates the DOM objects representing the DITEM children
* under the DITEM leaf in the TOC tree.
* retuns true if children were loaded
*/
function loadChildrenIfNeeded(rowObj, asynch) {
  var childrenRow = rowObj.nextSibling;
  if (childrenRow == null)
    return false;

  // --- load children nodes if need be
  var childrenCell = childrenRow.cells[1];
  var childrenTable = childrenCell.firstChild;
  if (childrenTable != null || rowObj.TOC_NODE.getAttribute("loaded"))
    return false;

  // --- child TOC has to be loaded

  // --- mark DITEM as "loaded"
  rowObj.TOC_NODE.setAttribute("loaded", true);

  // --- show "..." while loading site map
  var waitingSpan = document.createElement("SPAN");
  waitingSpan.className = "TocWaiting";
  waitingSpan.innerHTML = "loading...";
  childrenCell.appendChild(waitingSpan);
  window.status = "Loading...";

  // --- 2: load child TOC structure
  var childTocRootNode = null;
  var childTocFile = rowObj.TOC_NODE.getAttribute("childtoc");
  //alert("loadChildrenIfNeeded - childTocFile = "+childTocFile);
  //alert("loadChildrenIfNeeded - node = "+rowObj.TOC_NODE.nodeName);
  //alert("loadChildrenIfNeeded - node = "+rowObj.TOC_NODE.getAttribute("name"));
  if (childTocFile != null) {
    //alert("loadChildrenIfNeeded -childTocFile = "+childTocFile);
    // --- cnfxml file format (built) does not contain yet the 'name'
    // --- comment out this when done (MLP)
    /*
    if(childTocFile.endsWith(".cnfxml"))
    {
    // --- load the <productTag>ssm.htm and explore the DOM
    var directory = rowObj.TOC_NODE.getAttribute("dir");
    var idx = directory.indexOf('_');
    var productTag = idx < 0 ? directory : directory.substr(0, idx);
    var ssmFile = directory+"/"+productTag+"ssm.htm";
    var siteMapContent = null;
    try {
    siteMapContent = loadFile(ssmFile, "txt");
    } catch(e) { }
      
    if(siteMapContent != null)
    {
    // --- create an hidden div
    var hiddenDiv = document.createElement("DIV");
    hiddenDiv.style.display = "none";
    // --- load the site map in the hidden div
    hiddenDiv.innerHTML = siteMapContent;
        
    // --- build the site map structure
    childTocRootNode = rebuildSiteMapStructure(rowObj.TOC_NODE.ownerDocument, hiddenDiv);
    }
    }
    else
    */
    {
      // --- load the XML 
      //	var siteMapXMLFile = "../"+rowObj.TOC_NODE.getAttribute("ID")+"/structure.cnfxml";
      try {
        //alert("loadChildrenIfNeeded - childTocFile: "+childTocFile);
        childTocRootNode = loadXML(childTocFile).getElementsByTagName('Root')[0];
        // Added PSR to enable IMPORT within DITEM
        resolveImports(childTocRootNode);
      }
      catch (e) {
        alert("Warning: couldn't load common navigation links."+
              "\n Error = "+e);
      }
    }
  }

  // --- treat errors (TOC not found)
  if (childTocRootNode == null) {
    // --- add children node 'not found'
    waitingSpan.innerHTML = "not found";
    waitingSpan.className = "TocNotFound";
    window.status = "Error: TOC not found.";
    return false;
  }

  // --- add child TOC to DITEM node
  while (childTocRootNode.firstChild != null) {
    // --- remove node
    var node = childTocRootNode.firstChild;
    childTocRootNode.removeChild(node);
    // --- then append to TOC_NODE
    if (node.nodeType == 1)
      rowObj.TOC_NODE.appendChild(node);
  }

  // --- build DOM children
  makeTOCChildItems(childrenCell, rowObj.TOC_NODE);

  // --- remove waiting SPAN
  childrenCell.removeChild(waitingSpan);

  // --- reset status
  window.status = "";

  return true;

}


// -----------------------------------------------------------------------
/**
* Builds the site map structure by analysing the ssm.htm file DOM.
*/
function rebuildSiteMapStructure(doc, parentElt) {
  var smRoot = doc.createElement("Root");
  var curPath = [smRoot];
  for (var i = 0; i < parentElt.childNodes.length; i++) {
    var elt = parentElt.childNodes[i];
    if (elt.nodeName == "P" && elt.className != null && elt.className.substr(0, 3) == "ssm") {
      // --- this is a site map node: create
      var newNode = doc.createElement("ITEM");
      var linkElts = elt.getElementsByTagName("A");
      if (linkElts == null || linkElts.length == 0) {
        DebugMessage("No link found in site map node " + elt);
      }
      else {
        if (linkElts.length > 1)
          DebugMessage("" + linkElts.length + " links found in site map node " + elt + ". Taking first.");

        var relLink = buildRelativeLink(linkElts[0]);
        newNode.setAttribute("href", relLink);

        // --- retreive link text
        //				var linkText = linkElts[0].innerHTML;
        var linkText = linkElts[0].lastChild.nodeValue; // equivalent to innerText
        linkText = linkText.replace(/[\n\r\f]+/g, " "); // --- replaces return chars with blanks
        linkText = linkText.replace(/[ ]+/g, " "); // --- replaces a serie of blank with one blank
        newNode.setAttribute("name", linkText);
      }

      // --- append the node to its parent
      var level = parseInt(elt.className.substr(3));
      if (level == 2 && elt.style.marginLeft) {
        // --- extract left margin size
        var units = elt.style.marginLeft.substr(elt.style.marginLeft.length - 2, 2);
        //				DebugMessage("units: "+units);
        if (units == "px") {
          var len = parseInt(elt.style.marginLeft.substr(0, elt.style.marginLeft.length - 2));
          level += (len - 25) / 25;
        }
      }
      curPath[level] = newNode;
      curPath[level - 1].appendChild(newNode);
    }
  }
  return smRoot;
}

// -----------------------------------------------------------------------
/**
* Anchor icon click handler
* Expands and collapses TOC items
*/
function onClickTocAnchor(evt) {
  var obj = window.event ? event.srcElement : evt.target;

  //	DebugMessage("expand: "+obj.nodeName);
  // --- click on the anchor icon: collapse or expand children
  var rowObj = getFatherNode("TR", obj);
  var childrenRow = rowObj.nextSibling;
  if (childrenRow == null)
    return;
  var anchorIcon = obj;
  if (childrenRow.className == "TocCollapsed") {
    // --- expand
    childrenRow.className = "TocExpanded";
    anchorIcon.src = "CAADocQuickRefs/images/DSDocIcon_tocMinus.gif";

    loadChildrenIfNeeded(rowObj, true);
  }
  else {
    // --- collapse
    childrenRow.className = "TocCollapsed";
    anchorIcon.src = "CAADocQuickRefs/images/DSDocIcon_tocPlus.gif";
  }
}

// -----------------------------------------------------------------------
/**
* TOC item link click handler
* Selects a TOC item
*/
function onClickTocItem(evt) {
  //  alert("onClickTocItem - Click in the tree");
  // Reset LINK_TO_LOAD and BREADCRUMBLINK_TO_LOAD to state that the click comes from the tree
  LINK_TO_LOAD = null;
  BREADCRUMBLINK_TO_LOAD = null;
  // difference IE & mozilla
  var linkObj = window.event ? event.srcElement : evt.target;
  var rowObj = getFatherNode("TR", linkObj);
  //HFJ for reference node.
  globalTOCrowObj = rowObj;
  eventTocItem = true;

  // --- 1: unselect current selection
  unselectTocItem();

  // --- reset synchronize button
  //var syncLink = parent.frames["TocBar"].document.getElementById("SyncToc");
  //syncLink.className = "SyncTocOff";

  // --- 2: select this item
  TOC_SELECTED_ITEM_ROW = rowObj;
  TOC_SELECTED_ITEM_ROW.className = "TocCurItem";

  // --- 3: expand children if needed
  var childrenRow = rowObj.nextSibling;
  if (childrenRow != null && childrenRow.className == "TocCollapsed") {
    // --- expand
    childrenRow.className = "TocExpanded";
    var anchorIcon = rowObj.cells[0].firstChild;
    anchorIcon.src = "CAADocQuickRefs/images/DSDocIcon_tocMinus.gif";

    // --- load children nodes if need be
    loadChildrenIfNeeded(rowObj, true);
  }
}

// -----------------------------------------------------------------------
/**
* Unselects the current selected item in TOC
*/
function unselectTocItem() {
  // --- 1: unselect current selection
  if (TOC_SELECTED_ITEM_ROW != null) {
    TOC_SELECTED_ITEM_ROW.className = "TocItem";
    TOC_SELECTED_ITEM_ROW = null;
  }
}

// -----------------------------------------------------------------------
/**
* Returns true if the current displayed file (in frame 'Main')
* is the current selection in TOC and visible (not collapsed path).
*/
///*
function isCurrentFileSelected() {

  if (TOC_DATA == null)
  // --- TOC now loaded yet: exit
    return true;

  var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
  if (!isWindowLoaded(mainWin))
    return true;
  //hfj for eleminiting sync button
  //if(TOC_SELECTED_ITEM_ROW == null)
  //{
//alert('isCurrentFileSelected - TOC_SELECTED_ITEM_ROW '+TOC_SELECTED_ITEM_ROW);
  // --- no selection yet: select file and expand
  //   selectCurrentFile();
  //  return true;
  // }
  selectCurrentFile(); //hfj for testing.
  ////
  // --- there is a selection: retrieive TOC item associated to the current url and check
  var itemRow = null;
  if (LINK_TO_LOAD!=null) {
    //itemRow = getTOCItemFromName(LINK_TO_LOAD.replace(/ /g, "&nbsp;"));
    itemRow = getFatherNode("TR", retNode);;
//alert('isCurrentFileSelected - Click in a page '+LINK_TO_LOAD+' itemRow '+itemRow);
    if (itemRow == null) {
//alert('isCurrentFileSelected - Click in a page itemRow=NULL '+itemRow);
//alert('isCurrentFileSelected - Click in a page itemRow=NULL '+getTOCItemFromName(LINK_TO_LOAD.replace(/ /g, "&nbsp;")));
	  itemRow = getFatherNode("TR", getTOCItemFromURL(mainWin.document.location));
	    if (itemRow==null) {
        var linkToLoad = LINK_TO_LOAD.replace(/ /g, "&nbsp;");
//alert('isCurrentFileSelected - Click in a page itemRow=NULL '+linkToLoad);
        linkToLoad = linkToLoad.replace(/\n/g, "");
//alert('isCurrentFileSelected - Click in a page itemRow=NULL '+linkToLoad);
        linkToLoad = linkToLoad.replace(/\t/g, "");
//alert('isCurrentFileSelected - Click in a page itemRow=NULL '+linkToLoad);
        itemRow = getFatherNode("TR", getTOCItemFromName(linkToLoad));
      }
//    itemRow = getFatherNode("TR", getTOCItemFromName(LINK_TO_LOAD.replace(/ /g, "&nbsp;")));
//alert('isCurrentFileSelected - Click in a page itemRow!=NULL '+itemRow);
    }
  }
  else if (BREADCRUMBLINK_TO_LOAD!=null) {
//alert('isCurrentFileSelected - Click in the breadcrumb '+BREADCRUMBLINK_TO_LOAD);
    //itemRow = getTOCItemFromName(BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;"));
    itemRow = getFatherNode("TR", retNode);
    if (itemRow == null) {
//alert('isCurrentFileSelected - Click in the breadcrumb itemRow=NULL '+itemRow);
	  itemRow = getFatherNode("TR", getTOCItemFromURL(mainWin.document.location));
	  if (itemRow==null) {
        itemRow = getFatherNode("TR", getTOCItemFromName(BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;")));
      }
//alert('isCurrentFileSelected - Click in the breadcrumb itemRow!=NULL '+itemRow);
    }
  }
  else {
//alert('isCurrentFileSelected - Click in the tree');
//itemRow = getTOCItemFromURL(mainWin.document.location);
    itemRow = TOC_SELECTED_ITEM_ROW;
  }
  if (itemRow == null)
  {
    // --- corresponding TOC item cannot be found: return true

//alert('isCurrentFileSelected -1- TOC item cannot be found');
    return true;
  }
//alert('isCurrentFileSelected -itemRow- '+itemRow.TOC_NODE.getAttribute("name")+'\n TOC_SELECTED_ITEM_ROW '+TOC_SELECTED_ITEM_ROW.TOC_NODE.getAttribute("name"));

  if (itemRow != TOC_SELECTED_ITEM_ROW)
  {
//alert('isCurrentFileSelected -2- Current page is different from current TOC item\n itemRow '+itemRow.TOC_NODE.getAttribute("name")+' TOC_SELECTED_ITEM_ROW '+TOC_SELECTED_ITEM_ROW.TOC_NODE.getAttribute("name"));
    return false;
  }
  // --- check that TOC_SELECTED_ITEM_ROW is displayed
  var curRow = itemRow;
  while (curRow != null) {
    var childrenRow = getFatherNode("TR", curRow.parentNode);
    if (childrenRow == null)
      break;
    if (childrenRow.className != "TocExpanded")
    {
//alert('isCurrentFileSelected -3- TOC selected item is NOT displayed');
      return false;
    }
    curRow = childrenRow.previousSibling;
  }
//alert('isCurrentFileSelected -4- TOC selected item is displayed');
  return true;
}

// -----------------------------------------------------------------------
/**
* Expands and selects the current document file in the TOC
*/
function selectCurrentFile() {
  if (TOC_DATA == null)
  // --- TOC not loaded yet: exit
    return;

  // --- 1: update TOC path
  var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
  if (!isWindowLoaded(mainWin))
    return;

  // --- first unselect current path
  unselectTocItem();

  // --- then select and expand the current doc path
//var itemRow = getTOCItemFromURL(mainWin.document.location);
  var itemRow = null;
  if (LINK_TO_LOAD!=null) {
    //itemRow = getTOCItemFromName(LINK_TO_LOAD.replace(/ /g, "&nbsp;"));
    //itemRow = getFatherNode("TR", retNode);
    itemRow = getFatherNode("TR", getTOCItemFromURL(mainWin.document.location));
//alert('selectCurrentFile - Click in a page '+LINK_TO_LOAD+' itemRow '+itemRow);
    if (itemRow == null) {
//alert('selectCurrentFile - Click in a page itemRow=NULL '+itemRow);
      var linkToLoad = LINK_TO_LOAD.replace(/ /g, "&nbsp;");
//alert('selectCurrentFile - Click in a page itemRow=NULL '+linkToLoad);
      linkToLoad = linkToLoad.replace(/\n/g, "");
//alert('selectCurrentFile - Click in a page itemRow=NULL '+linkToLoad);
      linkToLoad = linkToLoad.replace(/\t/g, "");
//alert('selectCurrentFile - Click in a page itemRow=NULL '+linkToLoad);
      itemRow = getFatherNode("TR", getTOCItemFromName(linkToLoad));
//alert('selectCurrentFile - Click in a page itemRow!=NULL '+itemRow);
    }
  }
  else if (BREADCRUMBLINK_TO_LOAD!=null) {
    //itemRow = getTOCItemFromName(BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;"));
    //itemRow = getFatherNode("TR", retNode);
    itemRow = getFatherNode("TR", getTOCItemFromURL(mainWin.document.location));
//alert('selectCurrentFile - Click in the breadcrumb '+BREADCRUMBLINK_TO_LOAD+' itemRow '+itemRow);
    if (itemRow == null) {
//alert('selectCurrentFile - Click in the breadcrumb itemRow=NULL '+itemRow);
      itemRow = getFatherNode("TR", getTOCItemFromName(BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;")));
//alert('selectCurrentFile - Click in the breadcrumb itemRow!=NULL '+itemRow);
    }
  }
  else {
//  itemRow = getTOCItemFromURL(mainWin.document.location);
    itemRow = TOC_SELECTED_ITEM_ROW;
//alert('selectCurrentFile - Click in the tree - itemRow '+itemRow);
  }
  if(itemRow == null)
  {
//alert('selectCurrentFile - Coucou');
    itemRow = getTOCItemFromURL(mainWin.document.location);
    if (itemRow == null)
      return;
  }

  // --- 1: expand path
  var curRow = itemRow;
  while (curRow != null) {
    var childrenRow = getFatherNode("TR", curRow.parentNode);
    if (childrenRow == null)
      break;
    childrenRow.className = "TocExpanded";
    // -- set minus icon
    curRow = childrenRow.previousSibling;
    if (curRow != null) {
      var anchorIcon = curRow.cells[0].firstChild;
      anchorIcon.src = "CAADocQuickRefs/images/DSDocIcon_tocMinus.gif";
    }
  }
  // --- 2: select item
  TOC_SELECTED_ITEM_ROW = itemRow;
  TOC_SELECTED_ITEM_ROW.className = "TocCurItem";
//alert('selectCurrentFile - TOC_SELECTED_ITEM_ROW '+TOC_SELECTED_ITEM_ROW.getAttribute("name"));

  // --- 3: scroll item into view
  var container = document.body;
  var obj = TOC_SELECTED_ITEM_ROW;
  var absPosition = getAbsPos(obj);
  var top = absPosition[1];
  //	DebugMessage("about to scroll into view. top="+top+", height="+obj.offsetHeight+", scrollTop="+container.scrollTop+", clientHeight="+container.clientHeight);
  if (top < container.scrollTop)
  // --- obj is above scroll view
    container.scrollTop = top;
  else if (top + obj.offsetHeight > container.scrollTop + container.clientHeight)
  // --- obj is under scroll view
    container.scrollTop = top + obj.offsetHeight - container.clientHeight;
  //no: always scrolls	TOC_SELECTED_ITEM_ROW.scrollIntoView(true);
  //alert("itemRow "+itemRow.innerHTML );
}

//--------------------------------------------------------------
function getHTTPObject() {
  var xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  else if (window.ActiveXObject)  // Windows HTML Object
  {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    if (!xmlhttp) {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
  }
  return xmlhttp;
}

//--------------------------------------------------------------
function clearFlag() {
  eventTocItem = false;
  globalTOCrowObj = null;
  globalLastDomObj = lastDomObj;
}
