// =======================================================================
// === Breadcrumb Functions
// === Copyright 2006 © Dassault Systemes / Louis MANUKONDA
// =======================================================================
// === This Javascript Library contains functions used by the Breadcrumb
// === frame of the doc portal.
// === This frame displays a breacrumbs trail that represents - at any time
// === - the path of the current documentation page in the TOC (Table Of
// === Content).
// =======================================================================
// HISTORY :
// 2006 01 30 PSR creation
// 2006 08 31 LQA new specifications
// =======================================================================

if (IE) {
    document.onclick=getBreadcrumbLink;
} else if (NS7) {
    if (window.frameElement.name=="Breadcrumb") {
        window.onclick=getBreadcrumbLink;
    }
} else {
    alert('Unsupported web browser');
}
/*---------------------------------------------------------------- */
/**
 * onload event handler.
 * Initializes the breadcrumb frame.
 */
function initBreadcrumb()
{
//	DebugMessage("Init Breadcrumb");
	var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];
	if(mainWin.document && mainWin.document.location)
		updateBreadcrumb(mainWin);
}

/*---------------------------------------------------------------- */
/**
 * Updates the breadcrumb path with the new documentation page.
 * This function is called every time the main frame loads a new page (see 'RightFS.htm')
 */
function updateBreadcrumb(mainWin)
{
	// --- this is a preliminary version based on analysing the URL...
	// --- in most cases, a document page URL is of the form: <root>/<productTag>_<brandTag>/<file>.htm
	var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
    //if(tocTreeWin.retNode!=null) { alert('updateBreadcrumb - retnode = '+tocTreeWin.retNode.getAttribute("name")); }
	var leafNode = 0;
	var breadCrumbLength = null;
	var nodeStrings=new Array(2);
	var currentBreadCrumpNodeToTruncate = new Array(2);
	// max-length of bread-crumb to be displayed, can be changed
	//var maxLengthString = 158;
	//var linelength = 72;
	// V2E : Linelength and Maxlength is adjusted for liquid layout
	var frame = parent.parent.frames["RightFS"].document.getElementById("BreadCrumbFrame");
	var framePixels = frame.clientWidth;
	var maxLengthString = 260;
	var linelength = Math.round(framePixels/7);

	var args = extractParamsFromLocation(parent.location);
	docContext = args["context"];
	if (docContext == "3DVIA")
	{
        maxLengthString = 230;
	  linelength = 115;
	}
	var total_nodes = null;
	var breadcrumbHTML = null;
	var count = null;
	//resetting the frame length
	parent.parent.frames["RightFS"].document.getElementById("BreadCrumbFrameset").rows="20,*";
	//var itemRow = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
	    var itemRow = null;
//   alert('mainWin.document.URL = '+mainWin.document.location);
//alert('updateBreadcrumb LINK_TO_LOAD '+tocTreeWin.LINK_TO_LOAD+' BREADCRUMBLINK_TO_LOAD '+tocTreeWin.BREADCRUMBLINK_TO_LOAD);
    if (mainWin.document.URL.endsWith("Toc.htm") ||
        mainWin.document.URL.endsWith("00.htm") ) {
        if (tocTreeWin.LINK_TO_LOAD==null && tocTreeWin.BREADCRUMBLINK_TO_LOAD==null) {
//alert('updateBreadcrumb - Click in the tree for Toc');
            // The new page comes from a click in the tree that displays a Toc generated page
            itemRow = tocTreeWin.TOC_SELECTED_ITEM_ROW;
        } else if (tocTreeWin.LINK_TO_LOAD!=null && tocTreeWin.BREADCRUMBLINK_TO_LOAD==null) {
//alert('updateBreadcrumb - Click in a html page for Toc - tocTreeWin.LINK_TO_LOAD = '+tocTreeWin.LINK_TO_LOAD);
//        itemRow = tocTreeWin.LINK_TO_LOAD;
            // The new page comes from a click in a html page that displays a Toc generated page
            //var retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.LINK_TO_LOAD.replace(/ /g, "&nbsp;"));
            tocTreeWin.retNode = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
            //itemRow = getFatherNode("TR", retNode);
            if (tocTreeWin.retNode==null) {
            tocTreeWin.retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.LINK_TO_LOAD.replace(/ /g, "&nbsp;"));
            }
            itemRow = getFatherNode("TR", tocTreeWin.retNode);
        } else if (tocTreeWin.LINK_TO_LOAD==null && tocTreeWin.BREADCRUMBLINK_TO_LOAD!=null) {
//alert('updateBreadcrumb - Click in the breadcrumb for Toc - tocTreeWin.BREADCRUMBLINK_TO_LOAD = '+tocTreeWin.BREADCRUMBLINK_TO_LOAD);
            // The new page comes from a click in a the breadcrumb that displays a Toc generated page
            //var retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;"));
            tocTreeWin.retNode = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
            //itemRow = getFatherNode("TR", retNode);
            if (tocTreeWin.retNode==null) {
            tocTreeWin.retNode = tocTreeWin.getTOCItemFromName(tocTreeWin.BREADCRUMBLINK_TO_LOAD.replace(/ /g, "&nbsp;"));
			}
            itemRow = getFatherNode("TR", tocTreeWin.retNode);
        } else {
//alert('updateBreadcrumb - This case should never happen '+tocTreeWin.TOC_SELECTED_ITEM_ROW+' '+tocTreeWin.BREADCRUMBLINK_TO_LOAD);
        }
    } else {
//alert('updateBreadcrumb - Common case '+mainWin.document.location);
        // Common case
        itemRow = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
//if (itemRow!=null) { alert('updateBreadcrumb - itemRow.innerHTML = '+itemRow.innerHTML); }
//else {alert('updateBreadcrumb - itemRow is NULL');}
    }
