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
 objet["enum"]["CATScriptLanguage"]=0;
objet["enum"][0]="../System/enum_CATScriptLanguage_16249.htm";
objet["enum"]["CatScriptLibraryType"]=1;
objet["enum"][1]="../System/enum_CatScriptLibraryType_22393.htm";
objet["interface"]["AnyObject"]=0;
objet["interface"][0]="../System/interface_AnyObject_9080.htm";
objet["interface"]["CATBaseDispatch"]=1;
objet["interface"][1]="../System/interface_CATBaseDispatch_16015.htm";
objet["interface"]["CATBaseUnknown"]=2;
objet["interface"][2]="../System/interface_CATBaseUnknown_14959.htm";
objet["interface"]["Collection"]=3;
objet["interface"][3]="../System/interface_Collection_10201.htm";
objet["interface"]["DLNameSettingAtt"]=4;
objet["interface"][4]="../System/interface_DLNameSettingAtt_17688.htm";
objet["interface"]["DynLicenseSettingAtt"]=5;
objet["interface"][5]="../System/interface_DynLicenseSettingAtt_25037.htm";
objet["interface"]["IDispatch"]=6;
objet["interface"][6]="../System/interface_IDispatch_9119.htm";
objet["interface"]["LicenseSettingAtt"]=7;
objet["interface"][7]="../System/interface_LicenseSettingAtt_19482.htm";
objet["interface"]["SettingController"]=8;
objet["interface"][8]="../System/interface_SettingController_19959.htm";
objet["interface"]["SettingRepository"]=9;
objet["interface"][9]="../System/interface_SettingRepository_20344.htm";
objet["interface"]["SystemService"]=10;
objet["interface"][10]="../System/interface_SystemService_13520.htm";
objet["typedef"]["CATBSTR"]=0;
objet["typedef"][0]="../System/typedef_CATBSTR_5488.htm";
objet["typedef"]["CATSafeArrayVariant"]=1;
objet["typedef"][1]="../System/typedef_CATSafeArrayVariant_21467.htm";
objet["typedef"]["CATVariant"]=2;
objet["typedef"][2]="../System/typedef_CATVariant_8495.htm";
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