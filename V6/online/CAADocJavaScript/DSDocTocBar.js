// =======================================================================
// === TOC Bar Functions
// === Copyright © Dassault Systemes 2006
// === creation Pierre SMEYERS (Jan 30 2006)
// === update Jerome FAUGERAS (Mar 15 2006)
// === update Jerome FAUGERAS (Mar 30 2006)
// === update Jerome FAUGERAS (Jul 25 2006)
// === update Louis MANUKONDA (Sep 14 2006)
// === update Jerome FAUGERAS (Jun 08 2007)
// === update Jerome FAUGERAS (Jul 13 2007)
// === update Santanu BISWAS (Jan 10 2008) : remove the Synchronize button
// === update Santanu BISWAS (Jan 31 2008) : solve multihighlight problem
// === update Santanu BISWAS (Mar 06 2008) : solve synchronization problem
// =======================================================================
// === This Javascript Library contains functions used by the TOCBar frame
// === of the documentation portal.
// === This frame has 2 icons:
// ===  - a first one to collapse/expand the left side of the doc portal frame,
// ===  - the second one allows synchronizing the TOC tree with the current
// ===    displayed doc page. This icon only appears when the current page
// ===    does not match the current TOC tree selection. Pressing this icon
// ===    expands and selects the corresponding path.
// =======================================================================

// -----------------------------------------------------------------------
/**
 */
function firstResize()
{
  try
  {
  }
  catch (e)
  {
    alert(e.message);return;
  }
}

// -----------------------------------------------------------------------
/**
 * A new document was loaded in the main frame. Update the "synchronize" icon (show/hide).
 * This function is called every time the main frame loads a new page (see 'RightFS.htm')
 */
// Not needed any longer - Synchronization command replaced with tree automatic synchronazition
/*
function updateSyncToc(mainWin)
{
  // --- check if the current page is the current selection in TOC
  var syncLink = document.getElementById("SyncToc");
  var tocTreeWin = parent.frames["TocTree"];
  //hfj for eleminiting sync button.
  //syncLink.className = tocTreeWin.isCurrentFileSelected()? "SyncTocOff" : "SyncToc";
  //syncLink.className = tocTreeWin.isCurrentFileSelected()? "SyncTocOff" : "SyncTocOff";
  tocTreeWin.selectCurrentFile();
  tocTreeWin.clearFlag();
}
*/
// -----------------------------------------------------------------------
/**
 * onclick synchronize icon event handler
 * Synchronizes the TOC path with the current page (expands and selects the corresponding path).
 */
// Not needed any longer - Synchronization command replaced with tree automatic synchronazition
/*
function syncToc()
{
  var tocTreeWin = parent.frames["TocTree"];
  tocTreeWin.selectCurrentFile();
    
  // --- 2: hide synctoc icon
  var syncLink = document.getElementById("SyncToc");
  syncLink.className = "SyncTocOff";
}
*/
// -----------------------------------------------------------------------
/**
 * Collapses the left side.
 */
function collapseLeftSide(toResize)
{
  try
  {
    // --- 1: resize window
    if (toResize == 1) // online
    {
      if (self.outerHeight) // all except Explorer
      {
        w = 565;
        h = self.outerHeight;
        top.resizeTo(w,h);
      }
      else if (document.documentElement && document.documentElement.clientHeight) // Explorer 6 Strict Mode
      {
        w = document.documentElement.clientWidth;
        top.resizeBy(15-w,0);
      }
      else if (document.body) // Explorer
      {
        w = document.body.clientWidth;
        top.resizeBy(15-w,0);
      }
    }
   
    // --- 2: change split frameset
    var splitFS = parent.parent.document.getElementById("SplitFS");
//    splitFS.cols = "10,*";
    splitFS.cols = "7,*";
    // Check whether IE or mozilla
    if (document.all) // for IE
    {
      splitFS.noResize = true;
    }
    else // for Mozilla
    {
      splitFS.setAttribute("noresize", true);
    }

    /*
    // --- 3: change top frameset
    var splitTopFS = parent.parent.frames["TopFS"].document.getElementById("TopSplitFS");
    splitTopFS.cols = "71,*,173,28";
    */

    // --- 4: change toc frameset
    var tocFS = parent.document.getElementById("TocFS");
    tocFS.rows = "100%,0";
    
    // --- 5: change div class for toc
    var div = document.getElementById("colExpDiv");
    div.className = "TocClosed";

    /*
    // --- 6: change div class for search
    var search_frame = top.frames["TopFS"].frames["Search"];
    var search_doc = search_frame.document;
    var body_var = search_doc.body;
    body_var.className = "QuickSearch2";
    var divs = search_frame.document.getElementById("SearchSubmit");
    if (divs.className == "SearchSubmit")
        divs.className = "SearchSubmit2";
        */
  }
  catch (e)
  {
    alert(e.message);return;
  }
}

// -----------------------------------------------------------------------
/**
 * Expands the left side.
 */
function expandLeftSide(toResize)
{
  try
  {
    // --- 1: change split frameset
    var splitFS = parent.parent.document.getElementById("SplitFS");
    if (toResize == 1) // old online paradigm
      splitFS.cols = "*,520";
    else // CAA and new online paradigm 1/3 2/3
      splitFS.cols = "200,*";
        
    if(document.all) // for IE
    {
      splitFS.noResize = false;
    }
    else // for Mozilla
    {
      splitFS.removeAttribute("noresize");
    }
    
    // --- 2: change TOC frameset
    var tocFS = parent.document.getElementById("TocFS");
//    tocFS.rows = "15,*";
    tocFS.rows = "23,*";
    
    /*
    // --- 3: change top frameset
    var splitTopFS = parent.parent.frames["TopFS"].document.getElementById("TopSplitFS");
    splitTopFS.cols = "71,*,283,28";
    */

    // --- 4.1: change div class for toc
    var div = document.getElementById("colExpDiv");
    div.className = "TocOpened";
    
    /*    
    // --- 4.2: change div class for search
    var search_frame = parent.parent.frames["TopFS"].frames["Search"];
    var search_doc = search_frame.document;
    var body_var = search_doc.body;
    body_var.className = "QuickSearch";
    var divs = search_frame.document.getElementById("SearchSubmit");
    if (divs.className == "SearchSubmit2")
        divs.className = "SearchSubmit";
        */
        
    // --- 5: resize window
    if (toResize == 1)
    {
      if (self.outerHeight) // all except Explorer
      {
        w = 740;
        h = self.outerHeight;
        top.resizeTo(w,h);
      }
      else if (document.documentElement && document.documentElement.clientHeight) // Explorer 6 Strict Mode
      {
        w = document.documentElement.clientWidth;
        top.resizeBy(183-w,0);
      }
      else if (document.body) // other Explorers
      {
        w = document.body.clientWidth;
        top.resizeBy(183-w,0);
      }
    }
  }
  catch (e)
  {
    alert(e.message);return;
  }
}
