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
 objet["interface"]["CATIMatFeaturePropEditFrame"]=0;
objet["interface"][0]="../CATMatInterfaces/interface_CATIMatFeaturePropEditFrame_51292.htm";
objet["interface"]["CATIMatNewMaterialInstance"]=1;
objet["interface"][1]="../CATMatInterfaces/interface_CATIMatNewMaterialInstance_49195.htm";
objet["interface"]["CATIMatNewMaterialSupport"]=2;
objet["interface"][2]="../CATMatInterfaces/interface_CATIMatNewMaterialSupport_47647.htm";
objet["interface"]["CATIMaterialDomain"]=3;
objet["interface"][3]="../CATMatInterfaces/interface_CATIMaterialDomain_31476.htm";
objet["interface"]["CATIMaterialDomainAuthoring"]=4;
objet["interface"][4]="../CATMatInterfaces/interface_CATIMaterialDomainAuthoring_52385.htm";
objet["interface"]["CATIMaterialDomainContent"]=5;
objet["interface"][5]="../CATMatInterfaces/interface_CATIMaterialDomainContent_46963.htm";
objet["interface"]["CATIMaterialDomainInfo"]=6;
objet["interface"][6]="../CATMatInterfaces/interface_CATIMaterialDomainInfo_39251.htm";
objet["interface"]["CATIMaterialGeneric"]=7;
objet["interface"][7]="../CATMatInterfaces/interface_CATIMaterialGeneric_33297.htm";
objet["interface"]["CATIMaterialRefCnx"]=8;
objet["interface"][8]="../CATMatInterfaces/interface_CATIMaterialRefCnx_31216.htm";
objet["interface"]["CATIMaterialReference"]=9;
objet["interface"][9]="../CATMatInterfaces/interface_CATIMaterialReference_37348.htm";
objet["interface"]["CATIMaterialReferenceFactory"]=10;
objet["interface"][10]="../CATMatInterfaces/interface_CATIMaterialReferenceFactory_55019.htm";
objet["interface"]["CATMatAppliedAccess"]=11;
objet["interface"][11]="../CATMatInterfaces/interface_CATMatAppliedAccess_33215.htm";
objet["interface"]["CATMaterialTools"]=12;
objet["interface"][12]="../CATMatInterfaces/interface_CATMaterialTools_28588.htm";
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