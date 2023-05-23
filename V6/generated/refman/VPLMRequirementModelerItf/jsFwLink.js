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
 objet["enum"]["PLMReqEntityClassification"]=0;
objet["enum"][0]="../VPLMRequirementModelerItf/enum_PLMReqEntityClassification_65580.htm";
objet["enum"]["PLMReqRelationClassification"]=1;
objet["enum"][1]="../VPLMRequirementModelerItf/enum_PLMReqRelationClassification_70949.htm";
objet["interface"]["PLMIReqLinkableEntity"]=0;
objet["interface"][0]="../VPLMRequirementModelerItf/interface_PLMIReqLinkableEntity_56199.htm";
objet["interface"]["PLMIReqRelation"]=1;
objet["interface"][1]="../VPLMRequirementModelerItf/interface_PLMIReqRelation_45268.htm";
objet["interface"]["PLMIReqStructuralEntity"]=2;
objet["interface"][2]="../VPLMRequirementModelerItf/interface_PLMIReqStructuralEntity_61466.htm";
objet["interface"]["PLMIRequirement"]=3;
objet["interface"][3]="../VPLMRequirementModelerItf/interface_PLMIRequirement_45585.htm";
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