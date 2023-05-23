//------------------------------------------------------
// Should Not Be Included In Files Made Available in Chm
//------------------------------------------------------
// Global variables
var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
//var startTocTime, endTocTime;
// Event handlers: Capture various window and document events

if (IE) {
    document.onclick=getLink;
} else if (NS7) {
    if (window.frameElement.name=="mainsm") {
        window.onclick=getLink;
    }
} else {
    alert('Unsupported web browser');
}

var curRow = null;

//-------------------------------------------------------------------	
function resize(evt) {
    evt = (evt ? evt : window.event);
//alert('Frame Loaded'); 
    var itemIFrame = document.getElementById("myFrame");
    if (IE) {
//		alert(document.frames("myFrame").document.getElementById("intro").id);
        itemIFrame.height = document.frames("myFrame").document.getElementById("intro").offsetHeight + 15;
/*
        var collAll = document.frames("myFrame").document.all;
        for (var i=0;i<collAll.length;i++) {
            if (collAll[i].id=="intro") {
                itemIFrame.height = collAll[i].offsetHeight + 15;
            }
        }
*/
    } else if (NS7) {
        var divInFrame = itemIFrame.contentDocument.getElementById("intro");
        itemIFrame.height = divInFrame.offsetHeight + 15;
    } else {
        alert('Unsupported web browser');
    }
    endToc();
}
function resize2(evt) {
    evt = (evt ? evt : window.event);
    var itemIFrame = document.getElementById("myFrame");
    if (IE) {
        itemIFrame.height = document.frames("myFrame").document.getElementById("intro").offsetHeight + 15;
    } else if (NS7) {
        var divInFrame = itemIFrame.contentDocument.getElementById("intro");
        itemIFrame.height = divInFrame.offsetHeight + 15;
    } else {
        alert('Unsupported web browser');
    }
}
//-------------------------------------------------------------------	
function startToc(toctree, node) {
//alert('startToc start');
	var nodeInfo = toctree.getNavNodeInfo(node);
    document.title = nodeInfo.name;
	var isIframe = false;
	var itemDefH1 = document.getElementById("title");
    itemDefH1.innerHTML = nodeInfo.name;
	var itemTd = document.getElementById("intro");
	if (itemTd != null) { // There is no introduction in the Toc file. Create the default one or retrieve it from another html file
		var iframe = node.getAttribute("iframe");
		var itemIFrame = document.getElementById("myFrame");
		if (iframe==null && itemIFrame==null) {    // No iframe in xml and in html
//alert('startToc -- itemTd.innerHTML ="'+itemTd.innerHTML+'"');
			var introInnerHtml = itemTd.innerHTML;
			introInnerHtml = introInnerHtml.replace(/(\n|\r)+$/, '');
			introInnerHtml = introInnerHtml.replace(/\s+$/, '');
//alert('startToc -- itemTd.innerHTML ="'+introInnerHtml+'"');
			if (introInnerHtml == "") {  // If no text is provided in the file, create standard intro
        // No need to create a paragrap. Insert in TD directly.
        //var itemP = document.createElement("P");
				//itemP.innerHTML = "This section deals with "+nodeInfo.name+".";
				//itemP.className = "header";
				//itemTd.appendChild(itemP);
				itemTd.innerHTML = "This section deals with "+nodeInfo.name+".";
			}
			endToc();
		} else if (iframe==null && itemIFrame!=null) {    // No iframe in xml, but one in html - 
			isIframe = true;
			resize();
//alert('isIframe = '+isIframe);
		} else if (iframe!=null && itemIFrame==null) {    // An iframe in xml, but no in html - Create the iframe in html
			isIframe = true;
			itemIFrame = document.createElement("IFRAME");
			itemIFrame.src = iframe;
			itemIFrame.id = "myFrame";
			itemIFrame.className = "introFrame";
			itemIFrame.frameBorder = "no";
			itemIFrame.scrolling = "no";
			itemIFrame.style.marginLeft = '0px';

			itemTd.appendChild(itemIFrame);
			if (itemIFrame.addEventListener) { // For Mozilla
				itemIFrame.addEventListener('load', resize, false);
//alert('addEventListener');
			} else  if (itemIFrame.attachEvent) {  // For IE
//alert('attachEvent');
				itemIFrame.attachEvent('onload', resize);
			} else {
//alert('else');
		    	itemIFrame.onload(resize);
			}
		} else {
			alert("startToc -- iframe in xml and html");
		}
		if (isIframe==true) {
			if (mainWin.addEventListener) { // For Mozilla
				mainWin.addEventListener('resize', resize2, false);
			} else if (mainWin.attachEvent) {  // For IE
				mainWin.attachEvent('onresize', resize2);
	        } else {
		        mainWin.onload(resize2);
			}
		}
	} else {
		endToc();
	}
//	startTocTime=new Date().getTime();
//alert('startToc end');
}
//-------------------------------------------------------------------	
function endToc() {
//  var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
//	endTocTime=new Date().getTime();
//	var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
//    var curRow = tocTreeWin.TOC_SELECTED_ITEM_ROW;
	if(curRow != null)
	{
		var curNode = curRow.TOC_NODE;
        var href = "";
        href = curNode.getAttribute("href");
        //alert('href = '+href);
        //if (href==null || href=="CAADocQuickRefs/DSDocDefaultToc.htm" || href=="CAACppToc/CAACppTcCPPReferenceToc.htm" || href=="CAAScdBase/CAAScdTcIDLReferenceToc.htm") {
        if ((href==null || href.endsWith("Toc.htm") || href.endsWith("00.htm")) && document.getElementById("intro")!=null) {
        //if (href==null || href.endsWith("Toc.htm")) {
			var itemHr = document.createElement("HR");
			itemHr.className = "header";
			itemHr.style.marginTop = "10px";
			var itemTd = document.getElementById("intro");
			itemTd.appendChild(itemHr);
			var itemTd = document.getElementById("intro");
			itemTd.appendChild(itemHr);
		}
		var itemUnknown = document.getElementById("toc");
		var itemList = null;
		if (itemUnknown.tagName=="UL") {
			itemList = itemUnknown;
		} else if (itemUnknown.tagName=="DIV") {
			itemList = document.createElement("UL");
			itemList.className = "toc";
			itemUnknown.appendChild(itemList);
		}
//-		var itemDiv = document.getElementById("toc");
//-		var itemList = document.createElement("UL");
//-		itemList.className = "toc";
		var frameworks = new Array();  // C++
		var frameworkTexts = new Array();
		var fw = -1; // Framework count
		var frameworksIDL = new Array();  // Automation
		var fwIDL = -1; // Framework count
		var frameworksJS = new Array();  // JavaScript
		var fwJS = -1; // Framework count
		var metadata = new Array();  // Metadata
		var met = -1; // metadata count
		var settings = new Array();  // Settings
		var set = -1; // setting count
		var startups = new Array();  // StartUps
		var startupUrls = new Array();
		var startup = -1; // startup count
		var i=0;
		while(i<curNode.childNodes.length)
		{
			var child = curNode.childNodes[i]; // caching the object does not increase performance
			//if(child.nodeType == 1 && child.nodeName!="HITEM") // nodeType = 1 : Element, and not an HITEM
			if(child.nodeType == 1 && child.nodeName=="PITEM") { // nodeType = 1 : Element PITEM
				var childNodeInfo = tocTreeWin.getNavNodeInfo(child);
				if (childNodeInfo.type=="framework") {
					fw++;
					//alert ('Recording framework '+childNodeInfo.name);
					frameworks[fw] = childNodeInfo.name;
					//alert ('Recording framework '+frameworks[fw]);
					var ftext = curNode.childNodes[i].getAttribute("text");
					if (ftext!=null) {
						frameworkTexts[fw] = ftext;
					} else {
						frameworkTexts[fw] = "";
					}
				} else if (childNodeInfo.type=="frameworkIDL") {
					fwIDL++;
					frameworksIDL[fwIDL] = childNodeInfo.name;
				} else if (childNodeInfo.type=="frameworkJS") {
					fwJS++;
					frameworksJS[fwJS] = childNodeInfo.name;
				} else if (childNodeInfo.type=="metadata") {
					met++;
					metada[met] = childNodeInfo.name;
				} else if (childNodeInfo.type=="setting") {
					set++;
					settings[set] = childNodeInfo.name;
				} else if (childNodeInfo.type=="startup") {
					startup++;
					startups[startup] = childNodeInfo.name;
					startupUrls[startup] = childNodeInfo.link;
				} else {
					alert ("Invalid PITEM tag attribute: "); 
				} 
			} else if(child.nodeType == 1 && child.nodeName!="HITEM") // nodeType = 1 : Element, and not an HITEM
			{
				var childNodeInfo = tocTreeWin.getNavNodeInfo(child);
				var itemListItem = document.createElement("LI");
				if (child.childNodes.length!=0 ||
				    child.nodeName=="DITEM") {
    				itemListItem.className = "toc";
				}
				itemList.appendChild(itemListItem);
				var itemListA = document.createElement("A");
				itemListA.innerHTML = childNodeInfo.name;
                if (childNodeInfo.link==null) {
				  itemListA.href = "../CAADocQuickRefs/DSDocDefaultToc.htm";
                } else if (href=="CAACppToc/CAACppTcCPPReferenceToc.htm") {
				  //itemListA.href = '../../generated/refman/'+childNodeInfo.link;//+'#'+childNodeInfo.name;
				  itemListA.href = '../'+childNodeInfo.link;//+'#'+childNodeInfo.name;
				  //alert("Link set = "+itemListA.href);
                } else if (href=="CAAScdBase/CAAScdTcIDLReferenceToc.htm") {
				  //itemListA.href = '../../generated/interfaces/'+childNodeInfo.link;//+'#'+childNodeInfo.name;
				  itemListA.href = '../'+childNodeInfo.link;//+'#'+childNodeInfo.name;
				} else if (childNodeInfo.link.startsWith("http")) {
					itemListA.href = childNodeInfo.link;
                } else {
				  itemListA.href = '../'+childNodeInfo.link;//+'#'+childNodeInfo.name;
                }
				//itemListA.href = childNodeInfo.link;//+'#'+childNodeInfo.name;
				itemListA.target = MAIN_FRAMENAME;
				itemListItem.appendChild(itemListA);
				var itext = child.getAttribute("text");
				if (itext!=null) {
				    itemListItem.innerHTML += ' ' + itext;
                }
			}
			i++;
			continue;
		}
		if (fw > -1) {
			buildRefSection('CPP', frameworks, frameworkTexts);
			//alert('frameworks list size '+frameworks.length);
			//for (var j = 0; j < frameworks.length; j++)
			//	alert('Framework Number '+j+' is '+frameworks[j]);
/*
			var themeTable = document.getElementById("DocThemeIntro");
			var itemTBODY = null;
			i = 0;
			while (i<themeTable.childNodes.length) {
				itemTBODY = themeTable.childNodes[i];
				if (itemTBODY.tagName=="TBODY")
					break;
				i++;
			}
			var itemTR = document.createElement("TR");
			itemTBODY.appendChild(itemTR);
			var itemTD = document.createElement("TD");
			itemTD.className = "Intro2";
			itemTR.appendChild(itemTD);
			var itemSPAN = document.createElement("SPAN");
			itemSPAN.className = "run-in";
			itemTD.appendChild(itemSPAN);
			itemSPAN.innerHTML = "Also in this section, the framework API reference:"
			var itemUL = document.createElement("UL");
			itemUL.className = "toc";
			itemTD.appendChild(itemUL);
			for (var j = 0; j < frameworks.length; j++) {
				var itemLI = document.createElement("LI");
				//itemLI.className = "toc";
				itemLI.innerHTML = "<a href=\"#\" onclick=\"CAAlink('CPP', '"+frameworks[j]+"'); return false;\">"+frameworks[j]+"</a>"
				if (frameworkTexts[j] != "")
					itemLI.innerHTML += ' ' + frameworkTexts[j]; 
				itemUL.appendChild(itemLI);
			}
*/
		}
		if (fwIDL > -1)
			buildRefSection('IDL', frameworksIDL);
		if (fwJS > -1)
			buildRefSection('JS', frameworksJS);
		if (met > -1) {
		}
		if (set > -1) {
			buildRefSection('SET', settings);
/*
			var themeTable = document.getElementById("DocThemeIntro");
			var itemTBODY = null;
			i = 0;
			while (i<themeTable.childNodes.length) {
				itemTBODY = themeTable.childNodes[i];
				if (itemTBODY.tagName=="TBODY")
					break;
				i++;
			}
			var itemTR = document.createElement("TR");
			itemTBODY.appendChild(itemTR);
			var itemTD = document.createElement("TD");
			itemTD.className = "Intro2";
			itemTR.appendChild(itemTD);
			var itemSPAN = document.createElement("SPAN");
			itemSPAN.className = "run-in";
			itemTD.appendChild(itemSPAN);
			itemSPAN.innerHTML = "Also in this section, the settings reference:"
			var itemUL = document.createElement("UL");
			itemUL.className = "toc";
			itemTD.appendChild(itemUL);
			for (var j = 0; j < settings.length; j++) {
				var itemLI = document.createElement("LI");
				//itemLI.className = "toc";
				itemLI.innerHTML = "<a href=\"#\" onclick=\"CAAlinkOutOfPreqs('CAAScrSettings/"+settings[j]+".htm'); return false;\">"+settings[j]+"</a>"
				itemUL.appendChild(itemLI);
			}
*/
		}
		if (startup > -1) {
			buildRefSection('STARTUP', startups, startupUrls);
/*
			var themeTable = document.getElementById("DocThemeIntro");
			var itemTBODY = null;
			i = 0;
			while (i<themeTable.childNodes.length) {
				itemTBODY = themeTable.childNodes[i];
				if (itemTBODY.tagName=="TBODY")
					break;
				i++;
			}
			var itemTR = document.createElement("TR");
			itemTBODY.appendChild(itemTR);
			var itemTD = document.createElement("TD");
			itemTD.className = "Intro2";
			itemTR.appendChild(itemTD);
			var itemSPAN = document.createElement("SPAN");
			itemSPAN.className = "run-in";
			itemTD.appendChild(itemSPAN);
			itemSPAN.innerHTML = "Also in this section, the derivable StartUps:"
			var itemUL = document.createElement("UL");
			itemUL.className = "toc";
			itemTD.appendChild(itemUL);
			for (var j = 0; j < startups.length; j++) {
				var itemLI = document.createElement("LI");
				//itemLI.className = "toc";
				itemLI.innerHTML = "<a href=\"../"+startupUrls[j]+"\">"+startups[j]+"</a>"
				itemUL.appendChild(itemLI);
			}
*/
		}

//-		itemDiv.appendChild(itemList);
	} else {
		window.frameElement.src = "CAADocQuickRefs/CAADoc404.htm";
	}
//alert('endToc end '+window.history.length);
//    tocTreeWin.LINK_TO_LOAD = null;
//    tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
//	alert('Between start and end: '+((endTocTime-startTocTime)/1000)+' seconds.');
}
//-------------------------------------------------------------------	
function buildRefSection(iLang, iFws, iFwTexts) {
	//alert('frameworks list size '+frameworks.length);
	//for (var j = 0; j < frameworks.length; j++)
	//	alert('Framework Number '+j+' is '+frameworks[j]);
	var themeTable = document.getElementById("DocThemeIntro");
	var itemTBODY = null;
	i = 0;
	while (i<themeTable.childNodes.length) {
		itemTBODY = themeTable.childNodes[i];
		if (itemTBODY.tagName=="TBODY")
			break;
		i++;
	}
	var itemTR = document.createElement("TR");
	itemTBODY.appendChild(itemTR);
	var itemTD = document.createElement("TD");
	itemTD.className = "Intro2";
	itemTR.appendChild(itemTD);
	var itemSPAN = document.createElement("SPAN");
	itemSPAN.className = "run-in";
	itemTD.appendChild(itemSPAN);
	var text = "";
	if (iLang == "CPP") 
		text = "Also in this section, the framework API reference:";
	else if (iLang == "JS")
		text = "Also in this section, the JavaScript reference:";
	else if (iLang == "SET")
		text = "Also in this section, the settings reference:";
	else if (iLang == "STARTUP")
		text = "Also in this section, the derivable StartUps:";
	itemSPAN.innerHTML = text;
	var itemUL = document.createElement("UL");
	itemUL.className = "toc";
	itemTD.appendChild(itemUL);
	for (var j = 0; j < iFws.length; j++) {
		var itemLI = document.createElement("LI");
		//itemLI.className = "toc";
		if (iLang == "CPP" || iLang == "IDL" || iLang == "JS")
			itemLI.innerHTML = "<a href=\"#\" onclick=\"CAAlink('"+iLang+"', '"+iFws[j]+"'); return false;\">"+iFws[j]+"</a>";
		else if (iLang == "SET")
			itemLI.innerHTML = "<a href=\"#\" onclick=\"CAAlinkOutOfPreqs('CAAScrSettings/"+iFws[j]+".htm'); return false;\">"+iFws[j]+"</a>"
		else if (iLang == "STARTUP")
			itemLI.innerHTML = "<a href=\"../"+iFwTexts[j]+"\">"+iFws[j]+"</a>";
		if (iLang != "STARTUP" && iFwTexts && iFwTexts[j] != "")
			itemLI.innerHTML += ' ' + iFwTexts[j]; 
		itemUL.appendChild(itemLI);
	}
}

