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
 objet["function"]["GetPosReferenceTableFactory"]=0;
objet["function"][0]="../PLMPosResourceUseItf/function_GetPosReferenceTableFactory_203558.htm";
objet["function"]["GetSecondaryOwnershipManager"]=1;
objet["function"][1]="../PLMPosResourceUseItf/function_GetSecondaryOwnershipManager_159110.htm";
objet["interface"]["PLMIPosReferenceTableFactory"]=0;
objet["interface"][0]="../PLMPosResourceUseItf/interface_PLMIPosReferenceTableFactory_61645.htm";
objet["interface"]["PLMIPosSecondaryOwnershipManager"]=1;
objet["interface"][1]="../PLMPosResourceUseItf/interface_PLMIPosSecondaryOwnershipManager_74466.htm";
objet["interface"]["PLMIPosSecondaryOwnershipVector"]=2;
objet["interface"][2]="../PLMPosResourceUseItf/interface_PLMIPosSecondaryOwnershipVector_72118.htm";
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