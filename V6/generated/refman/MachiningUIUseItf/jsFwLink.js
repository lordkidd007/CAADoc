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
 objet["interface"]["DELIMfgCatalogServices"]=0;
objet["interface"][0]="../MachiningUIUseItf/interface_DELIMfgCatalogServices_40719.htm";
objet["interface"]["DELIMfgImmersiveUI"]=1;
objet["interface"][1]="../MachiningUIUseItf/interface_DELIMfgImmersiveUI_32029.htm";
objet["interface"]["DELIMfgManufacturingWorkbench"]=2;
objet["interface"][2]="../MachiningUIUseItf/interface_DELIMfgManufacturingWorkbench_59223.htm";
objet["interface"]["DELIMfgPrismaticReworkArea"]=3;
objet["interface"][3]="../MachiningUIUseItf/interface_DELIMfgPrismaticReworkArea_49989.htm";
objet["interface"]["DELIMfgToolEditor"]=4;
objet["interface"][4]="../MachiningUIUseItf/interface_DELIMfgToolEditor_30880.htm";
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