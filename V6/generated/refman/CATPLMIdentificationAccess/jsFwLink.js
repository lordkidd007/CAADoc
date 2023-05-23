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
 objet["collection"]["CATLISTP(CATIAdpPLMIdentificator)"]=0;
objet["collection"][0]="../CATPLMIdentificationAccess/class_CATLISTP(CATIAdpPLMIdentificator)_83007.htm";
objet["collection"]["CATLISTP(CATIPLMComponent)"]=1;
objet["collection"][1]="../CATPLMIdentificationAccess/class_CATLISTP(CATIPLMComponent)_63198.htm";
objet["collection"]["CATLISTP(CATListOfCATIAdpPLMIdentificator)"]=2;
objet["collection"][2]="../CATPLMIdentificationAccess/class_CATLISTP(CATListOfCATIAdpPLMIdentificator)_113510.htm";
objet["collection"]["CATLISTV_CATIPLMComponent"]=3;
objet["collection"][3]="../CATPLMIdentificationAccess/class_CATLISTV_CATIPLMComponent_62655.htm";
objet["class"]["CATPLMTypeServices"]=0;
objet["class"][0]="../CATPLMIdentificationAccess/class_CATPLMTypeServices_49881.htm";
objet["enum"]["CATPLMCoreType"]=0;
objet["enum"][0]="../CATPLMIdentificationAccess/enum_CATPLMCoreType_42748.htm";
objet["interface"]["CATIAdpPLMIdentificator"]=0;
objet["interface"][0]="../CATPLMIdentificationAccess/interface_CATIAdpPLMIdentificator_62398.htm";
objet["interface"]["CATIAdpType"]=1;
objet["interface"][1]="../CATPLMIdentificationAccess/interface_CATIAdpType_42239.htm";
objet["interface"]["CATIPLMComponent"]=2;
objet["interface"][2]="../CATPLMIdentificationAccess/interface_CATIPLMComponent_48987.htm";
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