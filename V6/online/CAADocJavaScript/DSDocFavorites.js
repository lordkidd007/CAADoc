var MAIN_FRAMENAME = "mainsm";
var favoritesWindow = null;
var htmlFile = "";
var Chrome = window.chrome;
if (IE)
	htmlFile = "CAADocJavascript/CAADocIEAddress.htm";
else if (Chrome)
	htmlFile = "CAADocJavascript/CAADocChrAddress.htm";
else
	htmlFile = "CAADocJavascript/CAADocMozAddress.htm";
var urlToLoad = "";
var urlTitle = "";
/*
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
*/
//-------------------------------------------------------------------
// Add the current page to the favorites (IE) or bookmarks (Firefox)
//-------------------------------------------------------------------
function addToFavorites() {

	var mainWin = parent.parent.frames["RightFS"].frames[MAIN_FRAMENAME];

	// Retrieve the home page, and possibly remove the part after the question matk
	var rootUrl = parent.parent.document.URL;
	//alert("rootUrl = "+rootUrl);
	var rootTab = rootUrl.split(/\?/);
	var homePage = rootTab[0];
	homePage = homePage.replace(/\\/g, "/");
	//alert("homePage = "+homePage);

	// Retrieve the loaded page, possibly removing the part after the question mark coming from the search
	var urlFileFull = mainWin.document.URL;
	var urlFile = urlFileFull.split(/\?/)[0];
	urlFile = urlFile.replace(/\\/g, "/");
	//alert('urlFile = '+urlFile);
    var exp1=new RegExp("generated\/","g");
    var exp2=new RegExp("docs\/","g");
	var urlTab = "";
	var url2 = "";
	if (urlFile.match(exp1)) {
		var loc = urlFile.search("generated");
		url2 = "../"+urlFile.substring(loc, urlFile.length);
	} else if (urlFile.match(exp2)) {
		var loc = urlFile.search("docs/");
		url2 = "../"+urlFile.substring(loc, urlFile.length);
	} else {
		// Split the page url to keep only the module and the file
		var urlTab = urlFile.split(/\|=|&|\//g);
		url2 = urlTab[urlTab.length-2]+"/"+urlTab[urlTab.length-1];
	}
	// Build the loaded page url with the show parameter
	urlToLoad = homePage+"?show="+url2;
	urlTitle = mainWin.document.title;

	//alert("urlToLoad = "+urlToLoad+"\nurlTitle  = "+urlTitle);

	if (urlFile.startsWith("http")) {
		//http or https protocol.
		//This url is passed to the appropriate API managing favorites/bookmarks

		if (IE) {
			//window.external.AddFavorite(location.href, document.title);
			window.external.AddFavorite(urlToLoad, urlTitle);
			//window.document.location.href = urlToLoad;
			//window.open(urlToLoad, "_self");
		} else if (Chrome) {
			createFavoritesWindow();
		} else {
			if(window.sidebar)
				window.sidebar.addPanel(urlTitle,urlToLoad,"");
		}
	} else {  //file protocol
		//Security rules prevent from accessing the API managing favorites/bookmarks
		//The end user should manually add the favorite/bookmark using the values
		//displayed in the dialog box
		createFavoritesWindow();
		if (IE)
			createFavoritesDoc();
	}
}

//-------------------------------------------------------------------
// Create the window to display favorites/bookmarks data
//-------------------------------------------------------------------
function createFavoritesWindow() {
	if (favoritesWindow == null || favoritesWindow.closed) {
		favoritesWindow = window.open(htmlFile, '_blank', 'toolbar=no,resizable=yes,height=325,width=800,scrollbars=yes,screenX=5,screenY=5,top=5,left=5');
		if (!IE) // Set a callback for Firefox
			favoritesWindow.onload = createFavoritesDoc;
	}
	else
		favoritesWindow.focus();
}

//-------------------------------------------------------------------
// Create the window contents
//-------------------------------------------------------------------
function createFavoritesDoc() {
	var favoritesDoc = favoritesWindow.document;
	var titleDiv = favoritesDoc.getElementById('title');
	var titlePar = favoritesDoc.createElement("P");
	titlePar.innerHTML = "<strong>"+urlTitle+"</strong>";
	titleDiv.appendChild(titlePar);

	var urlDiv = favoritesDoc.getElementById('url');
	var urlPar = favoritesDoc.createElement("P");
	urlPar.innerHTML = "<strong>"+urlToLoad+"</strong>";
	urlDiv.appendChild(urlPar);
}