//-------------------------------------------------------------------	
function createToc2() {
	var retNode=null;
////////////////////////////////////////////////////////////////////////////////
// Added PSR - At first load, to prevent from loading a home page when the tree
// is not loaded. The tree will load first and request the home page to be 
// re-loaded afterwards.
////////////////////////////////////////////////////////////////////////////////
	if (tocTreeWin.TOC_DATA == null) {
		return;
	}
////////////////////////////////////////////////////////////////////////////////
//	var startTime,endTime;
//	startTime=new Date().getTime();

//	var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
//	var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
	curRow = tocTreeWin.TOC_SELECTED_ITEM_ROW;
//alert('createToc2 - tocTreeWin.LINK_TO_LOAD = '+tocTreeWin.LINK_TO_LOAD);
//alert('createToc2 - tocTreeWin.BREADCRUMBLINK_TO_LOAD = '+tocTreeWin.BREADCRUMBLINK_TO_LOAD);
	if (tocTreeWin.LINK_TO_LOAD==null && tocTreeWin.BREADCRUMBLINK_TO_LOAD==null && tocTreeWin.eventTocItem==true) {
//----------------------------------------------
// Create the Toc page after a click in the tree
//alert('Click in the tree');
		if(curRow != null)
		{
			var curNode = curRow.TOC_NODE;
			if (curNode != null && curNode.nodeName != "Root")
			{
//alert('createToc2 - curNode.getAttribute("name") = '+curNode.getAttribute("name"));
					if (curNode.nodeName=="DITEM" && curNode.childNodes.length==0) {
						tocTreeWin.loadChildrenIfNeeded(curRow, true);
					}
                var href = "";
                href = curNode.getAttribute("href");
                //alert('href = '+href);
                var index = mainWin.document.location.pathname.lastIndexOf("\\");
				var length = mainWin.document.location.pathname.length;
				var path = mainWin.document.location.pathname.substring(0,index);
				index = path.lastIndexOf("\\");
				path = mainWin.document.location.pathname.substring(index+1, length);
				path = path.replace(/\\/, "/");
                //if (href==path &&
                //    (href==null ||
                //    href=="CAADocQuickRefs/DSDocDefaultToc.htm" ||
                //    (href!=null && href.endsWith("Toc.htm")) || // to avoid exception thrown by endsWith if href is null
                    //(href!=null && href.endsWith("Home.htm")) ||
                //    (href!=null && href.endsWith("00.htm"))) ) {
                //    startToc(tocTreeWin, curNode);
                if (href==path) {
                    startToc(tocTreeWin, curNode);
                } else if ( 
                    (href==null ||
                    href=="CAADocQuickRefs/DSDocDefaultToc.htm" ||
                    (href!=null && href.endsWith("Toc.htm")) || // to avoid exception thrown by endsWith if href is null
                    //(href!=null && href.endsWith("Home.htm")) ||
                    (href!=null && href.endsWith("00.htm"))) ) {
                    startToc(tocTreeWin, curNode);
                } else {
					retNode = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
					curRow = getFatherNode("TR", retNode);
//alert('Click in the tree - curRow');
					if(curRow != null)	{
						var curNode = curRow.TOC_NODE;
//alert('Click in the tree - curNode');
						if (curNode != null && curNode.nodeName != "Root") {
							if (curNode.nodeName=="DITEM" && curNode.childNodes.length==0) {
//alert('createToc2 - DITEM	2 = '+curNode.nodeName+' childtoc = '+curNode.getAttribute("childtoc"));
								tocTreeWin.loadChildrenIfNeeded(curRow, true);
							}
//alert('Click in the tree - startToc');
							startToc(tocTreeWin, curNode);
						}
					} else {
//alert('Click in the tree - Expired');
						window.frameElement.src = "CAADocQuickRefs/CAADoc404.htm";
				    }
                }
			}
		}
		else { // No current node in the tree - We come from the Search page
			retNode = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
			curRow = getFatherNode("TR", retNode);
			if(curRow != null) {
				var curNode = curRow.TOC_NODE;
				if (curNode != null && curNode.nodeName != "Root") {
          // Remove the check for null length. loadChildrenIfNeeded manages whether there are ITEM children
          // and if they are already loaded.
          // This allows for HITEM in DITEM, which are also children.
					//if (curNode.nodeName=="DITEM" && curNode.childNodes.length==0) {
					if (curNode.nodeName=="DITEM") {
//alert('Requesting the children to be loaded');
						tocTreeWin.loadChildrenIfNeeded(curRow, true);
					}
					startToc(tocTreeWin, curNode);
				}
			} else {
				window.frameElement.src = "CAADocQuickRefs/CAADoc404.htm";
		    }
		}
	} else {
	    //var retNode=null;
//------------------------------------------------------
// Create the Toc page after a click in another Toc page
	    if (tocTreeWin.LINK_TO_LOAD!=null) {
//alert('createToc2 - Click in a page');
//alert('createToc2 -0- retNode ='+retNode);
                // Attempt to retrieve the node from its name
    		    //retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.LINK_TO_LOAD.replace(/ /g, "&nbsp;"));
    		    retNode = tocTreeWin.getTOCItemFromURL(window.document.location);
//alert('createToc2 -1- retNode ='+retNode);
				if (retNode==null) {
				   retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.LINK_TO_LOAD.replace(/ /g, "&nbsp;"));
                }
                if (retNode==null && tocTreeWin.LINK_TO_LOAD=="C++ Reference") {
                    var toto = "CAA C++ References";
        		    retNode = tocTreeWin.getTOCItemFromName(toto.replace(/ /g, "&nbsp;"));
//alert('createToc2 -2- retNode ='+retNode);
		            var RefRow = getFatherNode("TR", retNode);
//alert('createToc2 -3- RefRow ='+RefRow);
		            if(RefRow != null)
		            {
            		    var RefNode = RefRow.TOC_NODE;
                        if (RefNode != null && RefNode.nodeName != "Root") {
		                    if (RefNode.nodeName=="DITEM" && RefNode.childNodes.length==0) {
//alert('createToc2 - DITEM = '+RefNode.nodeName+' childtoc = '+RefNode.getAttribute("childtoc"));
    //alert("createToc2 - node = "+RefRow.TOC_NODE.nodeName);
    //alert("createToc2 - node = "+RefRow.TOC_NODE.getAttribute("name"));
            			        tocTreeWin.loadChildrenIfNeeded(RefRow, true);
            			        toto = "C++ Reference";
                                retNode = tocTreeWin.getTOCItemFromName(toto.replace(/ /g, "&nbsp;"));;
		                    }
                        }
                    }
//alert('createToc2 -3- retNode ='+retNode);
                }
//alert('tocTreeWin.LINK_TO_LOAD = '+tocTreeWin.LINK_TO_LOAD);
//----------------------------------------------------
// Create the Toc page after a click in the breadcrumb
        } else if (tocTreeWin.BREADCRUMBLINK_TO_LOAD!=null) {
//alert('createToc2 - Click in the breadcrumb');
            retNode = tocTreeWin.getTOCItemFromURL(window.document.location);
            if (retNode==null) {
				retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;"));
			}
//alert('tocTreeWin.BREADCRUMBLINK_TO_LOAD = '+tocTreeWin.BREADCRUMBLINK_TO_LOAD);
        }
// Create the Toc page after a click from somewhere esle, namely from the history
      else {
//alert('tocTreeWin.eventTocItem = '+tocTreeWin.eventTocItem);
retNode = tocTreeWin.getTOCItemFromURL(window.document.location);
      }
		curRow = getFatherNode("TR", retNode);
//alert('createToc2 -3- retNode - curRow ='+retNode+' '+curRow);
		if(curRow != null)
		{
//alert('createToc2 -4- curRow != NULL');
      var curNode = curRow.TOC_NODE;
      if (curNode != null && curNode.nodeName != "Root") {
        if (curNode.nodeName=="DITEM" && curNode.childNodes.length==0) {
          tocTreeWin.loadChildrenIfNeeded(curRow, true);
        } else if (curNode.nodeName=="DITEM" && curNode.childNodes.length!=0) {
          for (var i=0; i<curNode.childNodes.length; i++) {
//alert('createToc2 -5- curNode.nodeName =' + curNode.nodeName+' curNode.childNodes.length = '+curNode.childNodes.length+' curNode.childNodes[i].nodeName =/'+curNode.childNodes[0].nodeValue+'/'+' curNode.childNodes[1].nodeName = '+curNode.childNodes[i].nodeName);
            if (curNode.childNodes[i].nodeName=="HITEM") {
//alert('createToc2 - DITEM 2 = '+curNode.nodeName+' childtoc = '+curNode.getAttribute("childtoc"));
              tocTreeWin.loadChildrenIfNeeded(curRow, true);
              break;
            }
          }
        }
        startToc(tocTreeWin, curNode);
      }
    } else {
      window.frameElement.src = "CAADocQuickRefs/CAADoc404.htm";
    }
	}
