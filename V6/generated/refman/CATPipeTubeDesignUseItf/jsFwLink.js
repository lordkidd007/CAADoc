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
 objet["collection"]["CATLISTV(CATIPipPipingPortRef_var)"]=0;
objet["collection"][0]="../CATPipeTubeDesignUseItf/class_CATLISTV(CATIPipPipingPortRef_var)_79629.htm";
objet["collection"]["CATLISTV(CATIPipSupportInstance_var)"]=1;
objet["collection"][1]="../CATPipeTubeDesignUseItf/class_CATLISTV(CATIPipSupportInstance_var)_87893.htm";
objet["class"]["CATPipSessionServicesProvider"]=0;
objet["class"][0]="../CATPipeTubeDesignUseItf/class_CATPipSessionServicesProvider_69184.htm";
objet["interface"]["CATIPipAttrAccess"]=0;
objet["interface"][0]="../CATPipeTubeDesignUseItf/interface_CATIPipAttrAccess_42678.htm";
objet["interface"]["CATIPipEquipmentInstance"]=1;
objet["interface"][1]="../CATPipeTubeDesignUseItf/interface_CATIPipEquipmentInstance_57628.htm";
objet["interface"]["CATIPipEquipmentReference"]=2;
objet["interface"][2]="../CATPipeTubeDesignUseItf/interface_CATIPipEquipmentReference_59871.htm";
objet["interface"]["CATIPipFlexiblePipeReference"]=3;
objet["interface"][3]="../CATPipeTubeDesignUseItf/interface_CATIPipFlexiblePipeReference_67195.htm";
objet["interface"]["CATIPipInsulationInstance"]=4;
objet["interface"][4]="../CATPipeTubeDesignUseItf/interface_CATIPipInsulationInstance_60177.htm";
objet["interface"]["CATIPipInsulationReference"]=5;
objet["interface"][5]="../CATPipeTubeDesignUseItf/interface_CATIPipInsulationReference_62510.htm";
objet["interface"]["CATIPipLogicalLineInstance"]=6;
objet["interface"][6]="../CATPipeTubeDesignUseItf/interface_CATIPipLogicalLineInstance_61817.htm";
objet["interface"]["CATIPipLogicalLineReference"]=7;
objet["interface"][7]="../CATPipeTubeDesignUseItf/interface_CATIPipLogicalLineReference_64240.htm";
objet["interface"]["CATIPipPartInstance"]=8;
objet["interface"][8]="../CATPipeTubeDesignUseItf/interface_CATIPipPartInstance_46422.htm";
objet["interface"]["CATIPipPartReference"]=9;
objet["interface"][9]="../CATPipeTubeDesignUseItf/interface_CATIPipPartReference_48215.htm";
objet["interface"]["CATIPipPipeInstance"]=10;
objet["interface"][10]="../CATPipeTubeDesignUseItf/interface_CATIPipPipeInstance_46318.htm";
objet["interface"]["CATIPipPipingPortRef"]=11;
objet["interface"][11]="../CATPipeTubeDesignUseItf/interface_CATIPipPipingPortRef_48156.htm";
objet["interface"]["CATIPipRigidPipeReference"]=12;
objet["interface"][12]="../CATPipeTubeDesignUseItf/interface_CATIPipRigidPipeReference_59147.htm";
objet["interface"]["CATIPipSessionResourcesMgr"]=13;
objet["interface"][13]="../CATPipeTubeDesignUseItf/interface_CATIPipSessionResourcesMgr_62819.htm";
objet["interface"]["CATIPipSpoolInstance"]=14;
objet["interface"][14]="../CATPipeTubeDesignUseItf/interface_CATIPipSpoolInstance_48495.htm";
objet["interface"]["CATIPipSpoolReference"]=15;
objet["interface"][15]="../CATPipeTubeDesignUseItf/interface_CATIPipSpoolReference_50378.htm";
objet["interface"]["CATIPipSupportInstance"]=16;
objet["interface"][16]="../CATPipeTubeDesignUseItf/interface_CATIPipSupportInstance_53105.htm";
objet["interface"]["CATIPipSupportReference"]=17;
objet["interface"][17]="../CATPipeTubeDesignUseItf/interface_CATIPipSupportReference_55168.htm";
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