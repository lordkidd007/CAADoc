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
 objet["class"]["CATPrintCaptureDialog"]=0;
objet["class"][0]="../PublishingCapture/class_CATPrintCaptureDialog_36951.htm";
objet["define"]["CATCaptFULL"]=0;
objet["define"][0]="../PublishingCapture/define_CATCaptFULL_20608.htm";
objet["define"]["CATCaptNoAlbum"]=1;
objet["define"][1]="../PublishingCapture/define_CATCaptNoAlbum_24992.htm";
objet["define"]["CATCaptNoCGM"]=2;
objet["define"][2]="../PublishingCapture/define_CATCaptNoCGM_21588.htm";
objet["define"]["CATCaptNoOnlyGeom"]=3;
objet["define"][3]="../PublishingCapture/define_CATCaptNoOnlyGeom_29625.htm";
objet["define"]["CATCaptNoPrint"]=4;
objet["define"][4]="../PublishingCapture/define_CATCaptNoPrint_25271.htm";
objet["typedef"]["CATCaptStyle"]=0;
objet["typedef"][0]="../PublishingCapture/typedef_CATCaptStyle_23383.htm";
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