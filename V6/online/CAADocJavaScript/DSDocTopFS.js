/*
 * Clears the search input
 */
function clear_textbox() {
  document.getElementById('search').value = "";
}

function clear_exa_textbox() {
  document.getElementById('q').value = "";
}

/*
 * Sets the text to display in the Add to Favorites command, depending on the browser.
 */ 
function setFavoriteText() {
	var fav = document.getElementById("favLink");
	var space = unescape("%A0");
	if (IE) {
		fav.innerHTML =  '<nobr><img alt=\"\" src=\"CAADocQuickRefs/images/DSXCom_QuickLink.png\">'+space+space+space+'Add'+space+'to'+space+'Favorites</nobr>';
	} else {
		fav.innerHTML =  '<nobr><img alt=\"\" src=\"CAADocQuickRefs/images/DSXCom_QuickLink.png\">'+space+space+space+'Bookmark'+space+'this'+space+'page</nobr>';
	}
}

/*
 * Displays the Add to Favorites or Print menu
 */
function displayMenu(obj, id) {
	if (id == "favCommand")
		obj.style.backgroundImage ='url(CAAIcons/images/Main_Add_Icon_DropDown_Over.png)';
	else if (id == "printCommand")
		obj.style.backgroundImage ='url(CAAIcons/images/Main_Share_Icon_DropDown_Over.png)';
	obj.style.backgroundColor ='#efefef';
	var cmd = document.getElementById(id);
	cmd.style.visibility = "visible";
}
/*
 * Hides the Add to Favorites or Print menu
 */
function hideMenu(obj, id) {
	if (id == "favCommand")
		obj.style.backgroundImage ='url(CAAIcons/images/Main_Add_Icon_Off.png)';
	else if (id == "printCommand")
		obj.style.backgroundImage ='url(CAAIcons/images/Main_Share_Icon_Off.png)';
	obj.style.backgroundColor ='transparent';
	var cmd = document.getElementById(id);
	cmd.style.visibility = "hidden";
}

/*
*  resets the position of the element as on browser resizes.
*/
function resetPosition() {

  var browserWidth = document.body.clientWidth;
  var dslogo = document.getElementById('dsLogo');
  var uatext = document.getElementById('UAText');
  var searchForm = document.getElementById('searchForm');
  var compass = document.getElementById('3dCompass');
  var printIcon = document.getElementById('printPage');
  if (browserWidth >= 1045) {
    var flexibleLength = browserWidth - 1045;
    dslogo.style.left = "106px";
    uatext.style.left = "336px";
    searchForm.style.left = (496 + flexibleLength) + "px";
    compass.style.left = (810 + flexibleLength) + "px";
    printIcon.style.left = (931 + flexibleLength) + "px";
  } else if (browserWidth >= 765) {
    var flexibleLength = browserWidth - 1045;
    dslogo.style.left = 106 + (2 * flexibleLength / 7) + "px";
    uatext.style.left = 336 + (3 * flexibleLength / 7) + "px";
/*    searchForm.style.left = 496 + (3 * flexibleLength / 7) + "px";
    compass.style.left = 790 + (4 * flexibleLength / 7) + "px";
    printIcon.style.left = 911 + (5 * flexibleLength / 7) + "px";
*/
    searchForm.style.left = 496 + (3 * flexibleLength / 7) + "px";
    compass.style.left = 810 + (4 * flexibleLength / 7) + "px";
    printIcon.style.left = 931 + (5 * flexibleLength / 7) + "px";
  } else {
    dslogo.style.left = 26 + "px";
    uatext.style.left = 216 + "px";
 /* searchForm.style.left = 336 + "px";
    compass.style.left = 660 + "px";
    printIcon.style.left = 711 + "px";
 */
    searchForm.style.left = 376 + "px";
    compass.style.left = 650 + "px";
    printIcon.style.left = 731 + "px";
  }
}
/*
*  Set the position of the element depending on browser size.
*/
function setPosition() {

  var browserWidth = document.body.clientWidth;
  var dslogo = document.getElementById('dsLogo');
  var uatext = document.getElementById('UAText');
  var searchForm = document.getElementById('searchForm');
  var compass = document.getElementById('3dCompass');
  var printIcon = document.getElementById('printPage');
  if (browserWidth >= 1045) {
    var flexibleLength = browserWidth - 1045;
    dslogo.style.left = "106px";
    uatext.style.left = "336px";
    searchForm.style.left = (496 + flexibleLength) + "px";
    compass.style.left = (810 + flexibleLength) + "px";
    printIcon.style.left = (931 + flexibleLength) + "px";
  } else if (browserWidth >= 765) {
    var flexibleLength = browserWidth - 1045;
    dslogo.style.left = 106 + (2 * flexibleLength / 7) + "px";
    uatext.style.left = 336 + (3 * flexibleLength / 7) + "px";
/*    searchForm.style.left = 496 + (3 * flexibleLength / 7) + "px";
    compass.style.left = 790 + (4 * flexibleLength / 7) + "px";
    printIcon.style.left = 911 + (5 * flexibleLength / 7) + "px";
*/
    searchForm.style.left = 496 + (3 * flexibleLength / 7) + "px";
    compass.style.left = 810 + (4 * flexibleLength / 7) + "px";
    printIcon.style.left = 931 + (5 * flexibleLength / 7) + "px";
  } else {
    dslogo.style.left = 26 + "px";
    uatext.style.left = 216 + "px";
/*    searchForm.style.left = 336 + "px";
    compass.style.left = 650 + "px";
    printIcon.style.left = 711 + "px";
*/
    searchForm.style.left = 376 + "px";
    compass.style.left = 650 + "px";
    printIcon.style.left = 731 + "px";
  }
}



