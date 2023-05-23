var objet=new Array; 
     objet["class"]=new Array; 
     objet["exception"]=new Array; 
     objet["collection"]=new Array; 
     objet["notification"]=new Array; 
     objet["interface"]=new Array; 
     objet["struct"]=new Array; 
     objet["enum"]=new Array; 
     objet["define"]=new Array; 
     objet["typedef"]=new Array; 
     objet["function"]=new Array; 
 	var DSCharacteristic=new Array ; 
 objet["class"]["CATPixelImage"]=0;
objet["class"][0]="../MultimediaPixelImage/class_CATPixelImage_27988.htm";
objet["enum"]["CATDeallocatePixels"]=0;
objet["enum"][0]="../MultimediaPixelImage/enum_CATDeallocatePixels_37616.htm";
objet["enum"]["CATLineProgression"]=1;
objet["enum"][1]="../MultimediaPixelImage/enum_CATLineProgression_36147.htm";
objet["enum"]["CATPixelImageFormat"]=2;
objet["enum"][2]="../MultimediaPixelImage/enum_CATPixelImageFormat_37207.htm";
objet["enum"]["CATReadOnlyState"]=3;
objet["enum"][3]="../MultimediaPixelImage/enum_CATReadOnlyState_32105.htm";
objet["enum"]["CATSecondaryPixelImageFormat"]=4;
objet["enum"][4]="../MultimediaPixelImage/enum_CATSecondaryPixelImageFormat_58461.htm";
objet["enum"]["DITHER_MODE"]=5;
objet["enum"][5]="../MultimediaPixelImage/enum_DITHER_MODE_24003.htm";
function getDsCharacteristic(name,itype) { 
     var dsCh = null; 
     if (name!=null && itype!=null && itype == "class") { 
         dsCh = DSCharacteristic[name]; 
     } 
     if (dsCh == null) { 
        dsCh=itype; 
    }   
    return dsCh; 
 } 
 function locateObject(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){      
   return 1; 
 }else{ 
    return 0; 
 } 
 } 
 function openLinkNP(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){ 
     this.location=findobj; 
 } 
 }