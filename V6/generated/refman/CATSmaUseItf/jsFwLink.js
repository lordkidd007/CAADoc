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
 objet["interface"]["CATIAerospaceSheetMetalFactory"]=0;
objet["interface"][0]="../CATSmaUseItf/interface_CATIAerospaceSheetMetalFactory_54839.htm";
objet["interface"]["CATIAerospaceSheetMetalServices"]=1;
objet["interface"][1]="../CATSmaUseItf/interface_CATIAerospaceSheetMetalServices_57949.htm";
objet["interface"]["CATIStmCharacteristicCurves"]=2;
objet["interface"][2]="../CATSmaUseItf/interface_CATIStmCharacteristicCurves_47026.htm";
objet["interface"]["CATIStmFlangeSurf"]=3;
objet["interface"][3]="../CATSmaUseItf/interface_CATIStmFlangeSurf_23908.htm";
objet["interface"]["CATIStmJoggle"]=4;
objet["interface"][4]="../CATSmaUseItf/interface_CATIStmJoggle_17940.htm";
objet["interface"]["CATIStmWeb"]=5;
objet["interface"][5]="../CATSmaUseItf/interface_CATIStmWeb_14476.htm";
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