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
 objet["class"]["PLMCLGPublicCatalogFactoryServices"]=0;
objet["class"][0]="../PLMLibraryInterfaces/class_PLMCLGPublicCatalogFactoryServices_78705.htm";
objet["interface"]["PLMICLGBrowserItem"]=0;
objet["interface"][0]="../PLMLibraryInterfaces/interface_PLMICLGBrowserItem_38711.htm";
objet["interface"]["PLMICLGBrowserPLMItem"]=1;
objet["interface"][1]="../PLMLibraryInterfaces/interface_PLMICLGBrowserPLMItem_43400.htm";
objet["interface"]["PLMICLGCatalogBrowser"]=2;
objet["interface"][2]="../PLMLibraryInterfaces/interface_PLMICLGCatalogBrowser_44778.htm";
objet["interface"]["PLMICLGCatalogBrowserFactory"]=3;
objet["interface"][3]="../PLMLibraryInterfaces/interface_PLMICLGCatalogBrowserFactory_62449.htm";
objet["interface"]["PLMICLGCatalogFilter"]=4;
objet["interface"][4]="../PLMLibraryInterfaces/interface_PLMICLGCatalogFilter_42315.htm";
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