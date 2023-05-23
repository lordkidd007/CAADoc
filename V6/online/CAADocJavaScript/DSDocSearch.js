// =======================================================================
// === Search and Glossary Functions
// === Copyright © Dassault Systemes / Vincent BONESTEVE (2009)
// =======================================================================

/**
 * Function to write results html code on page
 */
 /*
 * V2E : 14-Nov-2013
 * Contextscope and offeringscope parameters passed to search applet
 */
function write(htmlCode) {
	var content = document.getElementById('dsdocsearch_results');
	content.innerHTML = htmlCode;
}

/**
 * Function to write search engine forem on page
 */
function writeSearch(htmlCode) {
	var content = document.getElementById('dsdocsearch_search');
	content.innerHTML = htmlCode;
}

/**
 * Function to retrieve query
 */
function getQuery() {
    // V2E : 14-Nov-2013
	var contextscope,offeringscope,args;
	args = extractParamsFromLocation(top.location);
	
	if(args["contextscope"] != null){
		contextscope = "&contextscope="+args["contextscope"];
	}else
		contextscope = "&contextscope=onpremise";
	if(args["offeringscope"] != null){
		offeringscope = "&offeringscope="+args["offeringscope"];
	}else
		offeringscope = "&offeringscope=innov";

	
    if (document.location!=null && document.location.search!=null){
    	return document.location.search+contextscope+offeringscope;
    } else {
        var result=document.location.href.split("?");
        if (result[1]!=null){
            return "?"+result[1];
        } else {
            return "?q=";
        }
    }
}
/*
* Function returns applets document base.
*/
function getAppletCodeBase(){
	return document.location.href;
}
/**
 * Function to make glossary letter links, using form value
 */
function doGlossaryLetterSearchWithJS(letter) {
    if (document.Search.brand!=null){
	    var brandSelected = encodeURI(document.Search.brand.value).replace(/&/g,"%26");
	} else {
	    var brandSelected = "all";
	}
	if (document.Search.dom!=null){
	    var domSelected = encodeURI(document.Search.dom.value).replace(/&/g,"%26");
    } else {
        var domSelected = "all";
	}
	if (document.Search.prod!=null){
	    var prodSelected = encodeURI(document.Search.prod.value).replace(/&/g,"%26");
	} else {
	    var prodSelected = "all";
	}
	if (document.Search.commprod!=null){
	    var commprodSelected = encodeURI(document.Search.commprod.value).replace(/&/g,"%26");
	} else {
	    var commprodSelected = "all";
	}
	document.location.href="?glossaryLetter="+letter+"&brand="+brandSelected+"&dom="+domSelected+"&prod="+prodSelected+"&commprod="+commprodSelected;
}

function newSearch() {

  var brand, domain, product, media, semtopic, q;
  brand = "brand=" + document.forms[0].brand.value;
  domain = "dom=" + document.forms[0].dom.value;
  product = "prod=" + document.forms[0].prod.value;
  media = "media=" + document.forms[0].media.value;
  semtopic = "semtopic=" + document.forms[0].semtopic.value;
  q = "?q=" + document.forms[0].q.value;
  q = q + "&" + brand + "&" + domain + "&" + product + "&" + media + "&" + semtopic;
  q = q.replace(/ /g, "+");
  if (media.indexOf("gloss") > 0)
    document.searchapplet.searchFromJs(q, true);
  else
    document.searchapplet.searchFromJs(q, false);
}

function moreSearchResult() {

  var brand, domain, product, media, semtopic, q;
  brand = "brand=" + document.forms[0].brand.value;
  domain = "dom=" + document.forms[0].dom.value;
  product = "prod=" + document.forms[0].prod.value;
  media = "media=gloss";
  semtopic = "semtopic=" + document.forms[0].semtopic.value;
  q = "?q=" + document.forms[0].q.value;
  q = q + "&" + brand + "&" + domain + "&" + product + "&" + media + "&" + semtopic;
  q = q.replace(/ /g, "+");

  document.searchapplet.searchFromJs(q, true);
}

function brandClick(brand) {
  document.searchapplet.brandSearch(brand);
}

function domainClick(domain) {
  document.searchapplet.domainSearch(domain);
}

function productClick(product) {
  document.searchapplet.productSearch(product);
}

function displayPage(pagno) {

  document.searchapplet.searchPage(pagno);
}

function glossaryPage(pagno) {
  document.searchapplet.glossarySearchPage(pagno);
}
