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
 objet["class"]["CATFmaServicesAccess"]=0;
objet["class"][0]="../CATPLMFmaModelerInterfaces/class_CATFmaServicesAccess_53388.htm";
objet["interface"]["CATIFmaClassification"]=0;
objet["interface"][0]="../CATPLMFmaModelerInterfaces/interface_CATIFmaClassification_58379.htm";
objet["interface"]["CATIFmaComponent"]=1;
objet["interface"][1]="../CATPLMFmaModelerInterfaces/interface_CATIFmaComponent_49086.htm";
objet["interface"]["CATIFmaConnectionInterferenceServices"]=2;
objet["interface"][2]="../CATPLMFmaModelerInterfaces/interface_CATIFmaConnectionInterferenceServices_105924.htm";
objet["interface"]["CATIFmaCoupling"]=3;
objet["interface"][3]="../CATPLMFmaModelerInterfaces/interface_CATIFmaCoupling_47344.htm";
objet["interface"]["CATIFmaJoinedZoneAccess"]=4;
objet["interface"][4]="../CATPLMFmaModelerInterfaces/interface_CATIFmaJoinedZoneAccess_61979.htm";
objet["interface"]["CATIFmaPLMFactoryServices"]=5;
objet["interface"][5]="../CATPLMFmaModelerInterfaces/interface_CATIFmaPLMFactoryServices_67239.htm";
objet["interface"]["CATIFmaPLMSpotFastener"]=6;
objet["interface"][6]="../CATPLMFmaModelerInterfaces/interface_CATIFmaPLMSpotFastener_59826.htm";
objet["interface"]["CATIFmaPositioningServices"]=7;
objet["interface"][7]="../CATPLMFmaModelerInterfaces/interface_CATIFmaPositioningServices_70689.htm";
objet["interface"]["CATIFmaReferenceReplaceServices"]=8;
objet["interface"][8]="../CATPLMFmaModelerInterfaces/interface_CATIFmaReferenceReplaceServices_84176.htm";
objet["interface"]["CATIFmaReferenceUpdateServices"]=9;
objet["interface"][9]="../CATPLMFmaModelerInterfaces/interface_CATIFmaReferenceUpdateServices_81350.htm";
objet["interface"]["CATIFmaRepresentationMode"]=10;
objet["interface"][10]="../CATPLMFmaModelerInterfaces/interface_CATIFmaRepresentationMode_67614.htm";
objet["interface"]["CATIFmaSpotLocation"]=11;
objet["interface"][11]="../CATPLMFmaModelerInterfaces/interface_CATIFmaSpotLocation_54230.htm";
objet["interface"]["CATIFmaStandardServices"]=12;
objet["interface"][12]="../CATPLMFmaModelerInterfaces/interface_CATIFmaStandardServices_62671.htm";
objet["interface"]["CATIFmaTypeReplace"]=13;
objet["interface"][13]="../CATPLMFmaModelerInterfaces/interface_CATIFmaTypeReplace_51906.htm";
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