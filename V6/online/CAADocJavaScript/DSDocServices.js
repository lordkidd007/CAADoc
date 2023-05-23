/* isNet for mozilla */
var isNet = (navigator.appName.indexOf("Netscape") != -1);
var isIE  = (navigator.appName.indexOf("Microsoft") != -1);

//-------------------------------------------------------------------
// hh and ww are optional but it is recommended to use them
function ViewImage(img)
{
   img = img.href;
   var w = 0;
   var h = 0;
   if ( isIE )
   {
  	  w = 12;
  	  h = 37;
  	}
  	else if ( isNet )
  	{
  	  w = 28;
  	  h = 55;
  	}

	var titre = img;
	win=open("",'image','width=400,height=400,toolbar=no,scrollbars=no,resizable=yes');	
	win.document.write("<HTML><HEAD><TITLE>"+titre+"</TITLE></HEAD>");
	win.document.write("<SCRIPT language=javascript>function checksize()  { if (document.images[0].complete) {  window.resizeTo(document.images[0].width+"+w+",document.images[0].height+"+h+"); window.focus();} else { setTimeout('check()',250) } }</"+"SCRIPT>");
	win.document.write("<BODY onload='checksize()' leftMargin=0 topMargin=0 marginwidth=0 marginheight=0><IMG src='"+img+"' border=0>");
	win.document.write("");
	win.document.write("</BODY></HTML>");
	win.document.close();
}
