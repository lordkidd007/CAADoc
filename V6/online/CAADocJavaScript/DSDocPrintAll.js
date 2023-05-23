// =======================================================================
// === PrintAll Function
// === Copyright 2006 © Dassault Systemes / Louis MANUKONDA
// =======================================================================
// === To be used in conjunction with :
// === - LoadDiv.js
// === - dsprint.css
// === - CATIAbnr.htm
// === Test to perform when delivering one of these files :
// === - open a page with links to other products
// === - print preview : check every link, images, page breaks, cuts
// =======================================================================
// HISTORY :
// 2006 08 31 LQA Enable use with new frame infrastructure
// =======================================================================

// 4th August 2009:
// VD1:   IR B0659980.   
//        some pages display twice when we open print-preview
//        Fix: Modified code to check duplicate links.
//        Case 1: Installation on remote system (file:// and not http://)

// 21th Apr. 2010:
// PH7:   IR-047298.   
//        description: R209 documentation: a panel with "Print page" appears when printing a documentation 
//        Fix: "Print page" alert message will appear only while printing Glossary search result page not for other html pages.

// 10th Feb 2011
// V2E:   IR 052383
//        Description: in IE some images are not printed when printing documentation.Path is not correct for images.
//        Fix: Check first path for images is relative or absolute. if path is absolute then dont append path otherwise append the absolute path to original path.   

// 11th Feb 2011
// V2E:   IR-047298
//        Description: a panel with "Print page" appears when printing Glossary search result page.
//        Fix: Introduced delay while printing the Glossary search result page. 	
// 07th Apr 2011
// V2E :  IR-095176
//        Description : Videos are not visible on print preview
//        Fix : empty FlashVars value from object tag is replaced with FlashVars value from Embed tag 
// 11th Apr 2011
// V2E :  IR-098241
//        Description : Glossary window to be printed is K.O.
//        Fix : Only current page is displayed while printing the glossary result page instead of all result pages
/*---------------------------------------------------------------- */
function removeNode(n)
{
  if (n.hasChildNodes())
  {
    for (var i=0; i<n.childNodes.length; i++)
      n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);
  }
  n.parentNode.removeChild(n);
}

