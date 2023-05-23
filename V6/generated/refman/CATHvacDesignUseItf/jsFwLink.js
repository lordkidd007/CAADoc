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
 objet["collection"]["CATLISTP(CATIHvaHvacPortRef)"]=0;
objet["collection"][0]="../CATHvacDesignUseItf/class_CATLISTP(CATIHvaHvacPortRef)_51927.htm";
objet["collection"]["CATLISTP(CATIHvaSupportInstance)"]=1;
objet["collection"][1]="../CATHvacDesignUseItf/class_CATLISTP(CATIHvaSupportInstance)_65491.htm";
objet["interface"]["CATHvaSessionServicesProvider"]=0;
objet["interface"][0]="../CATHvacDesignUseItf/interface_CATHvaSessionServicesProvider_63473.htm";
objet["interface"]["CATIHvaAttrAccess"]=1;
objet["interface"][1]="../CATHvacDesignUseItf/interface_CATIHvaAttrAccess_34370.htm";
objet["interface"]["CATIHvaDuctInstance"]=2;
objet["interface"][2]="../CATHvacDesignUseItf/interface_CATIHvaDuctInstance_38055.htm";
objet["interface"]["CATIHvaEquipmentInstance"]=3;
objet["interface"][3]="../CATHvacDesignUseItf/interface_CATIHvaEquipmentInstance_49320.htm";
objet["interface"]["CATIHvaEquipmentReference"]=4;
objet["interface"][4]="../CATHvacDesignUseItf/interface_CATIHvaEquipmentReference_51563.htm";
objet["interface"]["CATIHvaFlexibleDuctReference"]=5;
objet["interface"][5]="../CATHvacDesignUseItf/interface_CATIHvaFlexibleDuctReference_58948.htm";
objet["interface"]["CATIHvaHvacPortRef"]=6;
objet["interface"][6]="../CATHvacDesignUseItf/interface_CATIHvaHvacPortRef_35843.htm";
objet["interface"]["CATIHvaInsulationInstance"]=7;
objet["interface"][7]="../CATHvacDesignUseItf/interface_CATIHvaInsulationInstance_51869.htm";
objet["interface"]["CATIHvaInsulationReference"]=8;
objet["interface"][8]="../CATHvacDesignUseItf/interface_CATIHvaInsulationReference_54202.htm";
objet["interface"]["CATIHvaLogicalLineInstance"]=9;
objet["interface"][9]="../CATHvacDesignUseItf/interface_CATIHvaLogicalLineInstance_53509.htm";
objet["interface"]["CATIHvaLogicalLineReference"]=10;
objet["interface"][10]="../CATHvacDesignUseItf/interface_CATIHvaLogicalLineReference_55932.htm";
objet["interface"]["CATIHvaPartInstance"]=11;
objet["interface"][11]="../CATHvacDesignUseItf/interface_CATIHvaPartInstance_38114.htm";
objet["interface"]["CATIHvaPartReference"]=12;
objet["interface"][12]="../CATHvacDesignUseItf/interface_CATIHvaPartReference_39907.htm";
objet["interface"]["CATIHvaRigidDuctReference"]=13;
objet["interface"][13]="../CATHvacDesignUseItf/interface_CATIHvaRigidDuctReference_50894.htm";
objet["interface"]["CATIHvaSessionResourcesMgr"]=14;
objet["interface"][14]="../CATHvacDesignUseItf/interface_CATIHvaSessionResourcesMgr_54511.htm";
objet["interface"]["CATIHvaSpoolInstance"]=15;
objet["interface"][15]="../CATHvacDesignUseItf/interface_CATIHvaSpoolInstance_40187.htm";
objet["interface"]["CATIHvaSpoolReference"]=16;
objet["interface"][16]="../CATHvacDesignUseItf/interface_CATIHvaSpoolReference_42070.htm";
objet["interface"]["CATIHvaSupportInstance"]=17;
objet["interface"][17]="../CATHvacDesignUseItf/interface_CATIHvaSupportInstance_44797.htm";
objet["interface"]["CATIHvaSupportReference"]=18;
objet["interface"][18]="../CATHvacDesignUseItf/interface_CATIHvaSupportReference_46860.htm";
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