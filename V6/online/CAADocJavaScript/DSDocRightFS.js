// =======================================================================
// === RightFS Functions
// === Copyright © Dassault Systemes / Pierre SMEYERS (Jan 30 2006)
// =======================================================================
// === This Javascript Library contains functions used by the RightFS
// === frameset of the doc portal.
// === This frameset contains the breadcrumb frame and the main doc frame.
// === It is in charge of:
// ===  - restoring the required document passed with argument "show",
// ===  - handling onload event from the main doc frame, and triggering
// ===    the breadcrumb and the synchronize icon update.
// =======================================================================
var DSApplication = "";
var DSApplicationHomeUrl = "";
var hide = "no";
/**
 * Dynamically builds the right frameset.
 * Looks for a document relative url in the parameters, and restores it in the main doc frame.
 * Default starting document is "Home.htm"
 */
function buildRightFS()
{
//	DebugMessage("creating right FrameSet...");
	// --- read doc url from url arguments
	var docUrl = "CAADocQuickRefs/DSDocHome.htm";
	var args = extractParamsFromLocation(parent.parent.location);
	//var args = extractParamsFromLocation(parent.location);
	//alert("doc in "+parent.parent.location.href+": "+args["show"]);

	if(args["show"] != null)
		docUrl = args["show"];
	else
	{
		var args2 = extractParamsFromLocation(parent.location);
		//alert("1 doc in "+parent.location.href+": "+args2["show"]);
		if(args2["show"] != null)
			docUrl = args2["show"];
		else
		{
			var args3 = extractParamsFromLocation(location);
			//alert("2 doc in "+location.href+": "+args3["show"]);
			if(args3["show"] != null)
				docUrl = args3["show"];
      if (args3["application"] != null)
        DSApplication = args3["application"];
        DSApplicationHomeUrl = docUrl;
	      //alert ('DSApplication = '+DSApplication);
		}
	}
	if (args["hideframe"] != null)
		hide = args["hideframe"];
	else
	{
		var args2 = extractParamsFromLocation(parent.location);
		if(args2["hideframe"] != null)
			hide = args2["hideframe"];
		else
		{
			var args3 = extractParamsFromLocation(location);
			if(args3["hideframe"] != null)
				hide = args3["hideframe"];
		}
	}
	//alert('hide = '+hide);
	if (hide == "yes") {
		var mainFS  = parent.document.getElementById("Main");
		mainFS.rows = "0,*";
		var splitFS = parent.document.getElementById("SplitFS");
		splitFS.cols = "0,*";
	}
	
	if (docUrl.match("online/"))
		docUrl = docUrl.replace(/^online\//,"");
	else if (docUrl.match("generated/"))
		docUrl = docUrl.replace(/^generated/,"../generated");
	else if (docUrl.match("docs/"))
		docUrl = docUrl.replace(/^docs/,"../docs");

	if(args["ElemID"] != null) // Add anchor passed using the hash character
		docUrl = docUrl + args["ElemID"];
// Opening the frameset in an instruction and closing it in another one causes an error with Firefox in https
// about speculative page loading. The tag must be opened and closed in the same instruction.
//	document.writeln('<frameset id ="BreadCrumbFrameset" rows="20,*" framespacing="0" border="0" frameborder="no">');
//	document.writeln('<frame name="Breadcrumb" src="CAADocQuickRefs/DSDocBreadcrumb.htm" scrolling="no" id="BreadCrumbFrame" noresize></frame>');
//	document.writeln('<frame name="mainsm" onload="onPageChanged(this.contentWindow)" src="'+docUrl+'"></frame>');
//	document.writeln('</frameset>');
	document.writeln('<frameset id ="BreadCrumbFrameset" rows="20,*" framespacing="0" border="0" frameborder="no">\n'+
	'<frame name="Breadcrumb" src="CAADocQuickRefs/DSDocBreadcrumb.htm" scrolling="no" id="BreadCrumbFrame" noresize></frame>\n'+
	'<frame name="mainsm" onload="onPageChanged(this.contentWindow)" src="'+docUrl+'"></frame>\n'+
	'</frameset>');

}
/**
 * onLoad Event Handler from the main document frame.
 * This function triggers the breadcrumb and TOC update.
 */
function onPageChanged(win)
{
//	DebugMessage("Page Changed On: "+win.nodeName+": "+win.document.location);
// Switch update TOC and breadcrumb to put TOC first so the tree is up-to-date before
// updating the breadcrumb that relies on it
	
	// --- update TOC
// Removed PSR - Replaced by direct access to the tree with the content of the
// updateSyncToc function, since there is no toc bar synchronization any longer
//	var tocBarWin = win.parent.parent.frames["LeftFS"].frames["TocBar"];
//	if(isWindowLoaded(tocBarWin) && tocBarWin.updateSyncToc)
//		tocBarWin.updateSyncToc(win);

	var tocTreeWin = win.parent.parent.frames["LeftFS"].frames["TocTree"];
	if(isWindowLoaded(tocTreeWin) && tocTreeWin.selectCurrentFile) {
    tocTreeWin.selectCurrentFile();
    tocTreeWin.clearFlag();
  }

	// --- update breadcrumb
	var breadcrumbWin = win.parent.frames["Breadcrumb"];
	if(isWindowLoaded(breadcrumbWin) && breadcrumbWin.updateBreadcrumb)
		breadcrumbWin.updateBreadcrumb(win);

}