//	var itemRow = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
  if(itemRow != null)
	{
		// --- build the breadcrumb from the TOC path
	//	DebugMessage("doc node: "+itemRow.TOC_NODE);
//alert('updateBreadcrumb - TOC_NODE = '+itemRow.TOC_NODE);
		
		var curNode = itemRow.TOC_NODE;
		var i = 1;
		//To calculate length of Breadcrumb String
		while (curNode != null && curNode.nodeName != "Root")
		{

			var nodeInfo = tocTreeWin.getNavNodeInfo(curNode);
//alert('Before nodeInfo.name'+nodeInfo.name+'  breadCrumbLength = '+breadCrumbLength);
			breadCrumbLength+= nodeInfo.name.length;
//alert('After  breadCrumbLength = '+breadCrumbLength);
			currentBreadCrumpNodeToTruncate[i] = nodeInfo.name;
			curNode = curNode.parentNode;
			i++;
		}
		var k = 1; var q = i-1;total_nodes=q;
		//breadcrumb length is greater than the frame to accomodate
		// truncate the nodes to display the breadcrumb
		while(breadCrumbLength>=maxLengthString)
		{
			nodeStrings[k] = truncateBreadCrumb(currentBreadCrumpNodeToTruncate[q],q,currentBreadCrumpNodeToTruncate.length);
			count++;
			breadCrumbLength = breadCrumbLength-currentBreadCrumpNodeToTruncate[q].length+nodeStrings[k].length;
			k++;q--;
			if(q<=0) break;		
		}
		while(breadCrumbLength > maxLengthString)
		{
			maxLengthString+=2;
		}
		//remaining nodes
		if(count<currentBreadCrumpNodeToTruncate.length-1)
		{
			for(var p = k; p <= currentBreadCrumpNodeToTruncate.length-1;p++)
			{
			nodeStrings[p] = currentBreadCrumpNodeToTruncate[q];
			q--;
			}
		}
		// increase the size of frame if required
		if(breadCrumbLength>linelength)
		{
		parent.parent.frames["RightFS"].document.getElementById("BreadCrumbFrameset").rows="40,*";
		}
		// test code
		curNode = itemRow.TOC_NODE;
		var j = nodeStrings.length-1;
		var n = j;
		while (curNode != null && curNode.nodeName != "Root")
		{
			//if it is a leaf node there should not be link displayed in the bread-crumb
			if (n==j)
			{
			var nodeInfo = tocTreeWin.getNavNodeInfo(curNode);
			var linkHTML = "";
			linkHTML += ""+nodeStrings[j]+"";
			breadcrumbHTML = breadcrumbHTML == null ? linkHTML : linkHTML+" | "+breadcrumbHTML;
			curNode = curNode.parentNode;
			j--;
//alert('updateBreadcrumb 1 - breadcrumbHTML '+breadcrumbHTML);
			}
		else
			{
			// not a leaf node 
			// display the links to the pages 
			//alert("name "+nodeInfo.name.replace("and"," "));
			
			var nodeInfo = tocTreeWin.getNavNodeInfo(curNode);
			var linkHTML = "<a alt="+nodeInfo.name+" class=";
			/*if (leafNode == 0)
			{
		   	  leafNode = 1;
              linkHTML += "BreadcrumbLeaf";
            }
            else*/
              linkHTML += "Breadcrumb";
			linkHTML += " title=\""+nodeInfo.name+"\"";
			
			if (nodeInfo.link != null)
			linkHTML+=" target='"+MAIN_FRAMENAME+"' href='../"+nodeInfo.link+"'";
			else
			linkHTML+=" target='"+MAIN_FRAMENAME+"' href='../CAADocQuickRefs/DSDocDefaultToc.htm'";

			linkHTML += ">"+nodeStrings[j]+"</a>";
			
			breadcrumbHTML = breadcrumbHTML == null ? linkHTML : linkHTML.replace("\\","").replace("\\","")+" | "+breadcrumbHTML.replace("\\","");
//alert('updateBreadcrumb 2 - breadcrumbHTML '+breadcrumbHTML);

			curNode = curNode.parentNode;
			j--;
			}
		}
	}
	// currentBreadCrumpNodeToTruncate = FirstBreadCrumbNode;
	// while ( breadCrumbLength >= maxFrameLength() )
	//   TruncateBreadCrumb( currentBreadCrumpNodeToTruncate );
	//   currentBreadCrumpNodeToTruncate = currentBreadCrumpNodeToTruncate++;

	if(breadcrumbHTML == null)
		// --- no parent (or page not found in TOC): display the document title
	//alert("title "+mainWin.document.title);
		breadcrumbHTML = "<a class=Breadcrumb href='#' title=\""+mainWin.document.title+"\">"+mainWin.document.title+"</a>";
			//alert(breadcrumbHTML);
			document.body.innerHTML = breadcrumbHTML;
}
/*
function updateBreadcrumb(mainWin)
{
	// --- this is a preliminary version based on analysing the URL...
	// --- in most cases, a document page URL is of the form: <root>/<productTag>_<brandTag>/<file>.htm
	var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
	var leafNode = 0;
	var breadcrumbHTML = null;
	var itemRow = tocTreeWin.getTOCItemFromURL(mainWin.document.location);
	if(itemRow != null)
	{
		// --- build the breadcrumb from the TOC path
	//	DebugMessage("doc node: "+itemRow.TOC_NODE);
		
		var curNode = itemRow.TOC_NODE.parentNode;
		while (curNode != null && curNode.nodeName != "Root")
		{
			var nodeInfo = tocTreeWin.getNavNodeInfo(curNode);
			var linkHTML = "<td nowrap><a class=";
			if (leafNode == 0)
			{
				leafNode = 1;
            linkHTML += "BreadcrumbLeaf";
         }
         else
            linkHTML += "Breadcrumb";
			linkHTML += " title=\""+nodeInfo.name+"\"";
			if (nodeInfo.link != null)
				linkHTML+=" target='"+MAIN_FRAMENAME+"' href='../"+nodeInfo.link+"'";
			linkHTML += ">"+nodeInfo.name+"</a></td>";
			
			breadcrumbHTML = breadcrumbHTML == null ? linkHTML+"</tr></table>" : linkHTML+"<td>|</td>"+breadcrumbHTML;
			curNode = curNode.parentNode;
		}
	}
	if(breadcrumbHTML == null)
		// --- no parent (or page not found in TOC): display the document title
		breadcrumbHTML = "<a class=Breadcrumb href='#' title=\""+mainWin.document.title+"\">"+mainWin.document.title+"</a></tr></table>";
	breadcrumbHTML = "<table cellspacing=0 cellpadding=0 style='margin: 0'><td>"+breadcrumbHTML;
	//breadcrumbHTML = "<div id=\"breadcrumbdiv\">" + breadcrumbHTML + "</div>";
	document.body.innerHTML = breadcrumbHTML;
}
*/