/*
 * Stores the browser window width to compute the search form  when resizing.
 */
var browserWidthPrev;

/*
 * Sets the initial search form size and location.
 */
/*function setPosition() {

  computePosition();
}
*/
/*
 * Computes the search form size and location.
 */
/*
function computePosition() {
  var browserWidth = document.body.clientWidth;
  var searchForm = document.getElementById('searchForm');
  var searchField= document.getElementById('searchInput');
  var favoritesCmd = document.getElementById('favorites');
  var printCmd = document.getElementById('print');

  if (browserWidth < 880 && browserWidth > 374)
  {
    searchForm.style.left = ((504 - 144)/(880 - 374) * browserWidth) - 132 + "px";
    searchForm.style.width = ((288 - 150)/(880 - 374) * browserWidth) + 45 + "px";
    searchField.style.width = ((250 - 112)/(880 - 374) * browserWidth) + 7 + "px";
	favoritesCmd .style.left = browserWidth - 80 + "px";
	printCmd .style.left = browserWidth - 40 + "px";
  } else if (browserWidth <= 374) {
    searchForm.style.left = 145 + "px";
    searchForm.style.width = 150 + "px";
    searchField.style.width = 128 + "px";
	favoritesCmd .style.left = 294 + "px";
	printCmd.style.left = 334 + "px";
  } else {
	favoritesCmd .style.left = browserWidth - 80 + "px";
 	printCmd.style.left = browserWidth - 40 + "px";
  }
}
*/
/*
 * Resets the search form size and location when resizing.
 */
 /*
 function resetPosition() {
  var browserWidth = document.body.clientWidth;
  computePosition(); */
  /*
  *  | B  | LOGO | B  | COMPASS | B  |     COPYRIGHT   | B  | ...Search bar...........| B        | Favorites | B  | Print | B  |  
  *  0     16     48   64        128  144               492  504     
  *    16    32    16      64     16          348        12  10         250         28  8              32      8      32    8
  *                                                                            5 18  5                    -48           -8
  *  B : BLANK SPACE
  */
/* } */