//	endTime=new Date().getTime();
//	alert('Elapsed time: '+((endTime-startTime)/1000)+' seconds.\n');
}
//-------------------------------------------------------------------	
function getLink(evt) {
	//var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
	//alert('getLink - tocTreeWin.PAGE_TO_LOAD = '+tocTreeWin.PAGE_TO_LOAD);
	if (tocTreeWin.PAGE_TO_LOAD==null) { // PAGE_TO_LOAD is set non null by submit just to by-pass getLink
		var fullLink = "";
        if (IE) {
            fullLink = window.event.srcElement.href;
        } else if (NS7) {
            evt = (evt ? evt : window.event);
			fullLink = evt.target.href;
		} else {
            alert('Unsupported web browser\n' +
			'To browse the CAA Encyclopedia, please use:\n' +
            '. Internet Explorer 7\n' +
            '. Mozilla FireFox 2.0'
            );
        }
		var index = 0;
//		var link = "";
		if (fullLink != null) {
			index = fullLink.lastIndexOf("?");
			if (index!=-1) {
				fullLink = fullLink.substring(0, index);
			}
			index = fullLink.lastIndexOf("/");
//alert('index = '+index);
//			if (index!=-1) {
//				link = fullLink.substr(index+1, fullLink.length);
//			}
//alert('link = '+link);
//alert('link = '+link.endsWith(".htm"));
//			if (fullLink=="DSDocDefaultToc.htm"
//				|| link=="DSDocDefaultToc.htm"
//				|| fullLink.endsWith("Toc.htm")
//				|| link=="CAACppTcCPPReferenceToc.htm"
//				|| link=="CAAScdTcIDLReferenceToc.htm") {
				//|| link.endsWith(".htm")) {
			if (fullLink.endsWith("Toc.htm") || fullLink.endsWith("00.htm")) {
				if (IE) {
					tocTreeWin.LINK_TO_LOAD = window.event.srcElement.innerHTML;
				} else if (NS7) {
					tocTreeWin.LINK_TO_LOAD = evt.target.innerHTML;
				} else {
					alert('Unsupported web browser\n' +
					'To browse the CAA Encyclopedia, please use:\n' +
					'. Internet Explorer 7\n' +
					'. Mozilla FireFox 2.0'
					);
				}
			} else {
				tocTreeWin.LINK_TO_LOAD = null;
			}
			tocTreeWin.BREADCRUMBLINK_TO_LOAD = null;
		}
    }
    tocTreeWin.PAGE_TO_LOAD=null;
}