/*---------------------------------------------------------------- */
//returns the truncated nodes to display in breadcrumb
// LQA 27-10-06
// modified 31-10-06 for new specs
function truncateBreadCrumb(string1,index,limit)
{
	if((index==limit-1)||(index==1))
		return string1;
	else return "...";
}
function getBreadcrumbLink(evt) {
    if (IE) {
//    alert('getBreadcrumbLink '+ window.event.srcElement.href);
//    alert('getBreadcrumbLink '+ window.event.srcElement.innerHTML);
        var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
        tocTreeWin.BREADCRUMBLINK_TO_LOAD = window.event.srcElement.innerHTML;
        tocTreeWin.LINK_TO_LOAD = null;
    } else if (NS7) {
        evt = (evt ? evt : window.event);
//        alert('getLink '+ evt.target);
//        alert('getLink '+ evt.target.innerHTML);
        var tocTreeWin = parent.parent.frames["LeftFS"].frames["TocTree"];
        tocTreeWin.BREADCRUMBLINK_TO_LOAD = evt.target.innerHTML;
        tocTreeWin.LINK_TO_LOAD = null;
    } else {
        alert('Unsupported web browser\n' +
        'To browse the CAA Encyclopedia, please use:\n' +
        '. Internet Explorer 7 with Windows\n' +
        '. FireFox 2.0 with AIX'
         );
    }
}