/*---------------------------------------------------------------- */
function loadDiv(the_iframe,the_div)
{
  var FrameBody = document.getElementById(the_iframe).contentWindow.document.body;
  do
  {
    var a = FrameBody.getElementsByTagName("A");
    var an = a.length;
    for (var i=0; i<a.length; i++)
      removeNode(a[i]);
  } while (an>0);
  var FrameSource = FrameBody.innerHTML;
  var Link = document.getElementById(the_iframe).src;
  var relPath_Link = Link.substring(0,Link.lastIndexOf('/')+1);
  FrameSource = FrameSource.replace(/src=\"/g,'src=\"'+relPath_Link);
  document.getElementById(the_div).innerHTML = FrameSource;
  document.printedpages = document.printedpages+1;
  if (document.npages <= document.printedpages) {window.focus();window.print();} 
}

/*---------------------------------------------------------------- */
function printAllPages()
{ 
  try
  {
	 var x = new Array(10);
    var link="";
    var index=0;
    var found=0;
    var IFrameSource="";
    var allLinks ="";
    var docTitle ="";
    var contentPageLink ="";
    var printframe;
    var hash;
    var mainPageLink;
    
    if (parent.frames['main'])
    {
      if (parent.frames['main'].frames['mainsm']){
			    printframe = parent.frames['main'].frames['mainsm']; 
			
		}
		else{
			printframe = parent.frames['main'];
			
			}
    }
    else
    {
      if (parent.frames['DS_SEARCH']){
			printframe=parent.frames['DS_SEARCH'];
			
	  }
      else
      {
        if (parent.parent.frames['RightFS'])
        {
          if (parent.parent.frames['RightFS'].frames['mainsm']){
            printframe=parent.parent.frames['RightFS'].frames['mainsm'];
		  }
		  else
            return;
        }
      }
    }
    mainPageLink = document.URL;
	
    mainPageLink=mainPageLink.replace(/\\/g,"/");
    printframe.focus();
    allLinks = printframe.document.getElementsByTagName('a');
	
    docTitle = printframe.document.title;
	
	
    contentPageLink = printframe.document.URL;
	contentPageLink = contentPageLink.replace("&searchType=glossary","");
	hash = contentPageLink.indexOf("#");
    if (hash>0)
		contentPageLink = contentPageLink.substring(0,hash);
    if (contentPageLink.match("//")&&(!contentPageLink.match("///")))
      contentPageLink = contentPageLink.replace(/\/\//,"///");
	 contentPageLink = contentPageLink.replace(/\\/g,"/");
    if (contentPageLink.match("http:///"))
      contentPageLink = contentPageLink.replace(/http:\/\/\//,"http://");

	// PH7:   IR-047298.
	// to take page link in lower case letter
	var lowercontentPageLink =  contentPageLink.toLowerCase();
	// to find position of "glossary text in URL"
	var pos = lowercontentPageLink.indexOf("glossary");
	// PH7:   IR-047298.
	// V2E :  IR-098241-- Defined FinalSource
	var FinalSource="";
    x[index] = contentPageLink;
    // V2E :  IR-098241
	//Get the current page Search link for glossary only for normal search it is not 
	//       required to print result page(Non glossary result page)
	//       For glossary it is required to print glossary result page.
	if (lowercontentPageLink.indexOf("dsdocsearch") == -1) {
		
			FinalSource = getIFrameSource(index, contentPageLink, "true");
		    index++;
	}
	
    for (var i=0; i<allLinks.length; i++)
    {
      var linksText = "" + allLinks[i].href;
      var htmlTest = linksText.substring(linksText.lastIndexOf("."),linksText.lastIndexOf(".")+4);
      var lowerLinksText = linksText.toLowerCase();
	  if ((linksText.length <= 0)||(htmlTest!=".htm"))
        continue;
	// V2E :  IR-098241
    // V2E : To eliminate the the links which points to another search by domain,brand and product
 	  if(lowerLinksText.indexOf("dom")!= -1 && lowerLinksText.indexOf("brand")!= -1 && lowerLinksText.indexOf("prod")!= -1 && lowerLinksText.indexOf("#") == -1)
	    continue;
	// V2E :  IR-098241
    // V2E : To eliminate the links which points the another search result page(Non Glossary Search)
	  if (lowerLinksText.indexOf("dsdocsearch") != -1)
		{
		  // V2E : Search directed from "more glossary result" for glossary search 
		  if(lowerLinksText.indexOf("gloss") == -1 || lowerLinksText.indexOf("#")==-1) 
		    continue;
		}
	// V2E :  IR-098241
	// V2E : Glossary search from see more result(1,2,3..) page when searched on glossary.
    if(lowerLinksText.indexOf("dsdocglossary") != -1)
		{
			continue; 
		}
	  hash = linksText.indexOf("#");
      if (hash>0)
        linksText = linksText.substring(0,hash);
        
      found = 0;
      for (var j=0; j<index; j++)
      {
        // VD1:   IR B0659980.
        // Case 1: Installation on remote system (file:// and not http://)
        if (x[j].replace('/////','//')==linksText)
        {
          found = 1;
          break;
        }
        // VD1:   IR B0659980.
      }
      if (found==0)
      {
        x[index] = linksText;
        IFrameSource = getIFrameSource(index,linksText);
        FinalSource = FinalSource+IFrameSource;
        index++;
      }
    }
    
    // computing the media suffix to access style sheet
    //-------------------------------------------------
    var printCss = "";
    if (parent.parent.TopFS) // new frame phase II
    {
      printCss = "CAADocStyleSheets/DSDocPrint.css";
    }
    else // old frame phase I
    {
      tempSuffix = top.common_banner.location.href.toString();
      locMediaSuffix = tempSuffix.substring(tempSuffix.lastIndexOf("_"), tempSuffix.lastIndexOf("_") + 3);
      printCss = "..\\icons" + locMediaSuffix + "\\dsprint.css";
    }

		// V2E : IR-047298	    
	var loadDivScript="function loadDiv(the_iframe,the_div,last)";
    loadDivScript+="{";
	loadDivScript += "loadDiv1(the_iframe,the_div,last); ";
	// V2E : Call to function which sets appropriate delay
	loadDivScript += "  }";
	// V2E : IR-047298
	// Function which introduce appropriate delay and calls function loadDiv2 to print document
	loadDivScript += " function loadDiv1(the_iframe,the_div,last) ";
	loadDivScript += " { ";
	loadDivScript += " var delay; ";
	loadDivScript += " delay = 3000;"; // V2E : Delay for for all

	loadDivScript += " setTimeout(function (){loadDiv2(the_iframe,the_div,last)},delay); ";
	loadDivScript += " } ";
	loadDivScript += " function loadDiv2(the_iframe,the_div,last) ";
	loadDivScript += " { ";
	loadDivScript+=" var FrameBody = document.getElementById(the_iframe).contentWindow.document.body;";

	loadDivScript += " var test = FrameBody.innerHTML ; ";
	loadDivScript += " var test = test.toLowerCase(); ";
	loadDivScript += " if((test.indexOf(\"search in progress\") != -1))";

	loadDivScript += " setTimeout(function (){loadPage(FrameBody,the_iframe,the_div,last)},20);";
	loadDivScript += " else ";
	loadDivScript += " loadPage(FrameBody,the_iframe,the_div,last);";
	loadDivScript += " } ";

	// V2E :  IR-098241
	// Function which will be called recursively until page is loaded
	loadDivScript += " function loadPage(FrameBody,the_iframe,the_div,last)";
	loadDivScript += " { ";

	loadDivScript += " var test = FrameBody.innerHTML ; ";
	loadDivScript += " var test = test.toLowerCase(); ";
	loadDivScript += " if((test.indexOf(\"search in progress\") != -1))";
	loadDivScript += " setTimeout(function (){loadPage(FrameBody,the_iframe,the_div,last)},20); ";
	loadDivScript += " else ";
	loadDivScript += " { ";
	loadDivScript+="  do";
	loadDivScript+="  {";
	loadDivScript+="    var a = FrameBody.getElementsByTagName('A');";
	loadDivScript+="    var test = FrameBody.innerHTML; ";
	loadDivScript+="    var an = a.length;";
	loadDivScript+="    for (var i=0; i<a.length; i++)";
	loadDivScript+="      removeNode(a[i]);";
	loadDivScript+="  } while (an>0);";
	loadDivScript+="  do";
	loadDivScript+="  {";
	loadDivScript+="    var b = FrameBody.getElementsByTagName('INPUT');";
	loadDivScript+="    var bn = b.length;";
	loadDivScript+="    for (var j=0; j<b.length; j++)";
	loadDivScript+="      removeInputNode(b[i]);";
	loadDivScript+="  } while (bn>0);";
    // V2E :  IR-098241
	// V2E : Removes the Search option(product,domain..) from print page
	loadDivScript+="  do";
    loadDivScript+="  {";
    loadDivScript+="    var b = FrameBody.getElementsByTagName('FIELDSET');";
    loadDivScript+="    var bn = b.length;";
    loadDivScript+="    for (var j=0; j<b.length; j++)";
    loadDivScript+="      removeInputNode(b[i]);";
    loadDivScript+="  } while (bn>0);";
    // V2E :  IR-098241
	// V2E : Removes the Legends and corresponding images
    loadDivScript+="    var b = FrameBody.getElementsByTagName('div');";
    loadDivScript+="    for (var j=0; j<b.length; j++)";
	loadDivScript+="    {";
    loadDivScript+="      if (b[j].id == 'dsdocsearch_legend')";
    loadDivScript+="         b[j].parentNode.removeChild(b[j]);";
	loadDivScript+="    }";

	
	loadDivScript+="  var FrameSource = FrameBody.innerHTML;";
	// V2E : Videos are not shown on print preview.
	// replace csconfig file path ../ with its absolute path
	loadDivScript+="  var relPath = document.location.href;";
	loadDivScript+="  relPath = relPath.substring(0,relPath.lastIndexOf('/')+1);";
	loadDivScript+="  FrameSource = FrameSource.replace(/csConfigFile=..\\//g,'csConfigFile='+relPath );";
	loadDivScript+="  FrameSource = FrameSource.replace(/value=\\\"..\\//g,'value=\"'+relPath );";	
	// V2E : For IE sometimes all tags are in uppercase 
	loadDivScript+="  FrameSource = FrameSource.replace(/VALUE=\\\"..\\//g,'VALUE=\"'+relPath );";
    loadDivScript+="  var Link = document.getElementById(the_iframe).src;";
    loadDivScript+="  var relPath_Link = Link.substring(0,Link.lastIndexOf('/')+1);";

	// V2E : IR-052383
	// Get the path from src if it is relative then append the path (relPath_Link)  
	loadDivScript+=" var startIndex = FrameSource.indexOf('src=\"');";
	loadDivScript+=" var endIndex = FrameSource.indexOf('\"',startIndex+7);";
	loadDivScript+=" var srcPath = FrameSource.substring(startIndex,endIndex);";                   
	// V2E : IR-052383 
	// Check if path is absolute or relative
	loadDivScript+=" if(srcPath.indexOf(':')==-1)";
    loadDivScript+="  FrameSource = FrameSource.replace(/src=\"/g,'src=\"'+relPath_Link);";
    // V2E : IR-095176    
    // empty FlashVars value is replaced with its appropriate value from embed tags FlashVars	
	loadDivScript += " var lowernewText = FrameSource.toLowerCase(); \n" ;  	
	loadDivScript += " var startIndex = 0; \n" ;
	loadDivScript += " var endIndex = 0; \n" ;
	loadDivScript += ' var replaceString ="\\"FlashVars\\" value="; ';
    // V2E : IR-095176 Get The start and End indexes of flashvar value  	
	loadDivScript += " startIndex=lowernewText.indexOf(\"flashvars\"); \n" ;  	
	loadDivScript += " startIndex=lowernewText.indexOf(\"flashvars\",startIndex+1); \n" ;  	
	loadDivScript += " startIndex = FrameSource.indexOf('\"',startIndex); \n" ;  	
	loadDivScript += " endIndex = FrameSource.indexOf('\"',startIndex+1); \n" ;  	
    // V2E : IR-095176 Get the Value of flashvars	
	loadDivScript += " var flashValue= FrameSource.substring(startIndex,endIndex+1); \n" ;	
	loadDivScript += " replaceString = replaceString + flashValue;";     	
    // V2E : IR-095176 Replace empty FlashVars
	loadDivScript += " FrameSource = FrameSource.replace('\\\"FlashVars\\\" VALUE=\\\"\\\"',replaceString); \n" ;	
	// V2E :  IR-098241
	// V2E : Replace filter result by Glossary Results
	loadDivScript += " FrameSource = FrameSource.replace('Filter results by:','Glossary Results : '); " ;	
	
	loadDivScript+="  document.getElementById(the_div).innerHTML = FrameSource;"
    loadDivScript+="  document.printedpages = document.printedpages+1;";
    loadDivScript+="  if (document.npages <= document.printedpages) {window.focus();window.print();} ";
    loadDivScript+="}";

	loadDivScript+=" } ";
    loadDivScript+="function removeNode(n)";
    loadDivScript+="{";
    loadDivScript+="  if (n.hasChildNodes())";
    loadDivScript+="  {";
    loadDivScript+="    for (var i=0; i<n.childNodes.length; i++)";
    loadDivScript+="      n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);";
    loadDivScript+="  }";
    loadDivScript+="  n.parentNode.removeChild(n);";
    loadDivScript+="}";
	
    loadDivScript+="function removeInputNode(m)";
    loadDivScript+="{";
    loadDivScript+="  m.parentNode.removeChild(m);";
    loadDivScript+="}";
	
	

    var scriptSrcLink = mainPageLink.substring(0,mainPageLink.lastIndexOf('/')+1);
    var npagesscript = "<scr"+"ipt language='Javascript'>document.printedpages=0; document.npages="+index+"</scr"+"ipt>\n";
    TheNewWin = window.open('','printFrame','height=510,width=700,toolbar=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes');
    TheNewWin.document.open();
    TheNewWin.document.write("<html><head><title>"+docTitle+"</title>");
    TheNewWin.document.write("<link rel='stylesheet' href='"+printCss+"' type='text/css' />");
    TheNewWin.document.write("<scr"+"ipt language='Javascript' >"+loadDivScript+"</scr"+"ipt>"+npagesscript);
    TheNewWin.document.write("</head><body>"+FinalSource+"</body></html>");
    TheNewWin.document.close();
  } catch (e) {alert(e.message);return;}
}

/*---------------------------------------------------------------- */
function getIFrameSource(index,link,last)
{
  var ifid = "iframe_"+index;
  var divid = "div_"+index;
  var framesrc = "";
 
  if (index != 0)
    framesrc += "<div class='pbreak'></div>";
  framesrc += "<IFRAME onLoad='loadDiv(\""+ifid+"\",\""+divid+"\",\""+last+"\");' src='"+link+"' id='"+ifid+"' WIDTH='0' HEIGHT='0' frameborder='0' SCROLLING='NO'></IFRAME><div id='"+divid+"'></div>"; 
  return framesrc;
}
