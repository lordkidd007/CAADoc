
var MAIN_FRAMENAME = "mainsm";
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
} else if (navigator.appName == "Microsoft Internet Explorer")
{
  IE = true;
} else {
  alert('Unsupported browser '+navigator.appName);
}
//-------------------------------------------------------------------	
// Create a Toc in a html file
//-------------------------------------------------------------------	
function createToc(isH3) {
    var docBody = document.body;
//-    var tocList = document.getElementById("toc");

    var tabBody = document.getElementById("body");
    var nodes = null;
    if (tabBody != null) {
      nodes = tabBody;
//alert('table');
    } else {
      nodes = docBody;
//alert('body');
    }

    var tocDiv = document.getElementById("toc");
    var tocListItem = null;
    var tocSubList = null;
//    alert('h2List.length = '+h2List.length);
    var i=0;
    var subList = "false";
    var isH2 = "false";


    var tocList = document.createElement("UL");
	//tocList.className = "toc";

    // R208 replaces previous toc build based upon H2 tags having the body
    // element as parent. Any H2, and H3, are processed whatever their locations
    // in the DOM, that is, for instance, even if their are located in a table. 
    var h2List = document.getElementsByTagName("h2");
    // R215: correct case where there is an abstract and no other H2 (valid) but
    // may not generate anymore a toc anymore in the case where there is no
    // abstract & only one H2 (considered not valid)
    //if (h2List.length > 0) {
    if (h2List.length > 1) {
    
    var parent = h2List[1].parentNode;
		while (i<parent.childNodes.length) {
			if (parent.childNodes[i].tagName=="H2") {
				subList = "false";
				isH2 = "true";
				//var tab1 = new Array(2);
				//var tab = extractData(parent.childNodes[i].innerHTML);
				var tab = extractData(parent.childNodes[i]);
				//    alert('tab[0] = '+tab[0]+'tab[1] = '+tab[1]);

				tocListItem = document.createElement("LI");
				var tocListItemA = document.createElement("A");
				tocListItemA.innerHTML = tab[0];
				tocListItemA.href = "#"+tab[1];
				tocListItemA.target = MAIN_FRAMENAME;
				tocListItem.appendChild(tocListItemA);
				tocList.appendChild(tocListItem);
			} else if (parent.childNodes[i].tagName=="H3" && isH2=="true" && !isH3) {
	//alert('H3 - '+docBody.childNodes[i].innerHTML);
				if(subList=="false") {
					tocSubList = document.createElement("UL");
					tocListItem.appendChild(tocSubList);
				}
				//var tab = extractData(parent.childNodes[i].innerHTML);
				var tab = extractData(parent.childNodes[i]);
				var subListItem = document.createElement("LI");
				var subListItemA = document.createElement("A");
				subListItemA.innerHTML = tab[0];
				subListItemA.href = "#"+tab[1];
				subListItemA.target = MAIN_FRAMENAME;
				subListItem.appendChild(subListItemA);
				tocSubList.appendChild(subListItem);
				subList = "true";
			}
			i++;
			continue;
        }
	}
    tocDiv.appendChild(tocList);
}

//function extractData(textToScan) {
function extractData(nodeToScan) {
	//alert('textContent = '+nodeToScan.innerText);
    // nodeToScan is a H2 or H3
	// extracts the text in data[0] and the anchor in data[1]
    var data;
	data = new Array(2);
	if (IE) {
		data[0] = nodeToScan.innerText;
	} else if (NS7) {
		data[0] = nodeToScan.textContent;
	}
	//the A tag should be unique in H2 or H3
	data[1] = nodeToScan.getElementsByTagName("a")[0].name;
	
    return data;
}

