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
 objet["collection"]["CATListPtrCATIPLMNavEntity"]=0;
objet["collection"][0]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavEntity_63343.htm";
objet["collection"]["CATListPtrCATIPLMNavInstance"]=1;
objet["collection"][1]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavInstance_68224.htm";
objet["collection"]["CATListPtrCATIPLMNavOccurrence"]=2;
objet["collection"][2]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavOccurrence_74288.htm";
objet["collection"]["CATListPtrCATIPLMNavReference"]=3;
objet["collection"][3]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavReference_70827.htm";
objet["collection"]["CATListPtrCATIPLMNavRepInstance"]=4;
objet["collection"][4]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavRepInstance_76912.htm";
objet["collection"]["CATListPtrCATIPLMNavRepOccurrence"]=5;
objet["collection"][5]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavRepOccurrence_83612.htm";
objet["collection"]["CATListPtrCATIPLMNavRepReference"]=6;
objet["collection"][6]="../CATPLMComponentInterfaces/class_CATListPtrCATIPLMNavRepReference_79785.htm";
objet["class"]["CATPLMComponentInterfacesServices"]=0;
objet["class"][0]="../CATPLMComponentInterfaces/class_CATPLMComponentInterfacesServices_86928.htm";
objet["class"]["CATPLMEditabilityPublicServices"]=1;
objet["class"][1]="../CATPLMComponentInterfaces/class_CATPLMEditabilityPublicServices_80189.htm";
objet["class"]["CATPLMSessionServices"]=2;
objet["class"][2]="../CATPLMComponentInterfaces/class_CATPLMSessionServices_53853.htm";
objet["enum"]["CATPLMAuthoringStreamDescriptorKind"]=0;
objet["enum"][0]="../CATPLMComponentInterfaces/enum_CATPLMAuthoringStreamDescriptorKind_93115.htm";
objet["interface"]["CATIPLMComponentsSet"]=0;
objet["interface"][0]="../CATPLMComponentInterfaces/interface_CATIPLMComponentsSet_54129.htm";
objet["interface"]["CATIPLMIdentifierSet"]=1;
objet["interface"][1]="../CATPLMComponentInterfaces/interface_CATIPLMIdentifierSet_53688.htm";
objet["interface"]["CATIPLMNavEntity"]=2;
objet["interface"][2]="../CATPLMComponentInterfaces/interface_CATIPLMNavEntity_46744.htm";
objet["interface"]["CATIPLMNavInstance"]=3;
objet["interface"][3]="../CATPLMComponentInterfaces/interface_CATIPLMNavInstance_49785.htm";
objet["interface"]["CATIPLMNavOccurrence"]=4;
objet["interface"][4]="../CATPLMComponentInterfaces/interface_CATIPLMNavOccurrence_53729.htm";
objet["interface"]["CATIPLMNavReference"]=5;
objet["interface"][5]="../CATPLMComponentInterfaces/interface_CATIPLMNavReference_51488.htm";
objet["interface"]["CATIPLMNavRepInstance"]=6;
objet["interface"][6]="../CATPLMComponentInterfaces/interface_CATIPLMNavRepInstance_55523.htm";
objet["interface"]["CATIPLMNavRepReference"]=7;
objet["interface"][7]="../CATPLMComponentInterfaces/interface_CATIPLMNavRepReference_57496.htm";
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